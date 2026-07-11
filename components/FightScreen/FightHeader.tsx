"use client";

import { Fight, BoutType } from "@/lib/types";

interface FightHeaderProps {
  fight: Fight;
  totalFights: number;
  boutTypeLabel: string;
}

function getBoutTypePill(type: BoutType): string {
  switch (type) {
    case "main event":
      return "bg-red-500/15 text-red-300 border-red-500/25";
    case "co-main":
      return "bg-orange-500/15 text-orange-300 border-orange-500/25";
    case "main card":
      return "bg-zinc-500/15 text-zinc-300 border-zinc-500/25";
    default:
      return "bg-zinc-700/30 text-zinc-400 border-zinc-600/25";
  }
}

function getFlagEmoji(country: string): string {
  const countryMap: Record<string, string> = {
    USA: "🇺🇸",
    Ireland: "🇮🇪",
    Brazil: "🇧🇷",
    Russia: "🇷🇺",
    UK: "🇬🇧",
    Canada: "🇨🇦",
    Australia: "🇦🇺",
    France: "🇫🇷",
    Netherlands: "🇳🇱",
    Sweden: "🇸🇪",
    Mexico: "🇲🇽",
    Japan: "🇯🇵",
    China: "🇨🇳",
    Korea: "🇰🇷",
    Israel: "🇮🇱",
    Poland: "🇵🇱",
    Denmark: "🇩🇰",
    Thailand: "🇹🇭",
    Spain: "🇪🇸",
    Georgia: "🇬🇪",
    "South Africa": "🇿🇦",
    "New Zealand": "🇳🇿",
  };
  return countryMap[country] || "🌍";
}

export function FightHeader({ fight, boutTypeLabel }: FightHeaderProps) {
  const [f1, f2] = fight.fighters;

  return (
    <div className="px-4 pt-5 pb-2 space-y-6">
      {/* Meta row */}
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <span
            className={`rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${getBoutTypePill(fight.boutType)}`}
          >
            {boutTypeLabel}
          </span>
          <span className="text-xs text-zinc-500">
            {fight.division} · {fight.rounds} rounds
          </span>
        </div>

        {fight.notableFlag && (
          <span className="rounded-full border border-amber-500/25 bg-amber-500/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-300">
            {fight.notableFlag}
          </span>
        )}
      </div>

      {/* Matchup */}
      <div className="grid grid-cols-[1fr_auto_1fr] items-start gap-3">
        {/* Red corner */}
        <div className="border-t-2 border-red-500 pt-3">
          <div className="text-2xl leading-none mb-2">
            {getFlagEmoji(f1.country)}
          </div>
          <div className="text-lg font-bold leading-tight tracking-tight text-zinc-50">
            {f1.name}
          </div>
          {f1.nickname && (
            <div className="mt-0.5 text-xs text-zinc-500">
              &ldquo;{f1.nickname}&rdquo;
            </div>
          )}
          {f1.rank != null && (
            <div className="mt-1 font-mono text-xs font-semibold text-red-400">
              #{f1.rank}
            </div>
          )}
        </div>

        <div className="self-center px-1 text-sm font-black uppercase italic tracking-widest text-zinc-700">
          vs
        </div>

        {/* Blue corner */}
        <div className="border-t-2 border-blue-500 pt-3 text-right">
          <div className="text-2xl leading-none mb-2">
            {getFlagEmoji(f2.country)}
          </div>
          <div className="text-lg font-bold leading-tight tracking-tight text-zinc-50">
            {f2.name}
          </div>
          {f2.nickname && (
            <div className="mt-0.5 text-xs text-zinc-500">
              &ldquo;{f2.nickname}&rdquo;
            </div>
          )}
          {f2.rank != null && (
            <div className="mt-1 font-mono text-xs font-semibold text-blue-400">
              #{f2.rank}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
