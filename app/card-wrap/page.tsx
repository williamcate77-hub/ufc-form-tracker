"use client";

import { useCacheState } from "@/hooks/useCacheState";
import { CachePromptBanner } from "@/components/CachePromptBanner";
import Link from "next/link";

export default function CardWrap() {
  const { event, cacheStatus, isRefreshing, refresh } = useCacheState();

  if (!event) {
    return (
      <div className="flex flex-col flex-1">
        {cacheStatus && (
          <CachePromptBanner
            status={cacheStatus}
            isRefreshing={isRefreshing}
            onRefresh={refresh}
          />
        )}
        <div className="flex flex-1 items-center justify-center">
          <div className="text-slate-400">No card loaded.</div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1">
      {cacheStatus && (
        <CachePromptBanner
          status={cacheStatus}
          isRefreshing={isRefreshing}
          onRefresh={refresh}
        />
      )}

      <div className="flex flex-col flex-1 px-4 py-6 max-w-2xl mx-auto w-full">
        <Link href="/" className="text-slate-400 hover:text-slate-200 text-sm mb-6">
          ← Back
        </Link>

        <h1 className="text-2xl font-bold text-slate-50 mb-4">
          {event.eventName}
        </h1>

        <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 mb-6">
          <p className="text-sm text-slate-300 leading-relaxed italic">
            {event.cardSummary}
          </p>
        </div>

        <h2 className="text-lg font-bold text-slate-50 mb-4">All Picks</h2>

        <div className="space-y-3 mb-8">
          {event.fights.map((fight, idx) => (
            <div
              key={idx}
              className="bg-slate-900 border border-slate-700 rounded-lg p-3"
            >
              <div className="text-sm font-bold text-slate-50 mb-1">
                {fight.fighters[0].name} vs {fight.fighters[1].name}
              </div>
              <div className="text-xs text-slate-400 mb-2">
                {fight.division}
              </div>
              <div className="text-sm text-amber-300">
                {fight.editorial.thePick}
              </div>
            </div>
          ))}
        </div>

        {event.nextEvent && (
          <div className="border-t border-slate-700 pt-6">
            <h3 className="text-sm text-slate-400 uppercase mb-2">
              Next Event
            </h3>
            <div className="text-lg font-bold text-slate-50">
              {event.nextEvent.name}
            </div>
            <div className="text-sm text-slate-400">
              {event.nextEvent.date}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
