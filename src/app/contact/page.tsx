import type { Metadata } from "next";
import { EnquiryForm } from "@/components/enquiry-form";
import { siteConfig } from "@/lib/site";
import { WhatsAppButton, WhatsAppDetails } from "@/components/whatsapp";

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
          The quickest way to reach us is WhatsApp, any hour. For anything you would rather put in
          writing, the form below reaches the same team.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <WhatsAppButton message="Hello Offness," />
          <WhatsAppDetails />
        </div>
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
