"use client";

import { useCacheState } from "@/hooks/useCacheState";
import { CachePromptBanner } from "@/components/CachePromptBanner";
import Link from "next/link";

export default function Home() {
  const { event, loading, error, cacheStatus, isRefreshing, refresh } =
    useCacheState();

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
        {event && (
          <>
            <h1 className="text-2xl font-bold text-slate-50 mb-2">
              {event.eventName}
            </h1>
            <p className="text-sm text-slate-400 mb-4">{event.eventDateAEST}</p>
            <p className="text-sm text-slate-400 mb-2">{event.venue}</p>
            <p className="text-sm text-slate-400 mb-6">{event.broadcast}</p>

            <div className="space-y-3 mb-6">
              <Link
                href="/fight/0"
                className="block w-full px-4 py-3 bg-amber-700 hover:bg-amber-600 rounded text-amber-50 font-medium text-center transition"
              >
                Start at main event
              </Link>
              <button
                onClick={() => refresh()}
                disabled={isRefreshing}
                className="w-full px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 rounded text-slate-50 font-medium transition"
              >
                {isRefreshing ? "Refreshing..." : "Refresh"}
              </button>
            </div>

            <div className="text-xs text-slate-500 text-center">
              {event.fights.length} fights · Cached{" "}
              {new Date(event.generatedAt).toLocaleDateString()}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
