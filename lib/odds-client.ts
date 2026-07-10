import { ODDS_API_KEY, ODDS_API_BASE, MMA_SPORT_KEY, ODDS_REGION } from "./constants";
import { BoutOdds } from "./types";

interface OddsApiMarket {
  key: string;
  outcomes: Array<{
    name: string;
    price: number;
  }>;
}

interface OddsApiEvent {
  id: string;
  sport_key: string;
  sport_title: string;
  commence_time: string;
  home_team: string;
  away_team: string;
  bookmakers: Array<{
    key: string;
    title: string;
    markets: OddsApiMarket[];
  }>;
}

function calculateImpliedProbability(
  decimal: number
): number {
  return 1 / decimal;
}

function calculateFavourite(odds: [number, number]): 0 | 1 {
  return odds[0] < odds[1] ? 0 : 1;
}

export async function fetchOddsForFighters(
  fighter1: string,
  fighter2: string
): Promise<BoutOdds | null> {
  try {
    const url = new URL(`${ODDS_API_BASE}/sports/${MMA_SPORT_KEY}/events`);
    url.searchParams.append("apiKey", ODDS_API_KEY);
    url.searchParams.append("regions", ODDS_REGION);
    url.searchParams.append("markets", "h2h");

    const response = await fetch(url.toString());

    if (!response.ok) {
      console.error(
        `Odds API error: ${response.status}`,
        await response.text()
      );
      return null;
    }

    const events = (await response.json()) as OddsApiEvent[];

    // Find matching event
    const matchingEvent = events.find((event) => {
      const homeMatch =
        event.home_team.toLowerCase().includes(fighter1.toLowerCase()) ||
        event.home_team.toLowerCase().includes(fighter2.toLowerCase());
      const awayMatch =
        event.away_team.toLowerCase().includes(fighter1.toLowerCase()) ||
        event.away_team.toLowerCase().includes(fighter2.toLowerCase());
      return homeMatch && awayMatch;
    });

    if (!matchingEvent) {
      console.warn(`No odds found for ${fighter1} vs ${fighter2}`);
      return null;
    }

    // Extract best AU odds for each fighter
    const bestOdds: [number | null, number | null] = [null, null];
    const bookmakers: [string | null, string | null] = [null, null];

    for (const bookmaker of matchingEvent.bookmakers) {
      const h2hMarket = bookmaker.markets.find((m) => m.key === "h2h");
      if (!h2hMarket || h2hMarket.outcomes.length < 2) continue;

      const homeOdds = h2hMarket.outcomes[0].price;
      const awayOdds = h2hMarket.outcomes[1].price;

      // Update if this is a better price
      if (bestOdds[0] === null || homeOdds < bestOdds[0]) {
        bestOdds[0] = homeOdds;
        bookmakers[0] = bookmaker.title;
      }

      if (bestOdds[1] === null || awayOdds < bestOdds[1]) {
        bestOdds[1] = awayOdds;
        bookmakers[1] = bookmaker.title;
      }
    }

    if (!bestOdds[0] || !bestOdds[1]) {
      console.warn(`Incomplete odds for ${fighter1} vs ${fighter2}`);
      return null;
    }

    const favouriteIndex = calculateFavourite(
      bestOdds as [number, number]
    );
    const impliedProb: [number, number] = [
      calculateImpliedProbability(bestOdds[0]),
      calculateImpliedProbability(bestOdds[1]),
    ];

    // Normalize so they sum to ~1
    const total = impliedProb[0] + impliedProb[1];
    const normalized: [number, number] = [
      impliedProb[0] / total,
      impliedProb[1] / total,
    ];

    return {
      fighters: [
        { decimal: bestOdds[0], bookmaker: bookmakers[0] || "Unknown" },
        { decimal: bestOdds[1], bookmaker: bookmakers[1] || "Unknown" },
      ],
      updatedAt: Date.now(),
      favouriteIndex,
      impliedProbability: normalized,
    };
  } catch (error) {
    console.error("Error fetching odds:", error);
    return null;
  }
}

export async function fetchAllOdds(
  fighterPairs: Array<[string, string]>
): Promise<(BoutOdds | null)[]> {
  // Fetch odds in parallel with a small delay between requests to avoid rate limits
  const odds = await Promise.all(
    fighterPairs.map(async (pair, index) => {
      // Stagger requests to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, index * 100));
      return fetchOddsForFighters(pair[0], pair[1]);
    })
  );

  return odds;
}
