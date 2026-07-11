"use client";

import { Fight } from "@/lib/types";
import Link from "next/link";

interface FightCardProps {
  fight: Fight;
  index: number;
  totalFights: number;
  boutTypeLabel: string;
}

function getResultColor(result: string): string {
  switch (result) {
    case "W":
      return "bg-emerald-500";
    case "L":
      return "bg-rose-500";
    case "D":
    case "NC":
      return "bg-slate-500";
    default:
      return "bg-slate-500";
  }
}

export function FightCard({
  fight,
  index,
  totalFights,
  boutTypeLabel,
}: FightCardProps) {
  const [fighter1, fighter2] = fight.fighters;

  return (
    <Link href={`/fight/${index}`}>
      <div className="block p-5 backdrop-blur-md bg-slate-800/40 border border-slate-700/50 rounded-xl hover:border-cyan-500/50 hover:bg-slate-800/60 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20 group">
        {/* Bout type and division */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wide">
            {boutTypeLabel}
          </span>
          <span className="text-xs text-slate-400">{fight.division}</span>
        </div>

        {/* Fighter matchup */}
        <div className="space-y-4 mb-4">
          {[fighter1, fighter2].map((fighter, idx) => (
            <div key={idx} className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1.5">
                  <h3 className="font-bold text-slate-50 text-sm leading-tight">
                    {fighter.name}
                    {fighter.rank && (
                      <span className="ml-2 text-cyan-400 font-semibold">#{fighter.rank}</span>
                    )}
                  </h3>
                  <span className="text-xs text-slate-400 whitespace-nowrap">
                    {fighter.age}yo
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span>
                    <span className="text-slate-200 font-semibold">{fighter.record}</span>
                  </span>
                  <span className="text-slate-600">·</span>
                  <span>
                    <span className="text-slate-200 font-semibold">{fighter.uFCRecord}</span> UFC
                  </span>
                </div>
              </div>

              {/* Recent fights */}
              <div className="flex gap-2 flex-shrink-0">
                {fighter.recentFights.slice(0, 5).map((recentFight, fidx) => (
                  <div
                    key={fidx}
                    title={`${recentFight.result} vs ${recentFight.opponent} (${recentFight.method}, ${recentFight.year})`}
                    className={`w-9 h-9 ${getResultColor(recentFight.result)} rounded-lg flex items-center justify-center text-white font-bold cursor-help hover:scale-110 transition-transform text-xs shadow-md hover:shadow-lg`}
                  >
                    {recentFight.result}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary line */}
        <div className="text-xs text-slate-400 border-t border-slate-700/30 pt-3 group-hover:text-slate-300 transition">
          {fight.editorial.oneLiner}
        </div>
      </div>
    </Link>
  );
}
