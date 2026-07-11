"use client";

import { useCacheState } from "@/hooks/useCacheState";
import { CachePromptBanner } from "@/components/CachePromptBanner";
import { FightHeader } from "@/components/FightScreen/FightHeader";
import { PickSummary } from "@/components/FightScreen/PickSummary";
import { TaleOfTape } from "@/components/FightScreen/TaleOfTape";
import { FormStrips } from "@/components/FightScreen/FormStrips";
import { StoryContent } from "@/components/FightScreen/StoryContent";
import { UpNextFooter } from "@/components/FightScreen/UpNextFooter";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useRef } from "react";

const BOUT_TYPE_LABELS: Record<string, string> = {
  "main event": "Main Event",
  "co-main": "Co-Main",
  "main card": "Main Card",
  "featured prelim": "Featured Prelim",
  prelim: "Prelim",
};

const SWIPE_THRESHOLD = 60;

export default function FightScreen() {
  const params = useParams();
  const router = useRouter();
  const index = parseInt(params.index as string, 10);
  const { event, cacheStatus, isRefreshing, refresh } = useCacheState();
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const totalFights = event?.fights.length ?? 0;

  // Swipe left → next fight (or card wrap), swipe right → previous fight (or home)
  function goNext() {
    if (index < totalFights - 1) router.push(`/fight/${index + 1}`);
    else router.push("/card-wrap");
  }
  function goPrev() {
    if (index > 0) router.push(`/fight/${index - 1}`);
    else router.push("/");
  }

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, totalFights]);

  function onTouchStart(e: React.TouchEvent) {
    touchStart.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
    };
  }

  function onTouchEnd(e: React.TouchEvent) {
    const start = touchStart.current;
    touchStart.current = null;
    if (!start) return;

    const dx = e.changedTouches[0].clientX - start.x;
    const dy = e.changedTouches[0].clientY - start.y;

    // Horizontal swipe only: must clear threshold and dominate the vertical delta
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > 1.5 * Math.abs(dy)) {
      if (dx < 0) goNext();
      else goPrev();
    }
  }

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

  if (isNaN(index) || index < 0 || index >= event.fights.length) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center px-4">
        <div className="text-center">
          <p className="mb-4 text-zinc-400">Fight not found.</p>
          <Link
            href="/"
            className="rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm font-semibold text-zinc-200 transition-colors hover:bg-white/10"
          >
            Back to the card
          </Link>
        </div>
      </div>
    );
  }

  const fight = event.fights[index];
  const nextFight =
    index < event.fights.length - 1 ? event.fights[index + 1] : null;

  return (
    <div className="flex flex-col flex-1">
      {cacheStatus && (
        <CachePromptBanner
          status={cacheStatus}
          isRefreshing={isRefreshing}
          onRefresh={refresh}
        />
      )}

      <div
        className="mx-auto flex w-full max-w-2xl flex-col flex-1"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Sticky nav with segmented progress */}
        <div className="sticky top-0 z-30 border-b border-white/[0.07] bg-zinc-950/80 px-4 pb-3 pt-2 backdrop-blur-xl">
          <div className="flex items-center justify-between py-1.5">
            <Link
              href="/"
              className="text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              ← Card
            </Link>
            <div className="font-mono text-xs text-zinc-500">
              {index + 1} / {event.fights.length}
            </div>
          </div>
          <div className="flex gap-1">
            {event.fights.map((_, i) => (
              <Link
                key={i}
                href={`/fight/${i}`}
                aria-label={`Fight ${i + 1}`}
                className={`h-1 flex-1 rounded-full transition-colors ${
                  i === index
                    ? "bg-red-500"
                    : i < index
                      ? "bg-zinc-600"
                      : "bg-zinc-800"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-1 flex-col overflow-y-auto pb-4">
          <FightHeader
            fight={fight}
            totalFights={event.fights.length}
            boutTypeLabel={BOUT_TYPE_LABELS[fight.boutType] || fight.boutType}
          />

          <PickSummary editorial={fight.editorial} />

          <TaleOfTape fighters={fight.fighters} />

          <FormStrips
            fighters={fight.fighters}
            currentWeightClass={fight.division}
          />

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
