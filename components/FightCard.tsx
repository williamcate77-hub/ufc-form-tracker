"use client";

import { Fight } from "@/lib/types";
import { FormStrip } from "@/components/FormStrip";
import Link from "next/link";

interface FightCardProps {
  fight: Fight;
  index: number;
  totalFights: number;
  boutTypeLabel: string;
}

const CORNER_DOT = ["bg-red-500", "bg-blue-500"];

export function FightCard({ fight, index, boutTypeLabel }: FightCardProps) {
  const isHeadline =
    fight.boutType === "main event" || fight.boutType === "co-main";

  return (
    <Link href={`/fight/${index}`} className="group block">
      <div className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4 transition-all duration-200 group-hover:border-white/20 group-hover:bg-white/[0.05] group-active:scale-[0.99]">
        {/* Bout type and division */}
        <div className="mb-4 flex items-center justify-between">
          <span
            className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
              isHeadline ? "text-red-400" : "text-zinc-500"
            }`}
          >
            {boutTypeLabel}
          </span>
          <span className="text-xs text-zinc-500">{fight.division}</span>
        </div>

        {/* Fighters */}
        <div className="mb-4 space-y-3">
          {fight.fighters.map((fighter, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between gap-3"
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-2">
                  <span
                    className={`h-1.5 w-1.5 shrink-0 self-center rounded-full ${CORNER_DOT[idx]}`}
                  />
                  <h3 className="truncate text-sm font-bold text-zinc-50">
                    {fighter.name}
                  </h3>
                  {fighter.rank != null && (
                    <span className="font-mono text-xs font-semibold text-zinc-400">
                      #{fighter.rank}
                    </span>
                  )}
                  <span className="text-xs text-zinc-600">{fighter.age}</span>
                </div>
                <div className="ml-3.5 mt-0.5 font-mono text-xs text-zinc-500">
                  <span className="whitespace-nowrap">{fighter.record}</span>
                  <span className="mx-1.5 text-zinc-700">·</span>
                  <span className="whitespace-nowrap">
                    <span className="text-zinc-600">UFC </span>
                    {fighter.uFCRecord}
                  </span>
                </div>
              </div>

              <div className="shrink-0">
                <FormStrip fights={fighter.recentFights} size="sm" />
              </div>
            </div>
          ))}
        </div>

        {/* One-liner */}
        <div className="border-t border-white/[0.06] pt-3 text-xs leading-relaxed text-zinc-500 transition-colors group-hover:text-zinc-400">
          {fight.editorial.oneLiner}
        </div>
      </div>
    </Link>
  );
}
