import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { JourneyCard } from "@/components/journey-card";
import { ButtonLink } from "@/components/ui/button";
import { getRegions, journeys } from "@/lib/journeys";

export const metadata: Metadata = {
  title: "Signature journeys",
  description:
    "Six journeys we have travelled ourselves, each a starting point for something designed around you.",
};

export default function JourneysPage() {
  const regions = getRegions();

  return (
    <>
      <section className="container-luxe border-b hairline py-20">
        <SectionHeading
          as="h1"
          eyebrow="Signature journeys"
          title="Travelled by us first"
          intro="None of these is sold as it appears. Each is a sketch we redraw around the people going, the season and the pace you want."
        />
        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-[0.72rem] uppercase tracking-[0.18em] text-stone">
          {regions.map((region) => (
            <li key={region}>{region}</li>
          ))}
        </ul>
      </section>

      <section className="container-luxe py-20">
        <div className="grid gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {journeys.map((journey) => (
            <JourneyCard key={journey.slug} journey={journey} />
          ))}
        </div>
      </section>

      <section className="border-t hairline bg-ivory-deep">
        <div className="container-luxe flex flex-col gap-8 py-20 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Somewhere else entirely"
            title="Nothing here is the limit"
            intro="Most of what we arrange never appears on this page. Tell us the idea and we will do the rest."
          />
          <ButtonLink href="/request">Begin a request</ButtonLink>
        </div>
      </section>
    </>
  );
}
