export type NavLink = { href: string; label: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const siteConfig = {
  name: "Offness",
  tagline: "Luxury travel concierge",
  description:
    "Offness is a private travel concierge you simply message. One WhatsApp, any hour, and a designer takes it from there: journeys, access, houses, boats and everything in between.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://offness.com",
  email: "concierge@offness.com",
  phone: "+44 20 3000 0000",
  hours: "24 hours a day, every day",
  /** WhatsApp is the primary channel. Placeholder number: replace before launch. */
  whatsapp: {
    number: "447700900000",
    display: "+44 7700 900000",
    responseTime: "a reply within minutes",
  },
  offices: ["London", "Geneva", "Singapore", "Dubai", "New York"],
  nav: [
    {
      href: "/membership",
      label: "Membership",
      children: [
        { href: "/membership", label: "Private membership" },
        { href: "/membership#corporate", label: "Corporate membership" },
        { href: "/request", label: "Become a member" },
      ],
    },
    {
      href: "/#services",
      label: "What we do",
      children: [
        { href: "/journeys", label: "Journey design" },
        { href: "/#services", label: "Concierge services" },
        { href: "/#business", label: "Business services" },
      ],
    },
    { href: "/journeys", label: "Journeys" },
    { href: "/#how-it-works", label: "How it works" },
    { href: "/contact", label: "Contact" },
  ] as NavItem[],
  footer: {
    destinations: [
      { href: "/journeys?region=Europe", label: "Europe" },
      { href: "/journeys?region=Africa", label: "Africa" },
      { href: "/journeys?region=Asia", label: "Asia" },
      { href: "/journeys?region=Americas", label: "Americas" },
      { href: "/journeys?region=Polar", label: "Polar" },
      { href: "/journeys", label: "View all" },
    ],
    services: [
      { href: "/journeys", label: "Design a journey" },
      { href: "/#services", label: "Concierge services" },
      { href: "/#business", label: "Business services" },
      { href: "/membership", label: "Membership" },
    ],
    members: [
      { href: "/members", label: "Members' area" },
      { href: "/request", label: "Apply to join" },
      { href: "/#how-it-works", label: "How it works" },
    ],
    contact: [
      { href: "https://wa.me/447700900000", label: "Message us on WhatsApp" },
      { href: "/contact", label: "Send an enquiry" },
      { href: "/request", label: "Apply for membership" },
      { href: "/membership#questions", label: "FAQ" },
    ],
    legal: [
      { href: "/contact", label: "Privacy policy" },
      { href: "/contact", label: "Terms of use" },
      { href: "/contact", label: "Cookies" },
    ],
  },
} as const;

/** A wa.me link with an optional pre-filled message. */
export function whatsappLink(message?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
