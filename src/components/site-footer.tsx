import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";

function Column({ title, links }: { title: string; links: readonly { href: string; label: string }[] }) {
  return (
    <div>
      <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink">{title}</p>
      <ul className="mt-5 space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            {link.href.startsWith("http") ? (
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-ink-soft hover:text-ink">
                {link.label}
              </a>
            ) : (
              <Link href={link.href} className="text-ink-soft hover:text-ink">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { footer } = siteConfig;
  return (
    <footer className="border-t hairline bg-ivory">
      <div className="container-luxe grid gap-14 py-16 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
        <div>
          <p className="text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink">Be in the know</p>
          <form className="mt-5 flex" action="/contact" method="get">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              name="email"
              type="email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 border hairline bg-ivory px-4 py-3 text-sm text-ink placeholder:text-stone focus:border-ink focus:outline-none"
            />
            <button
              type="submit"
              className="bg-ink px-5 py-3 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ivory hover:bg-ink-soft"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-4 max-w-xs text-xs leading-relaxed text-ink-soft">
            Subscribe to the Notebook: travel inspiration, extraordinary houses and journeys worth
            planning a year ahead.
          </p>
          <p className="mt-2 text-xs text-stone">
            By subscribing, you accept our{" "}
            <Link href="/contact" className="underline underline-offset-2">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <Column title="Destinations" links={footer.destinations} />
        <Column title="Services" links={footer.services} />
        <Column title="Members" links={footer.members} />
        <Column title="Contact us" links={footer.contact} />
      </div>

      <div className="border-t hairline">
        <div className="container-luxe flex flex-col gap-4 py-6 text-[0.65rem] text-stone sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Wordmark className="text-base" />
            <span>© {year} All rights reserved</span>
            {footer.legal.map((link) => (
              <Link key={link.label} href={link.href} className="hover:text-ink">
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <span>{siteConfig.offices.join(" · ")}</span>
            <span aria-hidden="true">|</span>
            <span>EN · £</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
