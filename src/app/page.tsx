import { ButtonLink } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { JourneyCard } from "@/components/journey-card";
import { journeys } from "@/lib/journeys";

const services = [
  {
    title: "Journey design",
    body: "Every trip is built from a blank page around the people travelling. No packages, no templates, and nothing you could book yourself.",
  },
  {
    title: "Access",
    body: "Closed doors opened: private viewings, tables that do not take bookings, houses that are not on the market for rent.",
  },
  {
    title: "Private aviation and yachts",
    body: "Charter, positioning and crew handled by a desk that does only this. One call, one invoice.",
  },
  {
    title: "On the ground",
    body: "A named person in every place you go, who has walked the route before you and is reachable at any hour.",
  },
];

const steps = [
  {
    number: "01",
    title: "A conversation",
    body: "We start with a call, not a form. Who is going, what a good day looks like, what has disappointed you before.",
  },
  {
    number: "02",
    title: "A proposal",
    body: "Within a week you receive one considered itinerary, with the reasoning behind each choice and honest notes on trade-offs.",
  },
  {
    number: "03",
    title: "The journey",
    body: "We book, brief and stay on the line. Your designer travels with you in spirit and, when it matters, in person.",
  },
];

export default function HomePage() {
  const featured = journeys.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b hairline">
        <div className="container-luxe grid min-h-[calc(100svh-5rem)] items-end gap-12 py-16 lg:grid-cols-[1.2fr_1fr] lg:py-24">
          <div>
            <p className="eyebrow">Luxury travel concierge</p>
            <h1 className="display mt-6 max-w-3xl text-5xl text-ink sm:text-6xl lg:text-7xl">
              Travel, handled by people who would rather{" "}
              <em className="italic text-bronze">get it right</em> than get it done.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Offness is a private concierge for a small number of members. We design journeys
              from scratch, open doors that stay closed to everyone else, and stay with you until
              you are home.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <ButtonLink href="/request">Begin a request</ButtonLink>
              <ButtonLink href="/journeys" variant="ghost">
                See signature journeys
              </ButtonLink>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-8 gap-y-10 border-t hairline pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            <div>
              <dt className="eyebrow">Members</dt>
              <dd className="display mt-2 text-4xl">Under 200</dd>
            </div>
            <div>
              <dt className="eyebrow">Designers</dt>
              <dd className="display mt-2 text-4xl">One, named</dd>
            </div>
            <div>
              <dt className="eyebrow">Concierge line</dt>
              <dd className="display mt-2 text-4xl">24 hours</dd>
            </div>
            <div>
              <dt className="eyebrow">Offices</dt>
              <dd className="display mt-2 text-4xl">Three</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Signature journeys */}
      <section className="container-luxe py-24">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Signature journeys"
            title="Starting points, never the whole story"
            intro="Each of these has been travelled by us first. Treat them as a sketch of what is possible, then let us redraw it around you."
          />
          <ButtonLink href="/journeys" variant="outline" className="self-start">
            All journeys
          </ButtonLink>
        </div>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((journey) => (
            <JourneyCard key={journey.slug} journey={journey} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y hairline bg-ivory-deep">
        <div className="container-luxe py-24">
          <SectionHeading
            eyebrow="What we do"
            title="One relationship, every detail"
            intro="Most travel goes wrong in the gaps between suppliers. We remove the gaps."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-sm border hairline bg-line sm:grid-cols-2">
            {services.map((service) => (
              <div key={service.title} className="bg-ivory-deep p-8 sm:p-10">
                <h3 className="display text-2xl text-ink">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                  {service.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="container-luxe scroll-mt-24 py-24">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps, and then you are travelling"
        />
        <ol className="mt-14 grid gap-12 md:grid-cols-3">
          {steps.map((step) => (
            <li key={step.number} className="border-t hairline pt-6">
              <p className="display text-4xl text-bronze">{step.number}</p>
              <h3 className="display mt-4 text-2xl text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Quote */}
      <section className="border-y hairline bg-ink text-ivory">
        <div className="container-luxe py-24">
          <figure className="mx-auto max-w-3xl text-center">
            <blockquote className="display text-3xl leading-tight sm:text-4xl">
              “They knew our children’s names before we had told them. By the second trip they
              knew which of us wakes early. We have not booked anything ourselves since.”
            </blockquote>
            <figcaption className="mt-8 text-[0.72rem] uppercase tracking-[0.18em] text-bronze-light">
              House member since 2023
            </figcaption>
          </figure>
        </div>
      </section>

      {/* CTA */}
      <section className="container-luxe py-24">
        <div className="flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Begin"
            title="Tell us where your mind goes"
            intro="A few lines are enough. We will take it from there, and we reply personally."
          />
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/request">Begin a request</ButtonLink>
            <ButtonLink href="/membership" variant="outline">
              Membership
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
