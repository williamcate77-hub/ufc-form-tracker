"use client";

import { RecentFight } from "@/lib/types";
import { useState } from "react";

const TILE_STYLES: Record<string, string> = {
  W: "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  L: "bg-red-500/15 text-red-300 border-red-500/25",
  D: "bg-zinc-500/15 text-zinc-300 border-zinc-500/25",
  NC: "bg-zinc-500/15 text-zinc-300 border-zinc-500/25",
};

const RESULT_TEXT: Record<string, string> = {
  W: "text-emerald-400",
  L: "text-red-400",
  D: "text-zinc-400",
  NC: "text-zinc-400",
};

interface FormStripProps {
  fights: RecentFight[];
  /** sm = compact read-only tiles (home cards); md = tappable tiles with detail row (fight screen) */
  size?: "sm" | "md";
  interactive?: boolean;
  /** Fired on the first tile tap, e.g. to dismiss the usage hint */
  onInteract?: () => void;
}

export function FormStrip({
  fights,
  size = "md",
  interactive = false,
  onInteract,
}: FormStripProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const shown = fights.slice(0, 5);
  const open = openIdx !== null ? shown[openIdx] : null;

  const tileSize =
    size === "sm"
      ? "h-7 w-7 rounded-md text-[10px]"
      : "h-9 w-9 rounded-lg text-xs";

  if (!interactive) {
    return (
      <div className="flex gap-1.5">
        {shown.map((f, i) => (
          <div
            key={i}
            className={`${tileSize} ${TILE_STYLES[f.result]} flex items-center justify-center border font-bold`}
          >
            {f.result}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-1.5">
        {shown.map((f, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${f.result} vs ${f.opponent}, ${f.method}, ${f.year}`}
            aria-expanded={openIdx === i}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpenIdx(openIdx === i ? null : i);
              onInteract?.();
            }}
            className={`${tileSize} ${TILE_STYLES[f.result]} flex items-center justify-center border font-bold transition-all duration-150 ${
              openIdx === i
                ? "ring-2 ring-white/50 scale-105"
                : "hover:scale-105 active:scale-95"
            }`}
          >
            {f.result}
          </button>
        ))}
      </div>

      {open && (
        <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-zinc-300">
          <span className={`font-bold ${RESULT_TEXT[open.result]}`}>
            {open.result === "W" ? "Won" : open.result === "L" ? "Lost" : open.result}
          </span>
          <span className="text-zinc-600">vs</span>
          <span className="font-semibold text-zinc-100">{open.opponent}</span>
          <span className="text-zinc-600">·</span>
          <span>{open.method}</span>
          {open.round != null && (
            <>
              <span className="text-zinc-600">·</span>
              <span className="font-mono">R{open.round}</span>
            </>
          )}
          <span className="text-zinc-600">·</span>
          <span className="font-mono">{open.year}</span>
          {open.weightClass && (
            <>
              <span className="text-zinc-600">·</span>
              <span className="text-zinc-400">{open.weightClass}</span>
            </>
          )}
        </div>
      )}
    </div>
  );
}
