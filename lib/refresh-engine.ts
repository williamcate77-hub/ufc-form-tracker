import { CachedEvent, RefreshStatus, Fight } from "./types";
import { getCachedEvent, cacheEvent } from "./cache";
import { generateFightCard, regenerateSingleFight } from "./anthropic-client";
import { FIGHT_DAY_THRESHOLD } from "./constants";
import { formatSydney } from "./dates";

function isEventPassed(eventDateISO: string): boolean {
  return new Date(eventDateISO) < new Date();
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
): Promise<"full" | "changes"> {
  if (!cachedEvent) {
    return "full";
  }

  if (isEventPassed(cachedEvent.eventDate)) {
    return "full";
  }

  if (isFightDay(cachedEvent.eventDate)) {
    return "changes";
  }

  return "full"; // Default to full refresh
}

let currentEventId = "UFC_300"; // Default for testing

export async function executeRefresh(
  mode: "full" | "changes"
): Promise<{ event: CachedEvent; changedFights: number[] }> {
  const startTime = Date.now();
  const changedFights: number[] = [];

  try {
    if (mode === "full") {
      // Generate entire new card
      const generated = await generateFightCard();
      currentEventId = generated.eventName.replace(/\s+/g, "_");

      const cachedEvent: CachedEvent = {
        eventId: generated.eventName.replace(/\s+/g, "_"),
        eventName: generated.eventName,
        eventDate: generated.eventDate,
        // Computed locally from the ISO date — never trust LLM timezone maths
        eventDateAEST: formatSydney(generated.eventDate),
        venue: generated.venue,
        broadcast: generated.broadcast,
        fights: generated.fights,
        generatedAt: Date.now(),
        cardSummary: generated.cardSummary,
        nextEvent: generated.nextEvent,
        _metadata: {
          generationDurationMs: Date.now() - startTime,
        },
      };

      await cacheEvent(cachedEvent);
      return { event: cachedEvent, changedFights: [] };
    }

    if (mode === "changes") {
      // Load cached event
      let cached = await getCachedEvent(currentEventId);
      if (!cached) {
        // Fallback to full generation if no cache
        return executeRefresh("full");
      }

      // Detect card changes and regenerate if needed
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

      cached._metadata.generationDurationMs = Date.now() - startTime;
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
  forceMode?: "full" | "changes"
): Promise<RefreshStatus> {
  try {
    const cached = await getCachedEvent("UFC_300");
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
