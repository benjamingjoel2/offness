import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { JourneyArtwork } from "@/components/journey-artwork";
import { JourneyCard } from "@/components/journey-card";
import { formatGbp, formatNights } from "@/lib/format";
import { getJourney, journeys } from "@/lib/journeys";
import { WhatsAppButton } from "@/components/whatsapp";

export function generateStaticParams() {
  return journeys.map((journey) => ({ slug: journey.slug }));
}

export async function generateMetadata(props: PageProps<"/journeys/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const journey = getJourney(slug);
  if (!journey) {
    return { title: "Journey not found" };
  }
  return {
    title: journey.name,
    description: journey.summary,
  };
}

export default async function JourneyPage(props: PageProps<"/journeys/[slug]">) {
  const { slug } = await props.params;
  const journey = getJourney(slug);
  if (!journey) {
    notFound();
  }

  const others = journeys.filter((other) => other.slug !== journey.slug).slice(0, 3);

  return (
    <>
      <article>
        <header className="container-luxe grid gap-12 border-b hairline py-16 lg:grid-cols-[1fr_1fr] lg:py-24">
          <div className="flex flex-col justify-end">
            <p className="eyebrow">
              {journey.region} · {formatNights(journey.nights)}
            </p>
            <h1 className="display mt-6 text-5xl text-ink sm:text-6xl">{journey.name}</h1>
            <p className="mt-4 text-lg text-ink-soft">{journey.place}</p>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              {journey.summary}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <WhatsAppButton message={`Hello Offness, I’d like to ask about “${journey.name}”.`}>
                Ask about this journey
              </WhatsAppButton>
              <ButtonLink href="/journeys" variant="ghost">
                All journeys
              </ButtonLink>
            </div>
          </div>
          <JourneyArtwork palette={journey.palette} className="aspect-[4/5] rounded-sm lg:aspect-auto lg:min-h-[32rem]" />
        </header>

        <div className="container-luxe grid gap-16 py-20 lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="eyebrow">The idea</p>
            <p className="display mt-6 text-2xl leading-snug text-ink sm:text-3xl">{journey.story}</p>

            <h2 className="eyebrow mt-16">Highlights</h2>
            <ul className="mt-6 divide-y hairline border-y">
              {journey.highlights.map((highlight) => (
                <li key={highlight} className="py-4 text-base text-ink-soft">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit border hairline p-8 lg:sticky lg:top-28">
            <dl className="space-y-6 text-sm">
              <div>
                <dt className="eyebrow">Season</dt>
                <dd className="mt-2 text-ink">{journey.season}</dd>
              </div>
              <div>
                <dt className="eyebrow">Duration</dt>
                <dd className="mt-2 text-ink">{formatNights(journey.nights)}, adjustable</dd>
              </div>
              <div>
                <dt className="eyebrow">Where you stay</dt>
                <dd className="mt-2 text-ink">
                  <ul className="space-y-1">
                    {journey.stays.map((stay) => (
                      <li key={stay}>{stay}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div>
                <dt className="eyebrow">Indicative</dt>
                <dd className="mt-2 text-ink">
                  From {formatGbp(journey.fromPrice)} per person, excluding flights
                </dd>
              </div>
            </dl>
            <WhatsAppButton message={`Hello Offness, I’d like to ask about “${journey.name}”.`} className="mt-8 w-full">
              Ask on WhatsApp
            </WhatsAppButton>
            <ButtonLink href={`/request?journey=${journey.slug}`} variant="ghost" className="mt-2 w-full">
              Or send a written request
            </ButtonLink>
          </aside>
        </div>
      </article>

      <section className="border-t hairline bg-ivory-deep">
        <div className="container-luxe py-20">
          <p className="eyebrow">Also consider</p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other) => (
              <JourneyCard key={other.slug} journey={other} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
