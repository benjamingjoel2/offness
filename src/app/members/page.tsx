import type { Metadata } from "next";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Members’ area",
  robots: { index: false },
};

export default function MembersPage() {
  return (
    <section className="container-luxe flex min-h-[60vh] items-center py-20">
      <div className="mx-auto max-w-md text-center">
        <p className="eyebrow">Members’ area</p>
        <h1 className="display mt-4 text-4xl text-ink sm:text-5xl">Sign in</h1>
        <p className="mt-5 text-sm leading-relaxed text-ink-soft">
          The members’ area opens with your first confirmed journey. Members receive a personal
          invitation from their designer.
        </p>
        <form className="mt-10 space-y-6 text-left" action="/contact" method="get">
          <div>
            <label htmlFor="member-email" className="block text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink-soft">
              Email address
            </label>
            <input
              id="member-email"
              name="email"
              type="email"
              autoComplete="email"
              className="mt-2 w-full border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-sm text-ink focus:border-ink focus:outline-none"
            />
          </div>
          <div>
            <label htmlFor="member-password" className="block text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink-soft">
              Password
            </label>
            <input
              id="member-password"
              name="password"
              type="password"
              autoComplete="current-password"
              disabled
              className="mt-2 w-full border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-sm text-ink focus:border-ink focus:outline-none disabled:opacity-50"
            />
          </div>
          <p className="text-xs text-stone">Sign-in is not yet open. Use the button below to request access.</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/request" className="flex-1">
              Request access
            </ButtonLink>
            <ButtonLink href="/contact" variant="outline" className="flex-1">
              Contact us
            </ButtonLink>
          </div>
        </form>
      </div>
    </section>
  );
}
