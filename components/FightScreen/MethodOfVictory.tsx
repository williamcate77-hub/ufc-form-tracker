"use client";

import { MethodOfVictory as MethodType, Fighter } from "@/lib/types";

interface MethodOfVictoryProps {
  fighters: [Fighter, Fighter];
  method: MethodType;
}

export function MethodOfVictory({
  fighters,
  method,
}: MethodOfVictoryProps) {
  return (
    <div className="px-4 py-3">
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-4 space-y-3">
        <div className="text-sm text-slate-400 uppercase tracking-wider">
          Most Likely Outcome
        </div>

        <div className="text-lg font-bold text-slate-50">
          {method.prediction}
          {method.marketPrice && (
            <span className="text-sm text-amber-400 ml-2">
              @ {method.marketPrice.toFixed(2)}
            </span>
          )}
        </div>

        {method.methodMarkets && (
          <div className="space-y-2 mt-3 pt-3 border-t border-slate-800">
            {Object.entries(method.methodMarkets).map(([method, odds]) => (
              <div key={method} className="space-y-1">
                <div className="text-xs text-slate-400">{method}</div>
                <div className="flex gap-2">
                  {[0, 1].map((idx) => (
                    <div key={idx} className="flex-1">
                      <div className="text-xs text-slate-300 mb-1">
                        {fighters[idx].name}
                      </div>
                      <div className="text-sm font-bold text-slate-50">
                        {odds[idx].toFixed(2)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
