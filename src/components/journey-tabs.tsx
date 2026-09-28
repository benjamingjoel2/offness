"use client";

import { useState } from "react";
import Link from "next/link";
import type { Journey } from "@/lib/journeys";
import { JourneyArtwork } from "@/components/journey-artwork";
import { ButtonLink } from "@/components/ui/button";

type Tab = { label: string; slugs: string[] };

const tabs: Tab[] = [
  { label: "Sea & coast", slugs: ["amalfi-by-water", "great-barrier-under-sail", "patagonia-end-of-the-map"] },
  { label: "Wilderness", slugs: ["the-quiet-serengeti", "patagonia-end-of-the-map", "the-long-white-silence"] },
  { label: "Cities & culture", slugs: ["kyoto-in-the-in-between", "amalfi-by-water", "the-quiet-serengeti"] },
  { label: "Far north", slugs: ["the-long-white-silence", "patagonia-end-of-the-map", "kyoto-in-the-in-between"] },
];

export function JourneyTabs({ journeys }: { journeys: Journey[] }) {
  const [active, setActive] = useState(0);
  const bySlug = new Map(journeys.map((j) => [j.slug, j]));
  const visible = tabs[active].slugs.map((slug) => bySlug.get(slug)).filter(Boolean) as Journey[];
  const [left, right] = [tabs.slice(0, 2), tabs.slice(2)];

  const TabButton = ({ tab, i }: { tab: Tab; i: number }) => (
    <button
      type="button"
      role="tab"
      aria-selected={i === active}
      onClick={() => setActive(i)}
      className={`border-b pb-1 text-[0.66rem] font-medium uppercase tracking-[0.18em] transition-colors ${
        i === active ? "border-ink text-ink" : "border-transparent text-ink-soft hover:text-ink"
      }`}
    >
      {tab.label}
    </button>
  );

  return (
    <div>
      <div className="grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]" role="tablist" aria-label="Journey types">
        <div className="flex justify-center gap-8 md:justify-start md:gap-12">
          {left.map((tab, i) => <TabButton key={tab.label} tab={tab} i={i} />)}
        </div>
        <h2 className="display order-first text-center text-3xl uppercase tracking-[0.08em] text-ink sm:text-4xl md:order-none">
          Our journeys
        </h2>
        <div className="flex justify-center gap-8 md:justify-end md:gap-12">
          {right.map((tab, i) => <TabButton key={tab.label} tab={tab} i={i + 2} />)}
        </div>
      </div>

      <ul className="mt-10 grid gap-8 sm:grid-cols-3">
        {visible.map((journey) => (
          <li key={journey.slug}>
            <Link href={`/journeys/${journey.slug}`} className="group block text-center">
              <JourneyArtwork palette={journey.palette} className="aspect-[3/4] transition-opacity group-hover:opacity-90" />
              <h3 className="mt-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink">{journey.name}</h3>
              <p className="mt-1 text-sm text-ink-soft">{journey.place}</p>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <ButtonLink href="/request">Begin a request</ButtonLink>
      </div>
    </div>
  );
}
