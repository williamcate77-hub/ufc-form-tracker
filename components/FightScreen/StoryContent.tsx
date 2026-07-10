"use client";

import { Editorial } from "@/lib/types";
import { useState } from "react";

interface StoryContentProps {
  editorial: Editorial;
}

export function StoryContent({ editorial }: StoryContentProps) {
  const [showSubstantiation, setShowSubstantiation] = useState(false);

  return (
    <div className="px-4 py-4 space-y-6">
      {/* The Pick */}
      <div>
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
          The Pick
        </div>
        <p className="text-sm text-slate-200 leading-relaxed">
          {editorial.thePick}
        </p>
        {editorial.sneakyAngle && (
          <p className="text-sm text-amber-300 leading-relaxed mt-2 italic">
            Sneaky angle: {editorial.sneakyAngle}
          </p>
        )}
      </div>

      {/* Recent Form */}
      <div>
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
          Recent Form
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          {editorial.recentForm}
        </p>
      </div>

      {/* Fighting Style */}
      <div>
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
          Fighting Style
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          {editorial.fightingStyle}
        </p>
      </div>

      {/* History */}
      {editorial.historyBetweenThem && (
        <div>
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
            History Between Them
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {editorial.historyBetweenThem}
          </p>
        </div>
      )}

      {/* Weight Class Movement */}
      {editorial.weightClassMovement && (
        <div>
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
            Weight Class
          </div>
          <p className="text-sm text-slate-300 leading-relaxed">
            {editorial.weightClassMovement}
          </p>
        </div>
      )}

      {/* Experience and Record */}
      <div>
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
          Experience & Record
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          {editorial.experienceAndRecord}
        </p>
      </div>

      {/* Popularity and Pop Culture */}
      <div>
        <div className="text-xs uppercase tracking-widest text-slate-400 mb-2">
          Popularity & Pop Culture
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          {editorial.popularityAndPopCulture}
        </p>
      </div>

      {/* One-liner as pull quote */}
      <div className="bg-slate-900 border-l-4 border-amber-600 px-4 py-3 my-4">
        <p className="text-sm italic text-slate-100 leading-relaxed">
          "{editorial.oneLiner}"
        </p>
      </div>

      {/* Substantiation dropdown */}
      {editorial.oneLinnerSubstantiation &&
        editorial.oneLinnerSubstantiation.length > 0 && (
          <div>
            <button
              onClick={() => setShowSubstantiation(!showSubstantiation)}
              className="flex items-center gap-2 text-sm text-amber-400 hover:text-amber-300 font-medium transition"
            >
              <span>{showSubstantiation ? "▼" : "▶"}</span>
              Why this pick
            </button>

            {showSubstantiation && (
              <ul className="mt-2 space-y-2 ml-4">
                {editorial.oneLinnerSubstantiation.map((point, idx) => (
                  <li key={idx} className="text-sm text-slate-300 flex gap-2">
                    <span className="text-amber-500 flex-shrink-0">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
    </div>
  );
}
