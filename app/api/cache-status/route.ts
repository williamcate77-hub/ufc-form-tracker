import { NextResponse } from "next/server";
import { getCachedEvent } from "@/lib/cache";
import { CacheStatus } from "@/lib/types";
import { ODDS_STALE_THRESHOLD, FIGHT_DAY_THRESHOLD } from "@/lib/constants";

export async function GET(): Promise<NextResponse<CacheStatus>> {
  try {
    const cached = await getCachedEvent("");

    if (!cached) {
      return NextResponse.json({
        oddsAge: Infinity,
        needsRefresh: true,
        reason: "No cached event",
      } as CacheStatus);
    }

    const oddsAge = Date.now() - cached.oddsLastUpdated;
    const eventTime = new Date(cached.eventDate).getTime();
    const timeUntilEvent = eventTime - Date.now();

    let needsRefresh = false;
    let reason: string | undefined;

    // Event has passed
    if (timeUntilEvent < 0) {
      needsRefresh = true;
      reason = "Event has passed";
    }
    // Fight day
    else if (timeUntilEvent < FIGHT_DAY_THRESHOLD) {
      needsRefresh = true;
      reason = "Fight day - check for late changes";
    }
    // Odds are stale
    else if (oddsAge > ODDS_STALE_THRESHOLD) {
      needsRefresh = true;
      reason = "Odds are stale";
    }

    return NextResponse.json({
      eventId: cached.eventId,
      cachedAt: cached.generatedAt,
      oddsAge,
      needsRefresh,
      reason,
    } as CacheStatus);
  } catch (error) {
    console.error("Cache status error:", error);
    return NextResponse.json(
      {
        oddsAge: Infinity,
        needsRefresh: true,
        reason: "Error checking cache",
      } as CacheStatus,
      { status: 500 }
    );
  }
}
