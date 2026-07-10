import { CachedEvent, RefreshStatus, Fight } from "./types";
import { getCachedEvent, cacheEvent } from "./cache";
import { generateFightCard, regenerateSingleFight } from "./anthropic-client";
import { fetchAllOdds } from "./odds-client";
import {
  ODDS_STALE_THRESHOLD,
  FIGHT_DAY_THRESHOLD,
} from "./constants";

function isEventPassed(eventDateISO: string): boolean {
  return new Date(eventDateISO) < new Date();
}

function getOddsAge(lastUpdated: number): number {
  return Date.now() - lastUpdated;
}

function isFightDay(eventDateISO: string): boolean {
  const eventTime = new Date(eventDateISO).getTime();
  const now = Date.now();
  const timeUntilEvent = eventTime - now;
  return timeUntilEvent < FIGHT_DAY_THRESHOLD && timeUntilEvent > 0;
}

async function detectCardChanges(
  cachedFights: Fight[],
  currentEventName: string
): Promise<number[]> {
  // For now, return empty array (no changes detected)
  // In a full implementation, this would fetch the current card
  // and compare fighter names, records, etc.
  return [];
}

export async function decideRefreshMode(
  cachedEvent: CachedEvent | null
): Promise<"full" | "odds" | "changes"> {
  if (!cachedEvent) {
    return "full";
  }

  if (isEventPassed(cachedEvent.eventDate)) {
    return "full";
  }

  if (isFightDay(cachedEvent.eventDate)) {
    return "changes";
  }

  const oddsAge = getOddsAge(cachedEvent.oddsLastUpdated);
  if (oddsAge > ODDS_STALE_THRESHOLD) {
    return "odds";
  }

  return "odds"; // Default to refresh odds
}

let currentEventId = "UFC_300"; // Default for testing

export async function executeRefresh(
  mode: "full" | "odds" | "changes"
): Promise<{ event: CachedEvent; changedFights: number[] }> {
  const startTime = Date.now();
  const changedFights: number[] = [];

  try {
    if (mode === "full") {
      // Generate entire new card
      const generated = await generateFightCard();
      currentEventId = generated.eventName.replace(/\s+/g, "_");

      // Fetch odds for all fights
      const fighterPairs = generated.fights.map((fight) => [
        fight.fighters[0].name,
        fight.fighters[1].name,
      ] as [string, string]);

      const odds = await fetchAllOdds(fighterPairs);

      // Merge odds into fights
      const fightsWithOdds = generated.fights.map((fight, index) => {
        return {
          ...fight,
          odds: odds[index] || fight.odds,
        };
      });

      const cachedEvent: CachedEvent = {
        eventId: generated.eventName.replace(/\s+/g, "_"),
        eventName: generated.eventName,
        eventDate: generated.eventDate,
        eventDateAEST: generated.eventDateAEST,
        venue: generated.venue,
        broadcast: generated.broadcast,
        fights: fightsWithOdds,
        generatedAt: Date.now(),
        oddsLastUpdated: Date.now(),
        cardSummary: generated.cardSummary,
        nextEvent: generated.nextEvent,
        _metadata: {
          generationDurationMs: Date.now() - startTime,
          oddsRefreshCount: 1,
        },
      };

      await cacheEvent(cachedEvent);
      return { event: cachedEvent, changedFights: [] };
    }

    if (mode === "odds" || mode === "changes") {
      // Load cached event
      let cached = await getCachedEvent(currentEventId);
      if (!cached) {
        // Fallback to full generation if no cache
        return executeRefresh("full");
      }

      // Detect card changes if needed
      if (mode === "changes") {
        const changed = await detectCardChanges(
          cached.fights,
          cached.eventName
        );
        changedFights.push(...changed);

        // Regenerate changed fights
        for (const fightIndex of changed) {
          const fight = cached.fights[fightIndex];
          if (fight) {
            const regenerated = await regenerateSingleFight(
              fightIndex,
              cached.eventName,
              [fight.fighters[0].name, fight.fighters[1].name]
            );
            cached.fights[fightIndex] = regenerated;
          }
        }
      }

      // Refresh odds for all fights
      const fighterPairs = cached.fights.map((fight) => [
        fight.fighters[0].name,
        fight.fighters[1].name,
      ] as [string, string]);

      const odds = await fetchAllOdds(fighterPairs);

      // Merge new odds
      cached.fights = cached.fights.map((fight, index) => {
        return {
          ...fight,
          odds: odds[index] || fight.odds,
        };
      });

      cached.oddsLastUpdated = Date.now();
      cached._metadata.oddsRefreshCount += 1;
      cached._metadata.generationDurationMs =
        Date.now() - startTime;

      await cacheEvent(cached);
      return { event: cached, changedFights };
    }

    throw new Error("Invalid refresh mode");
  } catch (error) {
    console.error("Refresh failed:", error);
    throw error;
  }
}

export async function handleRefreshRequest(
  forceMode?: "full" | "odds" | "changes"
): Promise<RefreshStatus> {
  try {
    const cached = await getCachedEvent("");
    const mode = forceMode || (await decideRefreshMode(cached));

    const { event, changedFights } = await executeRefresh(mode);

    return {
      status: "done",
      eventId: event.eventId,
      changedFightIndices: changedFights,
      mode,
      message: `Refresh complete. ${changedFights.length} fights changed.`,
    };
  } catch (error) {
    console.error("Refresh request failed:", error);
    return {
      status: "error",
      changedFightIndices: [],
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
