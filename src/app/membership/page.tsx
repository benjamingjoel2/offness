import type { Metadata } from "next";
import { SectionHeading } from "@/components/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { formatGbp } from "@/lib/format";
import { tiers } from "@/lib/membership";

export const metadata: Metadata = {
  title: "Membership",
  description:
    "Three levels of membership, from a dedicated travel designer to a private office embedded with your own.",
};

const questions = [
  {
    q: "Do I need to be a member to make a request?",
    a: "No. Anyone can send us a request. We take on a small number of individual journeys each year for non-members, and many members begin that way.",
  },
  {
    q: "What does the annual fee cover?",
    a: "The time and attention of your designer and the concierge team. The cost of travel itself is passed through at the rate we secure, which is usually better than published rates.",
  },
  {
    q: "How many members do you take?",
    a: "We cap membership so that every designer knows every member personally. There is a waiting list at certain times of year.",
  },
  {
    q: "Can I move between levels?",
    a: "Yes, at any renewal. Most members settle on House within their first year.",
  },
];

export default function MembershipPage() {
  return (
    <>
      <section className="container-luxe border-b hairline py-20">
        <SectionHeading
          as="h1"
          eyebrow="Membership"
          title="Chosen by the way you travel"
          intro="Three levels, each with a named designer. The difference is how much we take off your desk and how fast we move."
        />
      </section>

      <section className="container-luxe py-20">
        <div className="grid gap-px overflow-hidden rounded-sm border hairline bg-line lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`flex flex-col p-8 sm:p-10 ${tier.featured ? "bg-ink text-ivory" : "bg-ivory"}`}
            >
              <p className={`eyebrow ${tier.featured ? "text-bronze-light" : ""}`}>{tier.name}</p>
              <p className="display mt-4 text-4xl">
                {formatGbp(tier.annualFee)}
                <span className={`ml-2 text-base ${tier.featured ? "text-ivory/60" : "text-stone"}`}>
                  a year
                </span>
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${tier.featured ? "text-ivory/80" : "text-ink-soft"}`}>
                {tier.intro}
              </p>
              <ul
                className={`mt-8 flex-1 space-y-3 border-t pt-8 text-sm ${
                  tier.featured ? "border-ivory/20 text-ivory/90" : "hairline text-ink-soft"
                }`}
              >
                {tier.includes.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span aria-hidden="true" className={tier.featured ? "text-bronze-light" : "text-bronze"}>
                      —
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={`mt-8 text-xs ${tier.featured ? "text-ivory/60" : "text-stone"}`}>
                Response: {tier.responseTime}
              </p>
              <ButtonLink
                href="/request"
                variant={tier.featured ? "inverse" : "outline"}
                className="mt-6"
              >
                Apply
              </ButtonLink>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-stone">
          Fees are in pounds sterling, exclusive of VAT where applicable. Membership is by
          application or introduction and is reviewed annually.
        </p>
      </section>

      <section className="border-t hairline bg-ivory-deep">
        <div className="container-luxe grid gap-12 py-20 lg:grid-cols-[1fr_2fr]">
          <SectionHeading eyebrow="Questions" title="Asked often" />
          <dl className="divide-y hairline border-y">
            {questions.map((item) => (
              <div key={item.q} className="grid gap-3 py-6 md:grid-cols-[1fr_1.4fr] md:gap-10">
                <dt className="display text-xl text-ink">{item.q}</dt>
                <dd className="text-sm leading-relaxed text-ink-soft sm:text-base">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
