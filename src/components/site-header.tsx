import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { ButtonLink } from "@/components/ui/button";
import { Wordmark } from "@/components/wordmark";

function Chevron() {
  return (
    <svg aria-hidden="true" viewBox="0 0 12 12" className="h-2.5 w-2.5">
      <path d="M2 4l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b hairline bg-ivory/90 backdrop-blur">
      <div className="container-luxe flex h-16 items-center gap-8 sm:h-[4.5rem]">
        <Wordmark />

        <nav aria-label="Primary" className="hidden flex-1 items-center gap-7 md:flex">
          {siteConfig.nav.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 py-6 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
                  aria-haspopup="true"
                >
                  {item.label}
                  <Chevron />
                </Link>
                <ul className="invisible absolute left-0 top-full z-50 min-w-56 -translate-y-1 border hairline bg-ivory py-3 opacity-0 shadow-xl shadow-ink/10 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        className="block px-5 py-2.5 text-sm text-ink-soft hover:bg-ivory-deep hover:text-ink"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="py-6 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="ml-auto hidden items-center gap-5 md:flex">
          <ButtonLink href="/request" variant="outline" className="px-5 py-2.5">
            Request a call
          </ButtonLink>
          <span aria-hidden="true" className="h-4 w-px bg-ink/30" />
          <Link
            href="/members"
            className="flex items-center gap-2 text-[0.66rem] font-medium uppercase tracking-[0.18em] text-ink-soft hover:text-ink"
          >
            Login
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5">
              <path d="M6 3h6v10H6M2 8h7M7 5.5 9.5 8 7 10.5" fill="none" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </Link>
        </div>

        {/* No-JS friendly mobile menu using a native disclosure. */}
        <details className="group relative ml-auto md:hidden">
          <summary
            className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-ink/30 text-ink [&::-webkit-details-marker]:hidden"
            aria-label="Open menu"
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span className="block h-px w-4 bg-ink" />
              <span className="block h-px w-4 bg-ink" />
            </span>
          </summary>
          <div className="absolute right-0 mt-3 w-72 border hairline bg-ivory p-5 shadow-xl shadow-ink/10">
            <ul className="flex flex-col gap-1">
              {siteConfig.nav.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="block py-2 text-[0.7rem] uppercase tracking-[0.18em] text-ink">
                    {item.label}
                  </Link>
                  {item.children ? (
                    <ul className="mb-2 ml-3 border-l hairline pl-3">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block py-1.5 text-sm text-ink-soft">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col gap-3 border-t hairline pt-4">
              <ButtonLink href="/request" className="w-full">
                Request a call
              </ButtonLink>
              <Link href="/members" className="text-center text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft">
                Login
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
