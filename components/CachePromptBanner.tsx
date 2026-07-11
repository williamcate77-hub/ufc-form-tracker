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
    <div className="sticky top-0 z-40 flex items-center justify-between gap-3 border-b border-white/10 bg-zinc-950/80 px-4 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top))] text-sm backdrop-blur-xl">
      <p className="text-zinc-300">{message}</p>
      <div className="flex items-center gap-2">
        <button
          onClick={() => onRefresh(mode)}
          disabled={isRefreshing}
          className="rounded-full bg-red-600 px-4 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-red-500 disabled:opacity-50"
        >
          {isRefreshing ? "Refreshing..." : actionLabel}
        </button>
        <button
          onClick={() => setDismissed(true)}
          disabled={isRefreshing}
          aria-label="Dismiss"
          className="px-2 py-1 text-zinc-500 transition-colors hover:text-zinc-200 disabled:opacity-50"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
