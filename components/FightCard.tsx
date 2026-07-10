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
      <div className="block p-4 border border-slate-700 rounded-lg hover:border-amber-500 hover:bg-slate-900 transition">
        {/* Bout type and division */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold text-amber-400 uppercase">
            {boutTypeLabel}
          </span>
          <span className="text-xs text-slate-400">{fight.division}</span>
        </div>

        {/* Fighter matchup */}
        <div className="space-y-2 mb-3">
          {[fighter1, fighter2].map((fighter, idx) => (
            <div key={idx} className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2">
                  <h3 className="font-bold text-slate-50 text-sm">
                    {fighter.name}
                    {fighter.rank && (
                      <span className="ml-1 text-amber-400">#{fighter.rank}</span>
                    )}
                  </h3>
                  <span className="text-xs text-slate-400 whitespace-nowrap">
                    {fighter.age}yo
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400 mt-1">
                  <span>
                    <span className="text-slate-200">{fighter.record}</span> Pro
                  </span>
                  <span className="text-slate-600">·</span>
                  <span>
                    <span className="text-slate-200">{fighter.uFCRecord}</span> UFC
                  </span>
                </div>
              </div>

              {/* Recent fights - larger and clearer */}
              <div className="flex gap-1 flex-shrink-0">
                {fighter.recentFights.slice(0, 5).map((recentFight, fidx) => (
                  <div
                    key={fidx}
                    title={`${recentFight.result} vs ${recentFight.opponent} (${recentFight.method}, ${recentFight.year})`}
                    className={`w-10 h-10 ${getResultColor(recentFight.result)} rounded flex items-center justify-center text-white font-bold cursor-help hover:ring-2 ring-amber-400 transition text-sm`}
                  >
                    {recentFight.result}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary line */}
        <div className="text-xs text-slate-400 border-t border-slate-700 pt-2">
          {fight.editorial.oneLiner}
        </div>
      </div>
    </Link>
  );
}
