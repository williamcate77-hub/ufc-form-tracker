"use client";

import { Fighter } from "@/lib/types";

interface TaleOfTapeProps {
  fighters: [Fighter, Fighter];
}

interface TapeRow {
  label: string;
  left: string;
  right: string;
  /** which side has the numeric edge, for subtle highlighting */
  edge?: "left" | "right" | null;
}

function numericEdge(a?: number, b?: number): "left" | "right" | null {
  if (a == null || b == null || a === b) return null;
  return a > b ? "left" : "right";
}

function buildRows([f1, f2]: [Fighter, Fighter]): TapeRow[] {
  const rows: TapeRow[] = [];

  rows.push({
    label: "Age",
    left: `${f1.age}`,
    right: `${f2.age}`,
    edge: null,
  });

  if (f1.heightCm && f2.heightCm) {
    rows.push({
      label: "Height",
      left: `${f1.heightCm} cm`,
      right: `${f2.heightCm} cm`,
      edge: numericEdge(f1.heightCm, f2.heightCm),
    });
  }

  if (f1.reachCm && f2.reachCm) {
    rows.push({
      label: "Reach",
      left: `${f1.reachCm} cm`,
      right: `${f2.reachCm} cm`,
      edge: numericEdge(f1.reachCm, f2.reachCm),
    });
  }

  if (f1.stance && f2.stance) {
    rows.push({
      label: "Stance",
      left: f1.stance,
      right: f2.stance,
      edge: null,
    });
  }

  rows.push({
    label: "Record",
    left: f1.record,
    right: f2.record,
    edge: null,
  });

  rows.push({
    label: "UFC",
    left: f1.uFCRecord,
    right: f2.uFCRecord,
    edge: null,
  });

  return rows;
}

function lastName(name: string): string {
  const parts = name.split(" ");
  return parts[parts.length - 1];
}

export function TaleOfTape({ fighters }: TaleOfTapeProps) {
  const rows = buildRows(fighters);

  return (
    <div className="px-4 py-6">
      <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
        Tale of the Tape
      </div>

      <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03]">
        {/* Fighter name header */}
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 border-b border-white/[0.07] bg-white/[0.02] px-4 py-3">
          <div className="flex items-center gap-2 min-w-0">
            <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
            <span className="truncate text-sm font-bold text-zinc-100">
              {lastName(fighters[0].name)}
            </span>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-600">
            vs
          </span>
          <div className="flex items-center justify-end gap-2 min-w-0">
            <span className="truncate text-sm font-bold text-zinc-100">
              {lastName(fighters[1].name)}
            </span>
            <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />
          </div>
        </div>

        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`grid grid-cols-[1fr_auto_1fr] items-center px-4 py-2.5 ${
              i < rows.length - 1 ? "border-b border-white/[0.05]" : ""
            }`}
          >
            <span
              className={`font-mono text-sm ${
                row.edge === "left"
                  ? "font-bold text-zinc-50"
                  : "font-medium text-zinc-400"
              }`}
            >
              {row.left}
            </span>
            <span className="px-3 text-center text-[10px] uppercase tracking-[0.2em] text-zinc-600">
              {row.label}
            </span>
            <span
              className={`text-right font-mono text-sm ${
                row.edge === "right"
                  ? "font-bold text-zinc-50"
                  : "font-medium text-zinc-400"
              }`}
            >
              {row.right}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
