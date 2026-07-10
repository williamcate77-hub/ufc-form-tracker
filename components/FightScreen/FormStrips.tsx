"use client";

import { Fighter, RecentFight } from "@/lib/types";
import { useState } from "react";

interface FormStripsProps {
  fighters: [Fighter, Fighter];
  isFirst?: boolean;
}

function getResultColor(result: string): string {
  switch (result) {
    case "W":
      return "bg-emerald-600";
    case "L":
      return "bg-rose-600";
    case "D":
    case "NC":
      return "bg-slate-600";
    default:
      return "bg-slate-600";
  }
}

function FormTile({
  fight,
  index,
}: {
  fight: RecentFight;
  index: number;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <button
        className={`w-8 h-8 ${getResultColor(fight.result)} rounded text-white text-xs font-bold flex items-center justify-center hover:ring-2 ring-slate-400 transition`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onTouchStart={() => setShowTooltip(!showTooltip)}
      >
        {fight.result}
      </button>

      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-slate-100 text-xs px-2 py-1 rounded whitespace-nowrap z-10 pointer-events-none">
          {fight.opponent} · {fight.method} · {fight.year}
        </div>
      )}
    </div>
  );
}

export function FormStrips({ fighters, isFirst = false }: FormStripsProps) {
  return (
    <div className="space-y-4">
      {isFirst && (
        <div className="text-xs text-slate-400 mb-4 px-4">
          Recent form: <span className="text-emerald-400">W</span>
          <span className="mx-1">·</span>
          <span className="text-rose-400">L</span>
          <span className="mx-1">·</span>
          <span className="text-slate-400">D</span>
        </div>
      )}

      {fighters.map((fighter, fighterIdx) => (
        <div key={fighterIdx} className="px-4">
          <div className="mb-2">
            <h3 className="font-bold text-sm text-slate-50">
              {fighter.name}
              {fighter.rank && (
                <span className="ml-2 text-xs text-amber-400">
                  #{fighter.rank}
                </span>
              )}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex gap-1">
              {fighter.recentFights.slice(0, 10).map((fight, idx) => (
                <FormTile key={idx} fight={fight} index={idx} />
              ))}
            </div>

            <div className="ml-auto flex gap-3 text-xs">
              <div>
                <div className="text-slate-400">UFC</div>
                <div className="font-bold text-slate-100">
                  {fighter.uFCRecord.split("-")[0]}
                </div>
              </div>
              <div>
                <div className="text-slate-400">Pro</div>
                <div className="font-bold text-slate-100">
                  {fighter.record}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
