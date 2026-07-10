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

function getQuarter(month: number): string {
  if (month <= 3) return "Q1";
  if (month <= 6) return "Q2";
  if (month <= 9) return "Q3";
  return "Q4";
}

function FormTile({
  fight,
  index,
}: {
  fight: RecentFight;
  index: number;
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="relative">
      <button
        className={`flex flex-col items-center justify-center w-12 h-14 ${getResultColor(fight.result)} rounded-lg font-bold text-white hover:ring-2 ring-amber-400 transition shadow-sm`}
        onMouseEnter={() => setShowDetails(true)}
        onMouseLeave={() => setShowDetails(false)}
        onTouchStart={() => setShowDetails(!showDetails)}
      >
        <div className="text-lg">{fight.result}</div>
        <div className="text-xs text-white/80">{fight.year}</div>
      </button>

      {showDetails && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-800 text-slate-100 text-xs px-3 py-2 rounded-lg whitespace-nowrap z-10 pointer-events-none border border-slate-700 shadow-lg">
          <div className="font-semibold">{fight.opponent}</div>
          <div className="text-slate-300 text-xs mt-1">{fight.method}</div>
        </div>
      )}
    </div>
  );
}

export function FormStrips({ fighters, isFirst = false }: FormStripsProps) {
  return (
    <div className="space-y-6">
      {isFirst && (
        <div className="bg-slate-900/50 border border-slate-800 rounded-lg px-3 py-2">
          <div className="text-xs text-slate-400 uppercase tracking-wider mb-2">
            Record Legend
          </div>
          <div className="flex gap-3 text-xs">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-emerald-500 rounded"></div>
              <span className="text-slate-300">Win</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-rose-500 rounded"></div>
              <span className="text-slate-300">Loss</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 bg-slate-500 rounded"></div>
              <span className="text-slate-300">Draw</span>
            </div>
          </div>
        </div>
      )}

      {fighters.map((fighter, fighterIdx) => (
        <div
          key={fighterIdx}
          className="bg-slate-900 border border-slate-800 rounded-lg p-4 space-y-3"
        >
          {/* Fighter Name & Weight Class */}
          <div className="border-b border-slate-700 pb-3">
            <h3 className="font-bold text-lg text-slate-50">
              {fighter.name}
              {fighter.rank && (
                <span className="ml-2 text-sm text-amber-400 font-normal">
                  #{fighter.rank}
                </span>
              )}
            </h3>
            <div className="text-sm text-slate-400 mt-1">
              Age: <span className="text-slate-200">{fighter.age}</span>
            </div>
          </div>

          {/* Records Row */}
          <div className="grid grid-cols-3 gap-3 text-center py-2 bg-slate-800/40 rounded px-3">
            <div>
              <div className="text-xs text-slate-400 uppercase">Pro Record</div>
              <div className="font-bold text-slate-50 mt-1">
                {fighter.record}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase">UFC Record</div>
              <div className="font-bold text-slate-50 mt-1">
                {fighter.uFCRecord}
              </div>
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase">Total Fights</div>
              <div className="font-bold text-slate-50 mt-1">
                {fighter.recentFights.length + 5}
              </div>
            </div>
          </div>

          {/* Recent Fights */}
          <div>
            <div className="text-xs uppercase tracking-wider text-slate-400 mb-3">
              Last 5 Fights
            </div>
            <div className="flex gap-2 flex-wrap">
              {fighter.recentFights.slice(0, 5).map((fight, idx) => (
                <FormTile key={idx} fight={fight} index={idx} />
              ))}
            </div>
          </div>

          {/* Recent Fight Details */}
          {fighter.recentFights.length > 0 && (
            <div className="bg-slate-800/30 rounded p-3 text-xs space-y-2">
              <div className="text-slate-400 font-semibold mb-2">
                Fight Details
              </div>
              {fighter.recentFights.slice(0, 3).map((fight, idx) => (
                <div key={idx} className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="text-slate-200">
                      <span
                        className={`font-bold ${
                          fight.result === "W"
                            ? "text-emerald-400"
                            : fight.result === "L"
                              ? "text-rose-400"
                              : "text-slate-400"
                        }`}
                      >
                        {fight.result}
                      </span>
                      <span className="text-slate-400 mx-2">vs</span>
                      <span className="text-slate-100">{fight.opponent}</span>
                    </div>
                    <div className="text-slate-400 mt-1">
                      {fight.method}
                      <span className="ml-2 text-slate-500">({fight.year})</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
