"use client";

import { Fight } from "@/lib/types";
import Link from "next/link";

interface UpNextFooterProps {
  currentIndex: number;
  nextFight: Fight | null;
  totalFights: number;
}

export function UpNextFooter({
  currentIndex,
  nextFight,
  totalFights,
}: UpNextFooterProps) {
  const isLastFight = currentIndex === totalFights - 1;

  if (isLastFight) {
    return (
      <Link
        href="/card-wrap"
        className="sticky bottom-0 z-30 flex items-center justify-between border-t border-white/10 bg-zinc-950/80 px-5 py-4 backdrop-blur-xl transition-colors hover:bg-zinc-900/80"
      >
        <span className="text-sm font-semibold text-zinc-100">Card wrap</span>
        <span className="text-zinc-500">→</span>
      </Link>
    );
  }

  if (!nextFight) return null;

  return (
    <Link
      href={`/fight/${currentIndex + 1}`}
      className="sticky bottom-0 z-30 flex items-center justify-between border-t border-white/10 bg-zinc-950/80 px-5 py-3 backdrop-blur-xl transition-colors hover:bg-zinc-900/80"
    >
      <div className="min-w-0 flex-1">
        <div className="mb-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Up next
        </div>
        <div className="truncate text-sm font-semibold text-zinc-100">
          {nextFight.fighters[0].name}{" "}
          <span className="text-zinc-600">vs</span>{" "}
          {nextFight.fighters[1].name}
        </div>
      </div>
      <span className="ml-3 shrink-0 text-zinc-500">→</span>
    </Link>
  );
}
