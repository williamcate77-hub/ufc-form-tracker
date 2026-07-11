"use client";

import { Editorial } from "@/lib/types";
import { useState } from "react";

interface PickSummaryProps {
  editorial: Editorial;
}

export function PickSummary({ editorial }: PickSummaryProps) {
  const [showSubstantiation, setShowSubstantiation] = useState(false);
  const points = editorial.oneLinnerSubstantiation ?? [];

  return (
    <div className="px-4 py-4 space-y-3">
      {/* One-liner pull quote */}
      <blockquote className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 pl-6">
        <span className="absolute left-0 top-0 bottom-0 w-1 bg-red-500" />
        <p className="text-lg font-medium leading-relaxed text-zinc-100">
          {editorial.oneLiner}
        </p>
      </blockquote>

      {points.length > 0 && (
        <>
          <button
            type="button"
            onClick={() => setShowSubstantiation(!showSubstantiation)}
            aria-expanded={showSubstantiation}
            className="flex w-full items-center justify-between rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3 text-sm font-semibold text-zinc-300 transition-colors hover:bg-white/[0.05] hover:text-zinc-100 active:scale-[0.99]"
          >
            <span>Why this pick</span>
            <span
              className={`text-zinc-500 transition-transform duration-200 ${
                showSubstantiation ? "rotate-180" : ""
              }`}
            >
              ▾
            </span>
          </button>

          {showSubstantiation && (
            <div className="space-y-2 rounded-xl border border-white/[0.07] bg-white/[0.02] p-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex gap-3 text-sm text-zinc-300">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500/70" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
