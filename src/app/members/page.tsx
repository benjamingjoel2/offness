import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";
import { WhatsAppButton, WhatsAppDetails } from "@/components/whatsapp";

export const metadata: Metadata = {
  title: "Members",
  robots: { index: false },
};

export default function MembersPage() {
  return (
    <section className="container-luxe flex min-h-[60vh] items-center py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="eyebrow">Members’ area</p>
        <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">Your designer is on WhatsApp</h1>
        <p className="mt-5 text-sm leading-relaxed text-ink-soft">
          There is no portal to log in to. Members message their designer directly, and everything
          about the journey lives in that conversation. If you have lost the number, message the
          concierge line and we will reconnect you.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3">
          <WhatsAppButton message="Hello Offness, I’m a member and would like to reach my designer." />
          <WhatsAppDetails />
        </div>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/request" variant="outline" className="flex-1">
            Not yet a member? Apply
          </ButtonLink>
          <ButtonLink href="/contact" variant="ghost" className="flex-1">
            Contact us
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
