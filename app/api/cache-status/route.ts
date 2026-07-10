import { NextResponse } from "next/server";
import { getCachedEvent } from "@/lib/cache";
import { CacheStatus } from "@/lib/types";
import { FIGHT_DAY_THRESHOLD } from "@/lib/constants";

export async function GET(): Promise<NextResponse<CacheStatus>> {
  try {
    const cached = await getCachedEvent("UFC_300");

    if (!cached) {
      return NextResponse.json({
        oddsAge: 0,
        needsRefresh: true,
        reason: "No cached event",
      } as CacheStatus);
    }

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

    return NextResponse.json({
      eventId: cached.eventId,
      cachedAt: cached.generatedAt,
      oddsAge: 0,
      needsRefresh,
      reason,
    } as CacheStatus);
  } catch (error) {
    console.error("Cache status error:", error);
    return NextResponse.json(
      {
        oddsAge: 0,
        needsRefresh: true,
        reason: "Error checking cache",
      } as CacheStatus,
      { status: 500 }
    );
  }
}
