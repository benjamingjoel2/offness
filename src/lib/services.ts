export type Service = {
  title: string;
  body: string;
  href: string;
  palette: [string, string];
};

/** Membership services carousel, mirrored from the home page. */
export const membershipServices: Service[] = [
  {
    title: "Travel",
    body: "Our in-house travel designers build every journey from a blank page, with access to houses, boats and guides that do not take public bookings.",
    href: "/journeys",
    palette: ["#2f4e6f", "#dcc7a3"],
  },
  {
    title: "Restaurants & nightlife",
    body: "Relationships with chefs and owners in fifty cities mean the table exists even when the booking line says otherwise.",
    href: "/#services",
    palette: ["#4b2e2a", "#d8b48f"],
  },
  {
    title: "Exclusive access",
    body: "Private viewings, closed-door events, sold-out performances. If it can be arranged with discretion, we arrange it.",
    href: "/#services",
    palette: ["#1f2a44", "#c9c3b4"],
  },
  {
    title: "Private aviation & yachts",
    body: "One desk for charter, positioning and crew, from a light jet for the weekend to a month on the water.",
    href: "/#services",
    palette: ["#35516b", "#c9d2d6"],
  },
  {
    title: "Villas & residences",
    body: "Houses that are not on any rental market, staffed and stocked before you arrive.",
    href: "/journeys",
    palette: ["#5b5a3c", "#e6dcc3"],
  },
  {
    title: "Wellness",
    body: "Retreats, practitioners and clinics chosen for results rather than reputation, booked around your calendar.",
    href: "/#services",
    palette: ["#4a4e3a", "#e6d8c3"],
  },
  {
    title: "Art & culture",
    body: "Advisers, studio visits and fair access for collectors, and simply good company for the curious.",
    href: "/#services",
    palette: ["#6b4a3a", "#e9d7ab"],
  },
  {
    title: "Celebrations",
    body: "Birthdays, anniversaries and weddings, produced end to end in places that do not usually host them.",
    href: "/#services",
    palette: ["#8a5a2b", "#f0e3c8"],
  },
];

/** Business services carousel. */
export const businessServices: Service[] = [
  {
    title: "Corporate membership",
    body: "Bespoke lifestyle and travel management for leadership teams, run by designated managers who know the business.",
    href: "/membership#corporate",
    palette: ["#16140f", "#8a8272"],
  },
  {
    title: "Brand events & experiences",
    body: "Launches, retreats and hosted trips for high-value audiences, designed to be talked about afterwards.",
    href: "/contact",
    palette: ["#1f6f78", "#d9ecdc"],
  },
  {
    title: "Private events",
    body: "End-to-end planning for dinners, celebrations and gatherings in the farthest-reaching corners of the world.",
    href: "/contact",
    palette: ["#5c6b78", "#eef0ef"],
  },
];
