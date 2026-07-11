import Anthropic from "@anthropic-ai/sdk";
import { ANTHROPIC_API_KEY } from "./constants";
import { Fight } from "./types";
import { mockFightCard } from "./mock-data";

function isMockMode(): boolean {
  return (
    !ANTHROPIC_API_KEY ||
    ANTHROPIC_API_KEY.includes("test") ||
    ANTHROPIC_API_KEY.includes("your_key")
  );
}

function getClient(): Anthropic {
  return new Anthropic({ apiKey: ANTHROPIC_API_KEY });
}

/**
 * Run a generation with web search enabled so event data (fighters, dates,
 * records, odds) is grounded in current reality instead of training data.
 * Streams to avoid HTTP timeouts on long generations.
 */
async function callClaude(prompt: string): Promise<string> {
  const client = getClient();

  const message = await client.messages
    .stream({
      model: "claude-opus-4-8",
      max_tokens: 32000,
      thinking: { type: "adaptive" },
      tools: [
        {
          type: "web_search_20260209",
          name: "web_search",
          max_uses: 10,
        },
      ],
      messages: [{ role: "user", content: prompt }],
    })
    .finalMessage();

  if (message.stop_reason === "refusal") {
    throw new Error("Generation was declined by the model");
  }

  // The JSON payload is the final text block (earlier blocks are thinking
  // and web search activity)
  const textBlocks = message.content.filter(
    (b): b is Anthropic.TextBlock => b.type === "text"
  );
  const last = textBlocks[textBlocks.length - 1];
  if (!last?.text) {
    throw new Error("No text content in response");
  }

  return last.text;
}

function parseJsonResponse<T>(response: string): T {
  // Remove markdown code fences if present, and any preamble before the JSON
  const cleaned = response
    .replace(/^[\s\S]*?```json\n?/, "")
    .replace(/\n?```[\s\S]*$/, "")
    .trim();
  const jsonStart = cleaned.indexOf("{");
  if (jsonStart === -1) {
    throw new Error("No JSON object found in response");
  }
  return JSON.parse(cleaned.slice(jsonStart)) as T;
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
  if (isMockMode()) {
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

  const prompt = `You are a UFC analyst. Use web search to find the next upcoming UFC event (either a numbered event like UFC 300 or a Fight Night card) and verify every fact you output: the exact event date and start time, the full fight card, each fighter's record, age, height, reach, stance and recent results. After researching, return ONLY a valid JSON object (no markdown fences, no explanations) with this exact structure:

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
- Use web search to verify the event, the date, and every fighter's details. Do not rely on memory
- eventDate must be the exact UTC start time of the main card as an ISO 8601 string. Get this right: cross-check the announced local start time and convert to UTC carefully
- Return ONLY valid JSON, no markdown, no explanations
- fighter.rank is null if not ranked, otherwise an integer
- heightCm and reachCm are integers in centimetres; stance is "Orthodox", "Southpaw" or "Switch". Use null if unknown
- Recent fights are last 3-5 fights, most recent first
- round is the round the fight ended (integer); omit or null for decisions
- Division and boutType must be exact (main event, co-main, main card, featured prelim, prelim)
- Editorial content must be Australian spelling (favour not favor, honour, centre)
- Odds references in thePick use current real bookmaker prices found via search
- No em dashes, no emojis, no exclamation marks in copy
- boutIndex starts at 0 for main event
- Include all main card and featured prelims; can skip some lower prelims if many fights`;

  const response = await callClaude(prompt);

  try {
    return parseJsonResponse(response);
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
  const prompt = `You are a UFC analyst. Use web search to verify current details, then regenerate the breakdown for a single fight on ${eventName}: ${fighterNames[0]} vs ${fighterNames[1]}. Return ONLY valid JSON (no markdown fences) matching this structure:

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
      "heightCm": null,
      "reachCm": null,
      "stance": null,
      "recentFights": []
    },
    {
      "name": "${fighterNames[1]}",
      "nickname": "...",
      "country": "...",
      "record": "...",
      "uFCRecord": "...",
      "rank": null,
      "age": 0,
      "heightCm": null,
      "reachCm": null,
      "stance": null,
      "recentFights": []
    }
  ],
  "editorial": {}
}

Ensure all fields match the schema exactly. Return JSON only.`;

  const response = await callClaude(prompt);
  try {
    return parseJsonResponse<Fight>(response);
  } catch (error) {
    throw new Error(`Failed to parse single fight regeneration: ${error}`);
  }
}
