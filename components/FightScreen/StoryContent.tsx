"use client";

import { Editorial } from "@/lib/types";

interface StoryContentProps {
  editorial: Editorial;
}

interface Section {
  label: string;
  text?: string;
  accent?: boolean;
}

export function StoryContent({ editorial }: StoryContentProps) {
  const sections: Section[] = [
    { label: "The Pick", text: editorial.thePick, accent: true },
    { label: "Recent Form", text: editorial.recentForm },
    { label: "Fighting Style", text: editorial.fightingStyle },
    { label: "History Between Them", text: editorial.historyBetweenThem },
    { label: "Weight Class", text: editorial.weightClassMovement },
    { label: "Experience & Record", text: editorial.experienceAndRecord },
    { label: "Popularity & Pop Culture", text: editorial.popularityAndPopCulture },
  ];

  return (
    <div className="px-4 py-6 space-y-6">
      {sections
        .filter((s) => s.text)
        .map((section) => (
          <div key={section.label}>
            <div
              className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] ${
                section.accent ? "text-red-400" : "text-zinc-500"
              }`}
            >
              {section.label}
            </div>
            <p className="text-sm leading-relaxed text-zinc-300">
              {section.text}
            </p>
            {section.accent && editorial.sneakyAngle && (
              <p className="mt-2 text-sm italic leading-relaxed text-zinc-500">
                Sneaky angle: {editorial.sneakyAngle}
              </p>
            )}
          </div>
        ))}
    </div>
  );
}
