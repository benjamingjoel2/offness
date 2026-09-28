import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request received",
  robots: { index: false },
};

const REFERENCE_PATTERN = /^OFF-[A-Z2-9]{6}$/;

export default async function ConfirmationPage(props: PageProps<"/request/confirmation">) {
  const { ref } = await props.searchParams;
  const reference = typeof ref === "string" && REFERENCE_PATTERN.test(ref) ? ref : undefined;

  return (
    <section className="container-luxe flex min-h-[60vh] items-center py-20">
      <div className="max-w-2xl">
        <p className="eyebrow">Received</p>
        <h1 className="display mt-6 text-5xl text-ink sm:text-6xl">Thank you. We have it.</h1>
        <p className="mt-6 text-lg leading-relaxed text-ink-soft">
          A designer will read your request today and reply personally, usually within a business
          day. If it is urgent, call us on{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-ink underline underline-offset-4">
            {siteConfig.phone}
          </a>
          .
        </p>
        {reference ? (
          <dl className="mt-10 inline-block border hairline px-6 py-4">
            <dt className="eyebrow">Your reference</dt>
            <dd className="display mt-1 text-3xl tracking-[0.08em]">{reference}</dd>
          </dl>
        ) : null}
        <div className="mt-12 flex flex-wrap gap-4">
          <ButtonLink href="/journeys" variant="outline">
            Browse journeys
          </ButtonLink>
          <ButtonLink href="/" variant="ghost">
            Back to the start
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
