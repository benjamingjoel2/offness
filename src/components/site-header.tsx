import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Wordmark } from "@/components/wordmark";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-ivory/85 backdrop-blur">
      <div className="container-luxe flex h-16 items-center justify-between gap-6 sm:h-20">
        <Wordmark />

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <ButtonLink href="/request" variant="outline">
            Begin a request
          </ButtonLink>
        </div>

        {/* No-JS friendly mobile menu using a native disclosure. */}
        <details className="group relative md:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-ink/30 text-ink [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-ink" />
              <span className="block h-px w-4 bg-ink" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-64 rounded-2xl border hairline bg-ivory p-4 shadow-xl shadow-ink/10">
            <ul className="flex flex-col">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-2 py-3 text-[0.72rem] uppercase tracking-[0.18em] text-ink-soft hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href="/request" className="mt-3 w-full">
              Begin a request
            </ButtonLink>
          </div>
        </details>
      </div>
    </header>
  );
}
