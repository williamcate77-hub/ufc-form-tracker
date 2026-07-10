"use client";

import { CacheStatus } from "@/lib/types";
import { useState } from "react";

interface CachePromptBannerProps {
  status: CacheStatus | null;
  isRefreshing: boolean;
  onRefresh: (mode?: "full" | "odds" | "changes") => Promise<void>;
}

export function CachePromptBanner({
  status,
  isRefreshing,
  onRefresh,
}: CachePromptBannerProps) {
  const [dismissed, setDismissed] = useState(false);

  if (!status || !status.needsRefresh || dismissed) {
    return null;
  }

  let message = "";
  let actionLabel = "Refresh";
  let mode: "full" | "odds" | "changes" = "full";

  if (status.reason?.includes("Event has passed")) {
    message = "That card is done. Pull in the next one?";
    mode = "full";
  } else if (status.reason?.includes("Fight day")) {
    message = "Fight day. Refresh for final odds and late changes.";
    mode = "changes";
  } else if (status.reason?.includes("Odds are stale")) {
    message = "Odds are getting old. Grab the latest prices?";
    mode = "odds";
  } else {
    message = "Time to refresh the card.";
  }

  return (
    <div className="sticky top-0 z-40 bg-amber-900/30 border-b border-amber-700/50 px-4 py-3 flex items-center justify-between gap-3 text-sm">
      <p className="text-amber-100">{message}</p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onRefresh(mode)}
          disabled={isRefreshing}
          className="px-3 py-1 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 rounded text-amber-50 text-sm font-medium transition"
        >
          {isRefreshing ? "Refreshing..." : actionLabel}
        </button>
        <button
          onClick={() => setDismissed(true)}
          disabled={isRefreshing}
          className="px-2 py-1 text-amber-200 hover:text-amber-100 disabled:opacity-50 transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
