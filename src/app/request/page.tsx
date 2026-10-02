import type { Metadata } from "next";
import { RequestForm } from "@/components/request-form";
import { SectionHeading } from "@/components/section-heading";
import { getJourney } from "@/lib/journeys";
import { siteConfig } from "@/lib/site";
import { WhatsAppButton, WhatsAppDetails } from "@/components/whatsapp";

export const metadata: Metadata = {
  title: "Apply for membership",
  description: "Message us on WhatsApp, or tell us a little about yourself here. We reply personally.",
};

export default async function RequestPage(props: PageProps<"/request">) {
  const { journey: journeyParam } = await props.searchParams;
  const journey = typeof journeyParam === "string" ? getJourney(journeyParam) : undefined;

  return (
    <section className="container-luxe grid gap-16 py-20 lg:grid-cols-[1fr_1.6fr]">
      <div className="lg:sticky lg:top-28 lg:h-fit">
        <SectionHeading
          as="h1"
          eyebrow="Apply for membership"
          title={journey ? <>About {journey.name}</> : "The fastest way is a message"}
          intro={
            journey
              ? `We will use ${journey.name} as the starting point and redraw it around you. Message us, or use the form.`
              : "Most members never fill in a form. They send a WhatsApp and a designer replies within minutes. If you would rather write it down, the form is here too."
          }
        />
        <div className="mt-8 flex flex-col items-start gap-3">
          <WhatsAppButton
            message={journey ? `Hello Offness, I’d like to ask about “${journey.name}”.` : "Hello Offness, I’d like to apply for membership."}
          />
          <WhatsAppDetails />
        </div>
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
