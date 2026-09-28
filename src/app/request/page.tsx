import type { Metadata } from "next";
import { RequestForm } from "@/components/request-form";
import { SectionHeading } from "@/components/section-heading";
import { getJourney } from "@/lib/journeys";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Begin a request",
  description: "Tell us a little about the journey you have in mind. We reply personally.",
};

export default async function RequestPage(props: PageProps<"/request">) {
  const { journey: journeyParam } = await props.searchParams;
  const journey = typeof journeyParam === "string" ? getJourney(journeyParam) : undefined;

  return (
    <section className="container-luxe grid gap-16 py-20 lg:grid-cols-[1fr_1.6fr]">
      <div className="lg:sticky lg:top-28 lg:h-fit">
        <SectionHeading
          as="h1"
          eyebrow="Begin a request"
          title={journey ? <>About {journey.name}</> : "Tell us what you have in mind"}
          intro={
            journey
              ? `We will use ${journey.name} as the starting point and redraw it around you.`
              : "A few lines are enough. A designer reads every request personally and replies, usually within a business day."
          }
        />
        <dl className="mt-12 space-y-6 border-t hairline pt-8 text-sm">
          <div>
            <dt className="eyebrow">Prefer to talk?</dt>
            <dd className="mt-2">
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-ink hover:underline">
                {siteConfig.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow">Or write</dt>
            <dd className="mt-2">
              <a href={`mailto:${siteConfig.email}`} className="text-ink hover:underline">
                {siteConfig.email}
              </a>
            </dd>
          </div>
        </dl>
      </div>

      <div>
        <RequestForm
          defaultDestination={journey ? `${journey.name} · ${journey.place}` : undefined}
          journeySlug={journey?.slug}
        />
      </div>
    </section>
  );
}
