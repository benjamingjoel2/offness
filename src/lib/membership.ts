export type Tier = {
  id: "atelier" | "house" | "private";
  name: string;
  /** Annual fee in GBP. */
  annualFee: number;
  intro: string;
  includes: string[];
  responseTime: string;
  featured?: boolean;
};

export const tiers: Tier[] = [
  {
    id: "atelier",
    name: "Atelier",
    annualFee: 4500,
    intro: "For two or three considered journeys a year, designed from scratch.",
    includes: [
      "A dedicated travel designer",
      "Up to three bespoke journeys per year",
      "Preferred rates and upgrades at partner houses",
      "Airport meet-and-assist worldwide",
      "Travel support, 7 days a week",
    ],
    responseTime: "Within a business day",
  },
  {
    id: "house",
    name: "House",
    annualFee: 12000,
    intro: "For families and frequent travellers who want everything handled.",
    includes: [
      "Everything in Atelier",
      "Unlimited journeys and short-notice trips",
      "Private aviation and yacht charter desk",
      "Restaurant, gallery and event access",
      "Household travel profiles for family and guests",
      "24-hour concierge line",
    ],
    responseTime: "Within two hours",
    featured: true,
  },
  {
    id: "private",
    name: "Private Office",
    annualFee: 36000,
    intro: "A concierge team embedded with your office, for principals and their families.",
    includes: [
      "Everything in House",
      "Named team of three, on call around the clock",
      "Advance work on residences, security and medical",
      "Fully managed multi-generational travel",
      "Quarterly in-person planning sessions",
    ],
    responseTime: "Immediately",
  },
];
