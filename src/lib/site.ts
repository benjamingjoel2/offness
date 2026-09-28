export type NavLink = { href: string; label: string };
export type NavItem = NavLink & { children?: NavLink[] };

export const siteConfig = {
  name: "Offness",
  tagline: "Luxury travel concierge",
  description:
    "Offness is a private travel concierge. We design and manage journeys end to end, from first idea to the last transfer home, for a small number of members.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://offness.com",
  email: "concierge@offness.com",
  phone: "+44 20 3000 0000",
  hours: "Every day from 07:00 to 22:00 (London time)",
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
    { href: "/#about", label: "About us" },
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
    ],
    contact: [
      { href: "/contact", label: "Send us a message" },
      { href: "/request", label: "Request a call" },
      { href: "/membership#questions", label: "FAQ" },
    ],
    legal: [
      { href: "/contact", label: "Privacy policy" },
      { href: "/contact", label: "Terms of use" },
      { href: "/contact", label: "Cookies" },
    ],
  },
} as const;
