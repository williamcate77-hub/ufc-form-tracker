"use client";

import { Fighter } from "@/lib/types";

interface FormStripsProps {
  fighters: [Fighter, Fighter];
  currentWeightClass?: string;
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

export function FormStrips({ fighters, currentWeightClass }: FormStripsProps) {
  return (
    <div className="px-4 py-4 space-y-3">
      {fighters.map((fighter, idx) => (
        <div key={idx} className="flex items-start gap-4">
          {/* Fighter info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 mb-1">
              <h3 className="font-bold text-slate-50">
                {fighter.name}
                {fighter.rank && (
                  <span className="ml-1 text-sm text-amber-400">#{fighter.rank}</span>
                )}
              </h3>
              <span className="text-xs text-slate-400">{fighter.age}yo</span>
            </div>

            {/* Weight class: current (previous) */}
            {currentWeightClass && (
              <div className="text-xs text-slate-300 mb-2">
                <span className="font-semibold">{currentWeightClass}</span>
                {fighter.recentFights.length > 0 && fighter.recentFights[0].weightClass && (
                  <span className="text-slate-500">
                    {" "}(prev: {fighter.recentFights[0].weightClass})
                  </span>
                )}
              </div>
            )}

            {/* Compact record line */}
            <div className="text-xs text-slate-400 mb-2 flex gap-3">
              <span>
                <span className="text-slate-300 font-semibold">{fighter.record}</span>
                <span className="text-slate-500"> Pro</span>
              </span>
              <span>
                <span className="text-slate-300 font-semibold">{fighter.uFCRecord}</span>
                <span className="text-slate-500"> UFC</span>
              </span>
            </div>

            {/* Last 5 fights as tiles */}
            <div className="flex gap-1">
              {fighter.recentFights.slice(0, 5).map((fight, fidx) => (
                <div
                  key={fidx}
                  title={`${fight.result} vs ${fight.opponent} (${fight.method}, ${fight.year})`}
                  className={`w-8 h-8 ${getResultColor(fight.result)} rounded flex items-center justify-center text-white text-xs font-bold cursor-help hover:ring-2 ring-amber-400 transition`}
                >
                  {fight.result}
                </div>
              ))}
              <span className="text-xs text-slate-500 self-center ml-1">
                {fighter.recentFights.length}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
