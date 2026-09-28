import Link from "next/link";
import type { Journey } from "@/lib/journeys";
import { formatGbp, formatNights } from "@/lib/format";
import { JourneyArtwork } from "@/components/journey-artwork";

export function JourneyCard({ journey }: { journey: Journey }) {
  return (
    <Link
      href={`/journeys/${journey.slug}`}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-4 focus-visible:ring-offset-ivory"
    >
      <JourneyArtwork
        palette={journey.palette}
        className="aspect-[4/5] overflow-hidden rounded-sm transition-transform duration-500 group-hover:-translate-y-1"
      />
      <div className="mt-5 flex items-baseline justify-between gap-4">
        <p className="eyebrow">{journey.region}</p>
        <p className="text-xs text-stone">{formatNights(journey.nights)}</p>
      </div>
      <h3 className="display mt-2 text-2xl text-ink group-hover:underline group-hover:decoration-bronze group-hover:underline-offset-8">
        {journey.name}
      </h3>
      <p className="mt-1 text-sm text-ink-soft">{journey.place}</p>
      <p className="mt-3 text-sm text-stone">From {formatGbp(journey.fromPrice)} per person</p>
    </Link>
  );
}
