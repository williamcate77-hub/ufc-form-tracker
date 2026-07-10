import { NextRequest, NextResponse } from "next/server";
import { handleRefreshRequest } from "@/lib/refresh-engine";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    const forceMode = body.forceMode as "full" | "odds" | "changes" | undefined;

    const result = await handleRefreshRequest(forceMode);

    return NextResponse.json(result, {
      status: result.status === "error" ? 500 : 200,
    });
  } catch (error) {
    console.error("Refresh route error:", error);
    return NextResponse.json(
      {
        status: "error",
        error: error instanceof Error ? error.message : "Unknown error",
        changedFightIndices: [],
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    {
      error: "Use POST /api/refresh",
    },
    { status: 405 }
  );
}
