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
      return "bg-gray-500";
    default:
      return "bg-gray-500";
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
      <div
        className="block rounded-2xl transition hover:shadow-lg hover:scale-105 duration-300 overflow-hidden border-l-4"
        style={{
          backgroundColor: '#1a3a34',
          borderColor: '#ffd700',
          padding: '24px'
        }}
      >
        {/* Bout type and division */}
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#ffd700' }}>
            {boutTypeLabel}
          </span>
          <span className="text-xs font-semibold" style={{ color: '#a0a0a0' }}>
            {fight.division}
          </span>
        </div>

        {/* Fighter matchup */}
        <div className="space-y-6 mb-6">
          {[fighter1, fighter2].map((fighter, idx) => (
            <div key={idx} className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-black text-lg" style={{ color: '#f5f5f5' }}>
                    {fighter.name}
                  </h3>
                  {fighter.rank && (
                    <span className="text-sm font-bold" style={{ color: '#ffd700' }}>
                      #{fighter.rank}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-3 text-xs font-medium mb-3" style={{ color: '#a0a0a0' }}>
                  <span>
                    <span style={{ color: '#f5f5f5' }}>{fighter.age}</span>yo
                  </span>
                  <span>•</span>
                  <span>
                    <span style={{ color: '#f5f5f5' }}>{fighter.record}</span> Pro
                  </span>
                  <span>•</span>
                  <span>
                    <span style={{ color: '#f5f5f5' }}>{fighter.uFCRecord}</span> UFC
                  </span>
                </div>

                {/* Recent fights - larger and clearer */}
                <div className="flex gap-2 flex-wrap">
                  {fighter.recentFights.slice(0, 5).map((recentFight, fidx) => (
                    <div
                      key={fidx}
                      title={`${recentFight.result} vs ${recentFight.opponent} (${recentFight.method}, ${recentFight.year})`}
                      className={`w-12 h-12 ${getResultColor(recentFight.result)} rounded-lg flex items-center justify-center text-white font-bold cursor-help hover:ring-2 ring-yellow-400 transition text-sm`}
                    >
                      {recentFight.result}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary line */}
        <div className="text-sm leading-relaxed pt-6" style={{ color: '#c0c0c0', borderTop: '1px solid #2d5a52' }}>
          {fight.editorial.oneLiner}
        </div>
      </div>
    </Link>
  );
}
