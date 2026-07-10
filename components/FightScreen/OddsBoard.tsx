"use client";

import { BoutOdds, Fighter } from "@/lib/types";

interface OddsBoardProps {
  fighters: [Fighter, Fighter];
  odds: BoutOdds;
}

export function OddsBoard({ fighters, odds }: OddsBoardProps) {
  const isFighter0Fav = odds.favouriteIndex === 0;
  const minutesAgo = Math.round(
    (Date.now() - odds.updatedAt) / (1000 * 60)
  );

  const prob0 = Math.round(odds.impliedProbability[0] * 100);
  const prob1 = Math.round(odds.impliedProbability[1] * 100);

  return (
    <div className="px-4 py-4 space-y-3">
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 space-y-3">
        <div className="grid grid-cols-2 gap-4">
          {[0, 1].map((idx) => (
            <div
              key={idx}
              className={`text-center px-3 py-2 rounded border transition ${
                idx === odds.favouriteIndex
                  ? "bg-slate-800 border-amber-600"
                  : "bg-slate-800/50 border-slate-700"
              }`}
            >
              <div className="text-xs text-slate-400 mb-1">
                {fighters[idx].name}
              </div>
              <div className="text-2xl font-bold text-slate-50 mb-1">
                {odds.fighters[idx].decimal.toFixed(2)}
              </div>
              <div className="text-xs text-slate-500">
                {odds.fighters[idx].bookmaker}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-1">
          <div className="flex gap-2 h-2 bg-slate-800 rounded overflow-hidden">
            <div
              className="bg-amber-600"
              style={{ width: `${prob0}%` }}
            />
            <div
              className="bg-slate-600"
              style={{ width: `${prob1}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-slate-400">
            <span>{prob0}%</span>
            <span>{prob1}%</span>
          </div>
        </div>

        <div className="text-xs text-slate-500 text-center">
          Updated {minutesAgo} {minutesAgo === 1 ? "minute" : "minutes"} ago
        </div>
      </div>
    </div>
  );
}
