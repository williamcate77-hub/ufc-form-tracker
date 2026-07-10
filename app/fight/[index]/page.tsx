"use client";

import { useCacheState } from "@/hooks/useCacheState";
import { CachePromptBanner } from "@/components/CachePromptBanner";
import { FightHeader } from "@/components/FightScreen/FightHeader";
import { PickSummary } from "@/components/FightScreen/PickSummary";
import { FormStrips } from "@/components/FightScreen/FormStrips";
import { StoryContent } from "@/components/FightScreen/StoryContent";
import { UpNextFooter } from "@/components/FightScreen/UpNextFooter";
import { useParams } from "next/navigation";
import Link from "next/link";

const BOUT_TYPE_LABELS: Record<string, string> = {
  "main event": "Main Event",
  "co-main": "Co-Main",
  "main card": "Main Card",
  "featured prelim": "Featured Prelim",
  prelim: "Prelim",
};

export default function FightScreen() {
  const params = useParams();
  const index = parseInt(params.index as string, 10);
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
          <div className="text-slate-400">No card loaded. Go back and refresh.</div>
        </div>
      </div>
    );
  }

  if (isNaN(index) || index < 0 || index >= event.fights.length) {
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
          <div className="text-slate-400">Fight not found.</div>
        </div>
      </div>
    );
  }

  const fight = event.fights[index];
  const nextFight = index < event.fights.length - 1 ? event.fights[index + 1] : null;

  return (
    <div className="flex flex-col flex-1">
      {cacheStatus && (
        <CachePromptBanner
          status={cacheStatus}
          isRefreshing={isRefreshing}
          onRefresh={refresh}
        />
      )}

      <div className="flex flex-col flex-1 max-w-2xl mx-auto w-full">
        <div className="sticky top-0 z-30 bg-slate-950 border-b border-slate-700 px-4 py-2 flex items-center justify-between">
          <Link href="/" className="text-slate-400 hover:text-slate-200 text-sm">
            ← Back
          </Link>
          <div className="text-xs text-slate-400">
            Fight {index + 1} of {event.fights.length}
          </div>
        </div>

        <div className="flex flex-col flex-1 overflow-y-auto pb-16">
          <FightHeader
            fight={fight}
            totalFights={event.fights.length}
            boutTypeLabel={BOUT_TYPE_LABELS[fight.boutType] || fight.boutType}
          />

          <PickSummary editorial={fight.editorial} />

          <div className="border-b border-slate-700">
            <FormStrips fighters={fight.fighters} currentWeightClass={fight.division} />
          </div>

          <StoryContent editorial={fight.editorial} />
        </div>
      </div>

      <UpNextFooter
        currentIndex={index}
        nextFight={nextFight}
        totalFights={event.fights.length}
      />
    </div>
  );
}
