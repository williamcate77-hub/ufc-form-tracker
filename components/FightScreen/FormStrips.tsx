"use client";

import { Fighter } from "@/lib/types";
import { FormStrip } from "@/components/FormStrip";

interface FormStripsProps {
  fighters: [Fighter, Fighter];
  currentWeightClass?: string;
}

const CORNER_DOT = ["bg-red-500", "bg-blue-500"];

export function FormStrips({ fighters }: FormStripsProps) {
  return (
    <div className="px-4 py-6">
      <div className="mb-3 flex items-baseline justify-between">
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
          Recent Form
        </span>
        <span className="text-[10px] text-zinc-600">tap a result for details</span>
      </div>

      <div className="space-y-3">
        {fighters.map((fighter, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-4"
          >
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 min-w-0">
                <span
                  className={`h-2 w-2 shrink-0 rounded-full ${CORNER_DOT[idx]}`}
                />
                <span className="truncate text-sm font-bold text-zinc-100">
                  {fighter.name}
                </span>
                {fighter.rank != null && (
                  <span className="font-mono text-xs text-zinc-500">
                    #{fighter.rank}
                  </span>
                )}
              </div>
              <span className="shrink-0 font-mono text-xs text-zinc-500">
                {fighter.record}
              </span>
            </div>

            <FormStrip fights={fighter.recentFights} interactive />
          </div>
        ))}
      </div>
    </div>
  );
}
