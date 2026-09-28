import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { Wordmark } from "@/components/wordmark";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t hairline bg-ivory-deep">
      <div className="container-luxe grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
            {siteConfig.description}
          </p>
        </div>

        <div>
          <p className="eyebrow">Explore</p>
          <ul className="mt-4 space-y-3 text-sm">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-soft hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request" className="text-ink-soft hover:text-ink">
                Begin a request
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="eyebrow">Concierge</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={`mailto:${siteConfig.email}`} className="text-ink-soft hover:text-ink">
                {siteConfig.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                className="text-ink-soft hover:text-ink"
              >
                {siteConfig.phone}
              </a>
            </li>
            <li className="text-ink-soft">London · Geneva · Singapore</li>
          </ul>
        </div>
      </div>
      <div className="border-t hairline">
        <div className="container-luxe flex flex-col gap-2 py-6 text-xs text-stone sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Offness. All journeys arranged privately.</p>
          <p>Members only. By introduction or application.</p>
        </div>
      </div>
    </footer>
  );
}
