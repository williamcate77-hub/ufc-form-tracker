"use client";

import { Editorial } from "@/lib/types";
import { useState } from "react";

interface PickSummaryProps {
  editorial: Editorial;
}

export function PickSummary({ editorial }: PickSummaryProps) {
  const [showSubstantiation, setShowSubstantiation] = useState(false);

  return (
    <div className="px-4 py-6 space-y-4 bg-gradient-to-b from-amber-950/20 to-transparent border-b border-amber-900/30">
      {/* The Pick - Main Box */}
      <div className="bg-amber-900/40 border-l-4 border-amber-600 px-4 py-4 rounded-r-lg">
        <div className="text-xs uppercase tracking-widest text-amber-300 mb-2 font-semibold">
          The Pick
        </div>
        <p className="text-lg font-bold text-slate-50 leading-relaxed mb-3">
          {editorial.thePick}
        </p>
        {editorial.sneakyAngle && (
          <p className="text-sm text-amber-200 italic leading-relaxed">
            💡 {editorial.sneakyAngle}
          </p>
        )}
      </div>

      {/* One-liner Pull Quote - Hero */}
      <div className="bg-slate-800 border-2 border-amber-600 rounded-lg px-5 py-5">
        <p className="text-xl italic text-amber-100 leading-relaxed font-semibold">
          "{editorial.oneLiner}"
        </p>
      </div>

      {/* Substantiation Dropdown */}
      {editorial.oneLinnerSubstantiation &&
        editorial.oneLinnerSubstantiation.length > 0 && (
          <button
            onClick={() => setShowSubstantiation(!showSubstantiation)}
            className="w-full flex items-center gap-2 px-3 py-2 text-amber-300 hover:text-amber-200 font-medium transition rounded-lg hover:bg-slate-800/50 text-sm"
          >
            <span className="text-lg">{showSubstantiation ? "▼" : "▶"}</span>
            <span>Why this pick</span>
          </button>
        )}

      {showSubstantiation && editorial.oneLinnerSubstantiation && (
        <div className="bg-slate-800/40 rounded-lg p-4 space-y-2 ml-2">
          {editorial.oneLinnerSubstantiation.map((point, idx) => (
            <div key={idx} className="flex gap-3 text-sm text-slate-200">
              <span className="text-amber-400 flex-shrink-0 mt-1">•</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
