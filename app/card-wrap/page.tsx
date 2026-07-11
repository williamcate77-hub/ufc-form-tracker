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
        <div className="flex flex-1 items-center justify-center px-4">
          <div className="text-center">
            <p className="mb-4 text-zinc-400">No card loaded.</p>
            <Link
              href="/"
              className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10"
            >
              Back to the card
            </Link>
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

      <div className="mx-auto flex w-full max-w-2xl flex-col flex-1 px-4 pb-6 pt-[calc(1.5rem+env(safe-area-inset-top))]">
        <Link
          href="/"
          className="mb-6 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
        >
          ← Card
        </Link>

        <div className="mb-2 text-[10px] font-bold uppercase tracking-[0.35em] text-red-400">
          Card Wrap
        </div>
        <h1 className="mb-5 text-3xl font-black uppercase tracking-tight text-zinc-50">
          {event.eventName}
        </h1>

        <div className="mb-8 rounded-2xl border border-white/[0.07] bg-white/[0.03] p-5">
          <p className="text-sm leading-relaxed text-zinc-300">
            {event.cardSummary}
          </p>
        </div>

        <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
          All Picks
        </div>

        <div className="mb-10 space-y-3">
          {event.fights.map((fight, idx) => (
            <Link
              key={idx}
              href={`/fight/${idx}`}
              className="group block rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-1 flex items-baseline justify-between gap-3">
                <span className="text-sm font-bold text-zinc-50">
                  {fight.fighters[0].name}{" "}
                  <span className="font-normal text-zinc-600">vs</span>{" "}
                  {fight.fighters[1].name}
                </span>
                <span className="shrink-0 text-xs text-zinc-500">
                  {fight.division}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-zinc-400">
                <span className="font-semibold text-red-400">Pick · </span>
                {fight.editorial.thePick}
              </p>
            </Link>
          ))}
        </div>

        {event.nextEvent && (
          <div className="mt-auto border-t border-white/[0.06] pt-6">
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Next Event
            </div>
            <div className="text-lg font-bold text-zinc-50">
              {event.nextEvent.name}
            </div>
            <div className="text-sm text-zinc-500">{event.nextEvent.date}</div>
          </div>
        )}
      </div>
    </div>
  );
}
