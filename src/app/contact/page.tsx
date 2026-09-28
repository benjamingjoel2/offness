import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the Offness concierge team.",
};

export default function ContactPage() {
  return (
    <section className="container-luxe py-16 sm:py-24">
      <div className="mx-auto max-w-xl text-center">
        <p className="eyebrow">Contact</p>
        <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">Make an enquiry</h1>
        <p className="mt-5 text-sm leading-relaxed text-ink-soft">
          Tell us how we can help. A member of the concierge team replies personally, usually within
          a business day.
        </p>
        <dl className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm">
          <div>
            <dt className="sr-only">Phone</dt>
            <dd>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`} className="text-ink hover:underline">
                {siteConfig.phone}
              </a>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Email</dt>
            <dd>
              <a href={`mailto:${siteConfig.email}`} className="text-ink hover:underline">
                {siteConfig.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Hours</dt>
            <dd className="text-ink-soft">{siteConfig.hours}</dd>
          </div>
        </dl>
      </div>
      <div className="mt-14">
        <EnquiryForm />
      </div>
    </section>
  );
}
