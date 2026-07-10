import { NextResponse } from "next/server";
import { getCachedEvent } from "@/lib/cache";
import { mockFightCard } from "@/lib/mock-data";

export async function GET() {
  try {
    // Try to get the cached event
    let cached = await getCachedEvent("UFC_300");

    // If no cache, return mock data
    if (!cached) {
      return NextResponse.json(mockFightCard);
    }

    return NextResponse.json(cached);
  } catch (error) {
    console.error("Error fetching current event:", error);
    // Fallback to mock data
    return NextResponse.json(mockFightCard);
  }
}
