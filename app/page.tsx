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

export default function Home() {
  const { event, loading, error, cacheStatus, isRefreshing, refresh } =
    useCacheState();
  const [showPrelims, setShowPrelims] = useState(true);

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <div className="text-slate-400 mb-4">Loading...</div>
        </div>
      </div>
    );
  }

  if (error && !cacheStatus) {
    return (
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <h1 className="text-2xl font-bold text-slate-50 mb-2">
            Something went wrong
          </h1>
          <p className="text-slate-400 mb-4">{error}</p>
          <button
            onClick={() => refresh("full")}
            disabled={isRefreshing}
            className="px-4 py-2 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 rounded text-amber-50 font-medium transition"
          >
            {isRefreshing ? "Refreshing..." : "Try again"}
          </button>
        </div>
      </div>
    );
  }

  if (!event && !cacheStatus?.eventId) {
    return (
      <div className="flex flex-col flex-1">
        {cacheStatus && (
          <CachePromptBanner
            status={cacheStatus}
            isRefreshing={isRefreshing}
            onRefresh={refresh}
          />
        )}

        <div className="flex flex-1 items-center justify-center px-4">
          <div className="text-center max-w-sm">
            <h1 className="text-3xl font-bold text-slate-50 mb-4">
              UFC Form Tracker
            </h1>
            <p className="text-slate-400 mb-6">
              Your personal fight-week form guide
            </p>
            <button
              onClick={() => refresh("full")}
              disabled={isRefreshing}
              className="w-full px-6 py-3 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 rounded text-amber-50 font-bold text-lg transition"
            >
              {isRefreshing ? "Building card..." : "Load the card"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!event) return null;

  const prelimFights = event.fights.filter(
    (f) => f.boutType === "prelim" || f.boutType === "featured prelim"
  );
  const mainCardFights = event.fights.filter(
    (f) =>
      f.boutType === "main event" ||
      f.boutType === "co-main" ||
      f.boutType === "main card"
  );

  return (
    <div className="flex flex-col flex-1 bg-slate-950">
      {cacheStatus && (
        <CachePromptBanner
          status={cacheStatus}
          isRefreshing={isRefreshing}
          onRefresh={refresh}
        />
      )}

      <div className="flex flex-col flex-1 px-4 py-6 max-w-3xl mx-auto w-full overflow-y-auto">
        {/* Event Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-50 mb-2">
            {event.eventName}
          </h1>
          <p className="text-base text-slate-300 mb-1">{event.eventDateAEST}</p>
          <p className="text-sm text-slate-400 mb-1">{event.venue}</p>
          <p className="text-sm text-slate-400 mb-4">{event.broadcast}</p>

          {/* Card Summary */}
          <div className="bg-slate-900 border border-slate-700 rounded p-4 mb-6">
            <p className="text-sm text-slate-200 leading-relaxed">
              {event.cardSummary}
            </p>
          </div>

          {/* Refresh Button */}
          <button
            onClick={() => refresh()}
            disabled={isRefreshing}
            className="w-full px-4 py-3 bg-amber-700 hover:bg-amber-600 disabled:opacity-50 rounded text-amber-50 font-bold transition"
          >
            {isRefreshing ? "Refreshing..." : "Refresh Card"}
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setShowPrelims(false)}
            className={`flex-1 px-4 py-2 rounded font-semibold transition ${
              !showPrelims
                ? "bg-amber-700 text-amber-50"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Main Card ({mainCardFights.length})
          </button>
          <button
            onClick={() => setShowPrelims(true)}
            className={`flex-1 px-4 py-2 rounded font-semibold transition ${
              showPrelims
                ? "bg-amber-700 text-amber-50"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Prelims ({prelimFights.length})
          </button>
        </div>

        {/* Fights List */}
        <div className="space-y-3 pb-6">
          {showPrelims ? (
            prelimFights.length > 0 ? (
              prelimFights.map((fight, idx) => (
                <FightCard
                  key={fight.boutIndex}
                  fight={fight}
                  index={fight.boutIndex}
                  totalFights={event.fights.length}
                  boutTypeLabel={BOUT_TYPE_LABELS[fight.boutType] || fight.boutType}
                />
              ))
            ) : (
              <p className="text-slate-400 text-center py-6">No prelim fights</p>
            )
          ) : mainCardFights.length > 0 ? (
            mainCardFights.map((fight, idx) => (
              <FightCard
                key={fight.boutIndex}
                fight={fight}
                index={fight.boutIndex}
                totalFights={event.fights.length}
                boutTypeLabel={BOUT_TYPE_LABELS[fight.boutType] || fight.boutType}
              />
            ))
          ) : (
            <p className="text-slate-400 text-center py-6">No main card fights</p>
          )}
        </div>

        {/* Footer */}
        <div className="text-xs text-slate-500 text-center py-4 border-t border-slate-700">
          {event.fights.length} fights · Cached{" "}
          {new Date(event.generatedAt).toLocaleDateString()} · Updated yearly
        </div>
      </div>
    </div>
  );
}
