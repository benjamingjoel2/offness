export const siteConfig = {
  name: "Offness",
  tagline: "Luxury travel concierge",
  description:
    "Offness is a private travel concierge. We design and manage journeys end to end, from first idea to the last transfer home, for a small number of members.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://offness.com",
  email: "concierge@offness.com",
  phone: "+44 20 3000 0000",
  nav: [
    { href: "/journeys", label: "Journeys" },
    { href: "/membership", label: "Membership" },
    { href: "/#how-it-works", label: "How it works" },
  ],
} as const;
