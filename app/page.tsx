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
          <div className="mb-4">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-cyan-500 border-t-transparent"></div>
            </div>
          </div>
          <div className="text-slate-300">Loading fight card...</div>
        </div>
      </div>
    );
  }

  if (error && !cacheStatus) {
    return (
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <div className="mb-4 text-4xl">⚠️</div>
          <h1 className="text-3xl font-bold text-slate-50 mb-2">
            Something went wrong
          </h1>
          <p className="text-slate-400 mb-6">{error}</p>
          <button
            onClick={() => refresh("full")}
            disabled={isRefreshing}
            className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 rounded-lg text-white font-semibold transition-all duration-200 shadow-lg hover:shadow-cyan-500/30"
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
          <div className="text-center max-w-md">
            <div className="mb-6">
              <div className="text-6xl mb-2">🥊</div>
            </div>
            <h1 className="text-4xl font-bold text-slate-50 mb-2 tracking-tight">
              UFC Form Tracker
            </h1>
            <p className="text-lg text-slate-400 mb-8">
              Your personal fight-week form guide
            </p>
            <button
              onClick={() => refresh("full")}
              disabled={isRefreshing}
              className="w-full px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 disabled:opacity-50 rounded-lg text-white font-bold text-lg transition-all duration-300 shadow-xl hover:shadow-cyan-500/40 transform hover:scale-105"
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
    <div className="flex flex-col flex-1 min-h-screen">
      {cacheStatus && (
        <CachePromptBanner
          status={cacheStatus}
          isRefreshing={isRefreshing}
          onRefresh={refresh}
        />
      )}

      <div className="flex flex-col flex-1 px-4 py-8 max-w-4xl mx-auto w-full overflow-y-auto">
        {/* Event Header */}
        <div className="mb-10">
          <div className="mb-6">
            <h1 className="text-5xl font-bold text-slate-50 mb-2 tracking-tight">
              {event.eventName}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-cyan-400 font-medium">{event.eventDateAEST}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">{event.venue}</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-400">{event.broadcast}</span>
            </div>
          </div>

          {/* Card Summary */}
          <div className="backdrop-blur-md bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 mb-8 hover:border-cyan-500/30 transition-all duration-300 shadow-lg">
            <p className="text-slate-200 leading-relaxed">
              {event.cardSummary}
            </p>
          </div>

          {/* Refresh Button */}
          <button
            onClick={() => refresh()}
            disabled={isRefreshing}
            className="w-full px-6 py-3 bg-gradient-to-r from-slate-700 to-slate-600 hover:from-slate-600 hover:to-slate-500 disabled:opacity-50 rounded-lg text-slate-100 font-semibold transition-all duration-200 shadow-lg border border-slate-600/50 hover:border-slate-500/50"
          >
            {isRefreshing ? "Refreshing..." : "Refresh Card"}
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setShowPrelims(false)}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              !showPrelims
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50"
            }`}
          >
            Main Card ({mainCardFights.length})
          </button>
          <button
            onClick={() => setShowPrelims(true)}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
              showPrelims
                ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                : "bg-slate-800/50 text-slate-300 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/50"
            }`}
          >
            Prelims ({prelimFights.length})
          </button>
        </div>

        {/* Fights List */}
        <div className="space-y-4 pb-8">
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
              <p className="text-slate-400 text-center py-8">No prelim fights</p>
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
            <p className="text-slate-400 text-center py-8">No main card fights</p>
          )}
        </div>

        {/* Footer */}
        <div className="text-xs text-slate-500 text-center py-6 border-t border-slate-700/50 mt-auto">
          {event.fights.length} fights · Cached{" "}
          {new Date(event.generatedAt).toLocaleDateString()} · Updated yearly
        </div>
      </div>
    </div>
  );
}
