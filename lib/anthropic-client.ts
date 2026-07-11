import { ANTHROPIC_API_KEY, GENERATION_TIMEOUT } from "./constants";
import { Fight, CachedEvent } from "./types";
import { mockFightCard } from "./mock-data";

const ANTHROPIC_BASE_URL = "https://api.anthropic.com/v1";

interface AnthropicMessage {
  content: Array<{ type: string; text?: string }>;
}

async function callClaude(prompt: string): Promise<string> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), GENERATION_TIMEOUT);

  try {
    const response = await fetch(`${ANTHROPIC_BASE_URL}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-20250514",
        max_tokens: 16000,
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(
        `Anthropic API error: ${response.status} ${JSON.stringify(error)}`
      );
    }

    const data = (await response.json()) as AnthropicMessage;
    const textContent = data.content.find((c) => c.type === "text");
    if (!textContent || !textContent.text) {
      throw new Error("No text content in response");
    }

    return textContent.text;
  } catch (error) {
    clearTimeout(timeoutId);
    throw error;
  }
}

export async function generateFightCard(): Promise<{
  fights: Fight[];
  eventName: string;
  eventDate: string;
  eventDateAEST: string;
  venue: string;
  broadcast: string;
  cardSummary: string;
  nextEvent?: { name: string; date: string };
}> {
  // Use mock data if no API key
  if (!ANTHROPIC_API_KEY || ANTHROPIC_API_KEY.includes("test") || ANTHROPIC_API_KEY.includes("your_key")) {
    console.log("Using mock fight card data (no API key configured)");
    return {
      fights: mockFightCard.fights,
      eventName: mockFightCard.eventName,
      eventDate: mockFightCard.eventDate,
      eventDateAEST: mockFightCard.eventDateAEST,
      venue: mockFightCard.venue,
      broadcast: mockFightCard.broadcast,
      cardSummary: mockFightCard.cardSummary,
      nextEvent: mockFightCard.nextEvent,
    };
  }

  const prompt = `You are a UFC analyst. Search the web for the next upcoming UFC event (either a numbered event like UFC 300 or a Fight Night card). Find and return ONLY a valid JSON object (no markdown fences, no explanations) with this exact structure:

{
  "eventName": "UFC 300",
  "eventDate": "2024-08-17T18:00:00Z",
  "eventDateAEST": "Sat 17 Aug 2024, 2:00pm AEST",
  "venue": "Madison Square Garden, New York",
  "broadcast": "Main card ESPN+ 7pm AEST",
  "cardSummary": "One-paragraph summary of the card highlighting the main event and key matchups.",
  "nextEvent": {
    "name": "UFC 301",
    "date": "2024-09-14"
  },
  "fights": [
    {
      "boutIndex": 0,
      "boutType": "main event",
      "rounds": 5,
      "division": "Welterweight",
      "notableFlag": "rematch",
      "fighters": [
        {
          "name": "Conor McGregor",
          "nickname": "The Notorious",
          "country": "Ireland",
          "record": "22-6",
          "uFCRecord": "9-4",
          "rank": null,
          "age": 36,
          "heightCm": 175,
          "reachCm": 188,
          "stance": "Southpaw",
          "recentFights": [
            {
              "opponent": "Dustin Poirier",
              "result": "L",
              "method": "KO",
              "round": 2,
              "year": 2021
            }
          ]
        },
        {
          "name": "Max Holloway",
          "nickname": "Blessed",
          "country": "USA",
          "record": "27-9",
          "uFCRecord": "24-9",
          "rank": 1,
          "age": 33,
          "heightCm": 180,
          "reachCm": 175,
          "stance": "Orthodox",
          "recentFights": [
            {
              "opponent": "Ilia Topuria",
              "result": "L",
              "method": "KO",
              "round": 3,
              "year": 2024
            }
          ]
        }
      ],
      "editorial": {
        "thePick": "Holloway by decision. Max is heavily favoured at -210, McGregor back at +175.",
        "sneakyAngle": "McGregor's left hand KO early before fatigue sets in.",
        "recentForm": "McGregor hasn't fought since July 2021 (snapped leg). Lost 3 of last 4. Holloway stayed active fighting elite opponents all year.",
        "fightingStyle": "McGregor: counter-striking southpaw with devastating left hand, front-loads fights. Holloway: volume machine, highest striking output, five rounds favours him.",
        "historyBetweenThem": "Fought in 2013 at featherweight. McGregor won unanimous decision despite torn ACL.",
        "experienceAndRecord": "McGregor: 22-6, former two-division champ. Holloway: 27-9, former featherweight champ and BMF champ.",
        "popularityAndPopCulture": "McGregor is the biggest star in UFC history - Proper 12 whiskey, Mayweather boxing match, Road House remake. Holloway is universally loved Hawaiian family man.",
        "oneLiner": "Five years of ring rust against the busiest man in the sport. If Conor doesn't land the left hand in two rounds, Max drowns him.",
        "oneLinnerSubstantiation": [
          "McGregor hasn't fought in 5 years (since July 2021)",
          "Holloway has fought constantly against elite competition",
          "Holloway has highest striking volume in UFC history",
          "McGregor's left hand is devastating but only effective early",
          "Five-round fights favour the cardio fighter"
        ]
      }
    }
  ]
}

Important rules:
- Return ONLY valid JSON, no markdown, no explanations
- fighter.rank is null if not ranked, otherwise an integer
- heightCm and reachCm are integers in centimetres; stance is "Orthodox", "Southpaw" or "Switch". Use null if unknown
- Recent fights are last 3-5 fights, most recent first
- round is the round the fight ended (integer); omit or null for decisions
- Division and boutType must be exact (main event, co-main, main card, featured prelim, prelim)
- Editorial content must be Australian spelling (favour not favor, honour, centre)
- Odds references in thePick use Australian decimal odds and US-style bookmaker odds (-210 means 2.1)
- No em dashes, no emojis, no exclamation marks in copy
- boutIndex starts at 0 for main event
- Include all main card and featured prelims; can skip some lower prelims if many fights`;

  const response = await callClaude(prompt);

  try {
    // Remove markdown code fences if present
    const cleaned = response
      .replace(/^```json\n?/, "")
      .replace(/\n?```$/, "")
      .trim();
    return JSON.parse(cleaned);
  } catch (error) {
    console.error("JSON parse error:", response);
    throw new Error(`Failed to parse Claude response: ${error}`);
  }
}

export async function regenerateSingleFight(
  fightIndex: number,
  eventName: string,
  fighterNames: [string, string]
): Promise<Fight> {
  const prompt = `You are a UFC analyst. Regenerate the editorial breakdown for a single UFC fight. Return ONLY valid JSON (no markdown fences):

{
  "boutIndex": ${fightIndex},
  "boutType": "main card",
  "rounds": 3,
  "division": "Bantamweight",
  "notableFlag": null,
  "fighters": [
    {
      "name": "${fighterNames[0]}",
      "nickname": "...",
      "country": "...",
      "record": "...",
      "uFCRecord": "...",
      "rank": null,
      "age": 0,
      "recentFights": [...]
    },
    {
      "name": "${fighterNames[1]}",
      ...
    }
  ],
  "editorial": { ... },
  "odds": { ... },
  "methodOfVictory": { ... }
}

Ensure all fields match the schema exactly. Return JSON only.`;

  const response = await callClaude(prompt);
  try {
    const cleaned = response
      .replace(/^```json\n?/, "")
      .replace(/\n?```$/, "")
      .trim();
    return JSON.parse(cleaned);
  } catch (error) {
    throw new Error(`Failed to parse single fight regeneration: ${error}`);
  }
}
