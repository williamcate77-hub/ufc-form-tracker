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

// Fighter form tracker - updated design

export default function Home() {
  const { event, loading, error, cacheStatus, isRefreshing, refresh } =
    useCacheState();
  const [showPrelims, setShowPrelims] = useState(true);

  if (loading) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <div className="text-center">
          <div style={{ color: '#a0a0a0' }}>Loading...</div>
        </div>
      </div>
    );
  }

  if (error && !cacheStatus) {
    return (
      <div className="flex flex-1 items-center justify-center px-6">
        <div className="text-center max-w-sm">
          <h1 className="text-2xl font-bold mb-3" style={{ color: '#f5f5f5' }}>
            Something went wrong
          </h1>
          <p className="mb-6" style={{ color: '#a0a0a0' }}>{error}</p>
          <button
            onClick={() => refresh("full")}
            disabled={isRefreshing}
            className="px-6 py-3 font-bold rounded-xl transition hover:shadow-lg disabled:opacity-50"
            style={{
              backgroundColor: '#1d7f1f',
              color: '#f5f5f5'
            }}
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

        <div className="flex flex-1 items-center justify-center px-6">
          <div className="text-center max-w-sm">
            <h1 className="text-5xl font-black mb-6" style={{ color: '#ffd700' }}>
              UFC Form
            </h1>
            <p className="text-lg mb-8 font-medium" style={{ color: '#c0c0c0' }}>
              Your personal fight-week form guide
            </p>
            <button
              onClick={() => refresh("full")}
              disabled={isRefreshing}
              className="w-full px-8 py-4 font-bold text-lg rounded-xl transition hover:shadow-lg disabled:opacity-50"
              style={{
                backgroundColor: '#1d7f1f',
                color: '#f5f5f5'
              }}
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
    <div className="flex flex-col flex-1 overflow-y-auto">
      {cacheStatus && (
        <CachePromptBanner
          status={cacheStatus}
          isRefreshing={isRefreshing}
          onRefresh={refresh}
        />
      )}

      <div className="flex flex-col flex-1 px-6 py-8 max-w-4xl mx-auto w-full">
        {/* Event Header */}
        <div className="mb-12">
          <div className="mb-8">
            <h1 className="text-6xl font-black mb-4" style={{ color: '#ffd700' }}>
              {event.eventName}
            </h1>
          </div>

          {/* Card Summary */}
          <div
            className="rounded-2xl p-8 mb-8 border-l-4"
            style={{
              backgroundColor: '#1a3a34',
              borderColor: '#ffd700'
            }}
          >
            <p className="text-base leading-relaxed font-medium" style={{ color: '#e0e0e0' }}>
              {event.cardSummary}
            </p>
          </div>

          {/* Refresh Button */}
          <button
            onClick={() => refresh()}
            disabled={isRefreshing}
            className="w-full px-8 py-4 font-bold text-lg rounded-xl transition hover:shadow-lg disabled:opacity-50"
            style={{
              backgroundColor: '#1d7f1f',
              color: '#f5f5f5'
            }}
          >
            {isRefreshing ? "Refreshing..." : "Refresh Card"}
          </button>
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setShowPrelims(false)}
            className="flex-1 px-6 py-3 font-bold rounded-xl transition hover:shadow-lg text-base"
            style={{
              backgroundColor: !showPrelims ? '#1d7f1f' : '#1a3a34',
              color: '#f5f5f5',
              border: !showPrelims ? 'none' : '2px solid #2d5a52'
            }}
          >
            Main Card ({mainCardFights.length})
          </button>
          <button
            onClick={() => setShowPrelims(true)}
            className="flex-1 px-6 py-3 font-bold rounded-xl transition hover:shadow-lg text-base"
            style={{
              backgroundColor: showPrelims ? '#1d7f1f' : '#1a3a34',
              color: '#f5f5f5',
              border: showPrelims ? 'none' : '2px solid #2d5a52'
            }}
          >
            Prelims ({prelimFights.length})
          </button>
        </div>

        {/* Fights List */}
        <div className="space-y-5 pb-8">
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
              <p className="text-center py-12 font-medium" style={{ color: '#a0a0a0' }}>
                No prelim fights
              </p>
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
            <p className="text-center py-12 font-medium" style={{ color: '#a0a0a0' }}>
              No main card fights
            </p>
          )}
        </div>

        {/* Footer */}
        <div className="text-sm text-center py-6 font-medium" style={{ color: '#808080', borderTop: '1px solid #2d5a52' }}>
          {event.fights.length} fights · Cached{" "}
          {new Date(event.generatedAt).toLocaleDateString()} · Updated yearly
        </div>
      </div>
    </div>
  );
}
