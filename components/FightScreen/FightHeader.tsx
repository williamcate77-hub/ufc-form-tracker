"use client";

import { Fight, BoutType, NotableFlag } from "@/lib/types";

interface FightHeaderProps {
  fight: Fight;
  totalFights: number;
  boutTypeLabel: string;
}

function getBoutTypeColor(type: BoutType): string {
  switch (type) {
    case "main event":
      return "bg-rose-600";
    case "co-main":
      return "bg-orange-600";
    case "main card":
      return "bg-amber-600";
    case "featured prelim":
      return "bg-slate-700";
    case "prelim":
      return "bg-slate-800";
    default:
      return "bg-slate-700";
  }
}

function getFlagEmoji(country: string): string {
  // Simple country code to flag emoji converter
  const countryMap: Record<string, string> = {
    USA: "🇺🇸",
    Ireland: "🇮🇪",
    Brazil: "🇧🇷",
    Russia: "🇷🇺",
    UK: "🇬🇧",
    Canada: "🇨🇦",
    Australia: "🇦🇺",
    France: "🇫🇷",
    Netherlands: "🇳🇱",
    Sweden: "🇸🇪",
    Mexico: "🇲🇽",
    Japan: "🇯🇵",
    China: "🇨🇳",
    Korea: "🇰🇷",
    Israel: "🇮🇱",
    Poland: "🇵🇱",
    Denmark: "🇩🇰",
    Thailand: "🇹🇭",
    "South Africa": "🇿🇦",
    "New Zealand": "🇳🇿",
  };
  return countryMap[country] || "🌍";
}

export function FightHeader({
  fight,
  totalFights,
  boutTypeLabel,
}: FightHeaderProps) {
  return (
    <div className="px-4 py-4 border-b border-slate-700 space-y-4">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className={`${getBoutTypeColor(fight.boutType)} px-3 py-1 rounded text-xs font-bold text-white uppercase`}>
            {boutTypeLabel}
          </span>
          <span className="text-sm text-slate-400">
            {fight.rounds} rounds
          </span>
        </div>

        {fight.notableFlag && (
          <span className="bg-amber-900/50 border border-amber-700 px-2 py-1 rounded text-xs text-amber-200 font-medium">
            {fight.notableFlag}
          </span>
        )}
      </div>

      <div className="text-center">
        <div className="text-xs text-slate-400 mb-3">
          {fight.division} · Fight {fight.boutIndex + 1} of {totalFights}
        </div>

        <div className="space-y-2">
          {fight.fighters.map((fighter, idx) => (
            <div key={idx} className="flex items-center justify-center gap-2">
              <span className="text-2xl">{getFlagEmoji(fighter.country)}</span>
              <div className="text-center">
                <div className="font-bold text-lg text-slate-50">
                  {fighter.name}
                </div>
                {fighter.nickname && (
                  <div className="text-xs text-slate-400">
                    "{fighter.nickname}"
                  </div>
                )}
                {fighter.rank && (
                  <div className="text-xs text-amber-400">#{fighter.rank}</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
