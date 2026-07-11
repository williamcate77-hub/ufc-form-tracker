"use client";

import { useCacheState } from "@/hooks/useCacheState";
import { CachePromptBanner } from "@/components/CachePromptBanner";
import { FightCard } from "@/components/FightCard";
import { useState } from "react";

const BOUT_TYPE_LABELS: Record<string, string> = {
  "main event": "Main Event",
  "co-main": "Co-Main",
  "main card": "Main Card",
  "featured prelim": "Featured Prelim",
  prelim: "Prelim",
};

function OctagonMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <polygon
        points="39.5,30.5 30.5,39.5 17.5,39.5 8.5,30.5 8.5,17.5 17.5,8.5 30.5,8.5 39.5,17.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  const { event, loading, error, cacheStatus, isRefreshing, refresh } =
    useCacheState();
  const [showPrelims, setShowPrelims] = useState(false);
  const [summaryExpanded, setSummaryExpanded] = useState(false);

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <OctagonMark className="mx-auto mb-4 h-10 w-10 animate-pulse text-red-500" />
          <div className="text-sm text-zinc-500">Loading fight card...</div>
        </div>
      </div>
    );
  }

  if (error && !cacheStatus) {
    return (
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="w-full max-w-sm text-center">
          <h1 className="mb-2 text-2xl font-bold tracking-tight text-zinc-50">
            Something went wrong
          </h1>
          <p className="mb-6 text-sm text-zinc-400">{error}</p>
          <button
            onClick={() => refresh("full")}
            disabled={isRefreshing}
            className="w-full rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition-all hover:bg-red-500 active:scale-[0.99] disabled:opacity-50"
          >
            {isRefreshing ? "Refreshing..." : "Try again"}
          </button>
        </div>
      </div>
    );
  }

  if (!event) {
    // No banner here: the landing button is the only CTA
    return (
      <div className="flex flex-col flex-1">
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="w-full max-w-sm text-center">
            <OctagonMark className="mx-auto mb-6 h-14 w-14 text-red-500" />
            <div className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-red-400">
              Fight Week Form Guide
            </div>
            <h1 className="mb-2 text-4xl font-black uppercase tracking-tight text-zinc-50">
              UFC Form
              <br />
              Tracker
            </h1>
            <p className="mb-8 text-sm text-zinc-500">
              Every fight on the next card, broken down.
            </p>
            <button
              onClick={() => refresh("full")}
              disabled={isRefreshing}
              className="w-full rounded-xl bg-red-600 px-6 py-3.5 font-bold text-white shadow-lg shadow-red-600/25 transition-all hover:bg-red-500 active:scale-[0.99] disabled:opacity-50"
            >
              {isRefreshing ? "Building the card..." : "Load the card"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const prelimFights = event.fights.filter(
    (f) => f.boutType === "prelim" || f.boutType === "featured prelim"
  );
  const mainCardFights = event.fights.filter(
    (f) =>
      f.boutType === "main event" ||
      f.boutType === "co-main" ||
      f.boutType === "main card"
  );

  const visibleFights = showPrelims ? prelimFights : mainCardFights;

  return (
    <div className="flex flex-col flex-1">
      {cacheStatus && (
        <CachePromptBanner
          status={cacheStatus}
          isRefreshing={isRefreshing}
          onRefresh={refresh}
        />
      )}

      <div className="mx-auto flex w-full max-w-2xl flex-col flex-1 px-4 pb-4 pt-[calc(2rem+env(safe-area-inset-top))]">
        {/* Event header */}
        <div className="mb-6">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-red-400">
              Next Event
            </span>
            <button
              onClick={() => refresh()}
              disabled={isRefreshing}
              className="text-xs text-zinc-500 transition-colors hover:text-zinc-200 disabled:opacity-50"
            >
              {isRefreshing ? "Refreshing..." : "↻ Refresh"}
            </button>
          </div>
          <h1 className="mb-3 text-5xl font-black uppercase tracking-tight text-zinc-50">
            {event.eventName}
          </h1>
          <div className="space-y-0.5 text-sm">
            <p className="font-medium text-zinc-300">{event.eventDateAEST}</p>
            <p className="text-zinc-500">
              {event.venue} · {event.broadcast}
            </p>
          </div>
        </div>

        {/* Card summary */}
        <div className="mb-6 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
          <p
            className={`text-sm leading-relaxed text-zinc-300 ${
              summaryExpanded ? "" : "line-clamp-4"
            }`}
          >
            {event.cardSummary}
          </p>
          {event.cardSummary.length > 220 && (
            <button
              onClick={() => setSummaryExpanded(!summaryExpanded)}
              className="mt-2 text-xs font-semibold text-zinc-500 transition-colors hover:text-zinc-300"
            >
              {summaryExpanded ? "Less" : "More"}
            </button>
          )}
        </div>

        {/* Segmented control */}
        <div className="mb-5 flex rounded-full border border-white/[0.08] bg-white/[0.04] p-1">
          <button
            onClick={() => setShowPrelims(false)}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              !showPrelims
                ? "bg-zinc-100 text-zinc-900 shadow"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Main Card · {mainCardFights.length}
          </button>
          <button
            onClick={() => setShowPrelims(true)}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              showPrelims
                ? "bg-zinc-100 text-zinc-900 shadow"
                : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            Prelims · {prelimFights.length}
          </button>
        </div>

        {/* Fights */}
        <div className="space-y-3 pb-6">
          {visibleFights.length > 0 ? (
            visibleFights.map((fight) => (
              <FightCard
                key={fight.boutIndex}
                fight={fight}
                index={fight.boutIndex}
                totalFights={event.fights.length}
                boutTypeLabel={
                  BOUT_TYPE_LABELS[fight.boutType] || fight.boutType
                }
              />
            ))
          ) : (
            <p className="py-8 text-center text-sm text-zinc-500">
              {showPrelims ? "No prelim fights" : "No main card fights"}
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto border-t border-white/[0.06] py-5 text-center text-xs text-zinc-600">
          {event.fights.length} fights · Cached{" "}
          {new Date(event.generatedAt).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}
