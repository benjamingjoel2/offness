import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";
import { Carousel } from "@/components/carousel";
import { ImageCard } from "@/components/image-card";
import { JourneyArtwork } from "@/components/journey-artwork";
import { JourneyTabs } from "@/components/journey-tabs";
import { Testimonials } from "@/components/testimonials";
import { WhatsAppButton, WhatsAppDetails } from "@/components/whatsapp";
import { getDestinations } from "@/lib/destinations";
import { journeys } from "@/lib/journeys";
import { tiers } from "@/lib/membership";
import { businessServices, membershipServices } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { testimonials } from "@/lib/testimonials";

const diamonds = ["◇", "◇◇", "◇◇◇"];

function SectionTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`display text-3xl uppercase tracking-[0.08em] text-ink sm:text-4xl ${className}`}>
      {children}
    </h2>
  );
}

export default function HomePage() {
  const destinations = getDestinations();
  const winter = journeys.find((j) => j.slug === "the-long-white-silence") ?? journeys[0];
  const concierge = journeys.slice(0, 4);

  return (
    <>
      {/* 1. Split hero */}
      <section className="grid lg:grid-cols-2">
        <div className="container-luxe flex flex-col justify-center py-16 lg:max-w-none lg:py-24 lg:pl-[max(1.25rem,calc((100vw-80rem)/2+3rem))]">
          <p className="eyebrow">Luxury travel concierge, on WhatsApp</p>
          <h1 className="display mt-6 max-w-xl text-5xl leading-[1.05] text-ink sm:text-6xl">
            Anything you want.
            <br />
            <em className="italic">One message away.</em>
          </h1>
          <p className="mt-8 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
            Offness is a private travel concierge for a small number of members. There is no app
            to learn and no form to fill in. You send a WhatsApp, any hour of the day, and a
            designer who knows you takes it from there: the journey, the house, the boat, the
            table, and everything in between.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <WhatsAppButton message="Hello Offness, I’d like to talk about a journey." />
            <ButtonLink href="/request" variant="outline">
              Apply for membership
            </ButtonLink>
          </div>
          <WhatsAppDetails className="mt-5" />
        </div>
        <JourneyArtwork
          palette={["#2f4e6f", "#dcc7a3"]}
          className="min-h-[22rem] lg:min-h-[36rem]"
        />
      </section>

      {/* 2. Three image-led cards */}
      <section className="bg-ivory-deep">
        <div className="container-luxe py-16 sm:py-20">
          <div className="flex justify-end">
            <ButtonLink href="/contact" className="px-5 py-2.5">
              Make an enquiry
            </ButtonLink>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <ImageCard
              title="Private membership"
              body="Bespoke concierge and travel design for individuals and families who want highly personalised, one-to-one attention and access to the inaccessible."
              href="/membership"
              palette={["#4b2e2a", "#d8b48f"]}
            />
            <ImageCard
              title="Corporate membership"
              body="Extending our service beyond individuals, we help businesses look after their leadership, their clients and their guests."
              href="/membership#corporate"
              palette={["#5c6b78", "#eef0ef"]}
            />
            <ImageCard
              title="The Notebook"
              body="Consistently connected to the places that matter, the Notebook is where we write down what we found, from the best private dining rooms to the quiet weeks in Kyoto."
              href="/journeys"
              palette={["#1f2a44", "#c9c3b4"]}
              cta="Read the Notebook"
            />
          </div>
        </div>
      </section>

      {/* 3. How it works: message, reply, done */}
      <section id="how-it-works" className="scroll-mt-20 border-b hairline bg-ivory">
        <div className="container-luxe py-16 sm:py-20">
          <SectionTitle className="text-center">How it works</SectionTitle>
          <div className="mt-12 grid gap-12 text-center sm:grid-cols-3">
            {[
              ["Message", "On WhatsApp", "Tell us what you want the way you would tell a friend. A place, a date, a feeling, a photo. No forms, no apps, no hold music."],
              ["Minutes", "To a reply", "A designer who knows you replies within minutes, any hour, any time zone, and asks only what they need to."],
              ["Done", "Every detail", "We book, brief, confirm and stay on the line until you are home. Changes are one more message."],
            ].map(([big, small, body]) => (
              <div key={small} className="mx-auto max-w-xs">
                <p className="display text-4xl uppercase tracking-[0.04em] text-ink lg:text-[2.75rem]">{big}</p>
                <p className="mt-1 text-[0.66rem] font-medium uppercase tracking-[0.22em] text-ink">{small}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center gap-4">
            <WhatsAppButton message="Hello Offness, I’d like to talk about a journey." />
            <WhatsAppDetails />
          </div>
        </div>
      </section>

      {/* 4. Tabbed journeys grid */}
      <section className="container-luxe py-16 sm:py-24">
        <JourneyTabs journeys={journeys} />
      </section>

      {/* 5. Membership services carousel */}
      <section id="services" className="scroll-mt-20 bg-ivory-deep">
        <div className="container-luxe py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display text-3xl text-ink sm:text-4xl">Membership services</h2>
            <ButtonLink href="/membership" className="self-start px-5 py-2.5">
              Learn more
            </ButtonLink>
          </div>
          <div className="mt-8">
            <Carousel label="Membership services">
              {membershipServices.map((service) => (
                <div key={service.title} className="w-[82%] flex-none snap-start sm:w-[46%] lg:w-[31.5%]">
                  <ImageCard {...service} className="h-full" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* 6. Seasonal split feature */}
      <section className="container-luxe grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1fr_1.3fr]">
        <div className="text-center lg:text-left">
          <SectionTitle>
            Your winter
            <br />
            starts here
          </SectionTitle>
          <p className="mx-auto mt-6 max-w-md text-sm leading-relaxed text-ink-soft lg:mx-0">
            Discover our most exceptional cold-weather journeys and plan early, while the finest
            houses, boats and guides are still available for the dates you want.
          </p>
          <div className="mt-8">
            <ButtonLink href={`/journeys/${winter.slug}`}>Explore {winter.name}</ButtonLink>
          </div>
        </div>
        <Link href={`/journeys/${winter.slug}`} aria-label={winter.name}>
          <JourneyArtwork palette={winter.palette} className="aspect-[3/2]" />
        </Link>
      </section>

      {/* 7. Memberships as collections */}
      <section className="border-y hairline bg-ivory">
        <div className="container-luxe py-16 text-center sm:py-24">
          <SectionTitle>The memberships</SectionTitle>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft">
            Our members are looked after by a named designer with exacting standards and a certain
            spark. Three levels, each offering its own depth of service, personalisation and
            concierge support.
          </p>
          <div className="mt-12 grid gap-10 sm:grid-cols-3">
            {tiers.map((tier, i) => (
              <div key={tier.id} className="mx-auto max-w-xs">
                <p aria-hidden="true" className="text-sm tracking-[0.3em] text-ink">
                  {diamonds[i]}
                </p>
                <h3 className="mt-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-ink">
                  {tier.name} membership
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{tier.intro}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <ButtonLink href="/membership">Explore the memberships</ButtonLink>
          </div>
        </div>
      </section>

      {/* 8. Business services carousel */}
      <section id="business" className="scroll-mt-20 bg-ivory-deep">
        <div className="container-luxe py-16 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="display text-3xl text-ink sm:text-4xl">Business services</h2>
            <ButtonLink href="/membership#corporate" className="self-start px-5 py-2.5">
              Learn more
            </ButtonLink>
          </div>
          <div className="mt-8">
            <Carousel label="Business services">
              {businessServices.map((service) => (
                <div key={service.title} className="w-[82%] flex-none snap-start sm:w-[46%] lg:w-[31.5%]">
                  <ImageCard {...service} className="h-full" />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* 9. Image + text CTA split */}
      <section className="grid lg:grid-cols-2">
        <JourneyArtwork palette={["#8a5a2b", "#e9d7ab"]} className="min-h-[18rem] lg:min-h-[28rem]" />
        <div className="flex flex-col items-center justify-center bg-ivory-deep px-6 py-16 text-center lg:px-16">
          <SectionTitle>
            Let’s craft your
            <br />
            next journey
          </SectionTitle>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
            From the right house to the most unforgettable day, tell us the vision and we will
            organise the whole of it.
          </p>
          <div className="mt-8 flex w-full max-w-xs flex-col gap-3">
            <WhatsAppButton message="Hello Offness, I’d like to start planning a journey." />
            <ButtonLink href="/request" variant="outline">
              Apply for membership
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* 10. Concierge story + experiences carousel */}
      <section className="container-luxe py-16 text-center sm:py-24">
        <SectionTitle>A concierge like no other</SectionTitle>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-ink-soft">
          With offices in {siteConfig.offices.length} cities and teams who know our destinations
          like the back of their hand, we open doors that no guidebook ever could.
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Our private concierge invites you to travel differently, whether it is managing the
          essentials or designing once-in-a-lifetime experiences. Every moment is tailored to you.
        </p>
        <div className="mt-8">
          <WhatsAppButton message="Hello Offness, I’d like to know more about the concierge.">Ask the concierge</WhatsAppButton>
        </div>
        <div className="mt-12 text-left">
          <Carousel label="Concierge experiences">
            {concierge.map((journey) => (
              <Link
                key={journey.slug}
                href={`/journeys/${journey.slug}`}
                className="group w-[82%] flex-none snap-start sm:w-[46%] lg:w-[31.5%]"
              >
                <JourneyArtwork palette={journey.palette} className="aspect-[4/5] transition-opacity group-hover:opacity-90" />
                <p className="mt-4 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink">{journey.highlights[0]}</p>
                <p className="mt-1 text-sm text-ink-soft">{journey.place}</p>
              </Link>
            ))}
          </Carousel>
        </div>
      </section>

      {/* 11. Destinations grid */}
      <section className="border-t hairline bg-ivory">
        <div className="container-luxe py-16 sm:py-24">
          <SectionTitle className="text-center">Your next destination</SectionTitle>
          <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((destination) => (
              <li key={destination.region}>
                <Link href={`/journeys?region=${destination.region}`} className="group block">
                  <JourneyArtwork palette={destination.palette} className="aspect-[4/3] transition-opacity group-hover:opacity-90" />
                  <h3 className="mt-4 text-[0.78rem] font-medium uppercase tracking-[0.18em] text-ink">
                    {destination.name}
                  </h3>
                  <p className="mt-1 text-xs text-ink-soft">
                    {destination.count} {destination.count === 1 ? "journey" : "journeys"} to design
                  </p>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/journeys"
            className="mt-10 inline-flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink hover:underline hover:underline-offset-4"
          >
            See more destinations <span aria-hidden="true">+</span>
          </Link>
        </div>
      </section>

      {/* 12. Testimonials band */}
      <Testimonials items={testimonials} />

      {/* 13. Press row */}
      <section className="container-luxe py-14 text-center">
        <p className="text-[0.66rem] font-medium uppercase tracking-[0.22em] text-ink">In the press</p>
        <ul className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-5" aria-label="Press logos, to be supplied">
          {[1, 2, 3, 4, 5].map((n) => (
            <li
              key={n}
              className="flex h-12 items-center justify-center border border-dashed hairline text-[0.6rem] uppercase tracking-[0.18em] text-stone"
            >
              Press logo
            </li>
          ))}
        </ul>
      </section>

      {/* 14. App + accolades two-column */}
      <section className="border-t hairline">
        <div className="container-luxe grid gap-12 py-16 md:grid-cols-2 md:divide-x md:divide-line">
          <div className="md:pr-12">
            <h2 className="text-[0.85rem] font-medium uppercase tracking-[0.18em] text-ink">The Offness app</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              There isn’t one. Members use the app they already have. Your designer’s number is
              saved in WhatsApp, your itineraries arrive there as documents, and every change is a
              message, not a login.
            </p>
            <p className="mt-6 inline-block border hairline px-4 py-2 text-[0.66rem] uppercase tracking-[0.18em] text-ink-soft">
              Just WhatsApp
            </p>
          </div>
          <div className="md:pl-12">
            <h2 className="text-[0.85rem] font-medium uppercase tracking-[0.18em] text-ink">Discretion, guaranteed</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
              We do not publish who we work with, and we never will. Every member of the team signs
              the same confidentiality undertaking, and your details are used only to plan your
              travel.
            </p>
          </div>
        </div>
      </section>

      {/* 15. Start the conversation */}
      <section id="enquire" className="scroll-mt-20 border-t hairline bg-gradient-to-b from-ivory-deep to-ivory">
        <div className="container-luxe py-16 text-center sm:py-24">
          <h2 className="display mx-auto max-w-xl text-3xl text-ink sm:text-4xl">
            Start with a message. We’ll take it from there.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-ink-soft">
            Non-members are welcome to write. Tell us what you have in mind and a designer will
            reply personally. If it is a fit, membership follows the first journey.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <WhatsAppButton message="Hello Offness, I’d like to talk about a journey." className="px-8 py-4 text-[0.78rem]" />
            <WhatsAppDetails />
          </div>
          <p className="mt-10 text-xs text-stone">
            Prefer email? Write to{" "}
            <a href={`mailto:${siteConfig.email}`} className="text-ink underline underline-offset-4">
              {siteConfig.email}
            </a>{" "}
            or use the{" "}
            <Link href="/contact" className="text-ink underline underline-offset-4">
              enquiry form
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
