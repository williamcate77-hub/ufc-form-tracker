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
        className="sticky bottom-0 bg-slate-900 border-t border-slate-700 px-4 py-3 text-sm font-medium text-slate-50 hover:bg-slate-800 transition flex items-center justify-between"
      >
        <span>Card wrap</span>
        <span>→</span>
      </Link>
    );
  }

  if (!nextFight) return null;

  return (
    <Link
      href={`/fight/${currentIndex + 1}`}
      className="sticky bottom-0 bg-slate-900 border-t border-slate-700 px-4 py-3 text-sm hover:bg-slate-800 transition flex items-center justify-between cursor-pointer"
    >
      <div className="flex-1 min-w-0">
        <div className="text-slate-400 text-xs mb-1">Up next</div>
        <div className="text-slate-50 font-medium truncate">
          {nextFight.fighters[0].name} vs {nextFight.fighters[1].name}
        </div>
        <div className="text-slate-400 text-xs">
          {nextFight.division}
        </div>
      </div>
      <div className="text-slate-400 ml-2 flex-shrink-0">→</div>
    </Link>
  );
}
