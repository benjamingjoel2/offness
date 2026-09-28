export type Region =
  | "Europe"
  | "Africa"
  | "Asia"
  | "Americas"
  | "Oceania"
  | "Polar";

export type Journey = {
  slug: string;
  name: string;
  place: string;
  region: Region;
  season: string;
  nights: number;
  /** Indicative starting price per person, in GBP. */
  fromPrice: number;
  summary: string;
  story: string;
  highlights: string[];
  stays: string[];
  /** Two colours used for the card's editorial gradient. */
  palette: [string, string];
};

export const journeys: Journey[] = [
  {
    slug: "amalfi-by-water",
    name: "Amalfi, by water",
    place: "Positano, Ravello & Capri",
    region: "Europe",
    season: "May to early October",
    nights: 7,
    fromPrice: 14800,
    summary:
      "The coast approached the way it was meant to be: from the sea, with a private tender and a captain who knows every cove.",
    story:
      "Most people see the Amalfi coast from a road. We see it from the water. A classic Riva collects you from Naples and the week unfolds between a cliffside villa in Positano, a garden hotel above Ravello and a final two nights on Capri once the day-trippers have gone. Lunches are arranged where there are no menus, and every transfer is by boat.",
    highlights: [
      "Private Riva Aquarama transfers throughout",
      "Lemon-grove lunch on a family terrace above Amalfi",
      "After-hours access to Villa Cimbrone's gardens",
      "Sunset swim at the Faraglioni with a skipper and sommelier",
    ],
    stays: ["Il San Pietro di Positano", "Palazzo Avino, Ravello", "J.K. Place Capri"],
    palette: ["#2f4e6f", "#dcc7a3"],
  },
  {
    slug: "the-quiet-serengeti",
    name: "The quiet Serengeti",
    place: "Northern Tanzania",
    region: "Africa",
    season: "June to October",
    nights: 9,
    fromPrice: 22500,
    summary:
      "A private mobile camp that moves with the migration, so you are the only vehicle on the river crossing.",
    story:
      "The Serengeti is enormous and almost everyone sees the same five percent of it. We run a private mobile camp with a dedicated guide, which moves twice during your stay to follow the herds. Mornings begin before the light. Days end with a fire and a table set on the plain. Two nights in the Ngorongoro highlands round it off before a private charter home.",
    highlights: [
      "Exclusive-use mobile camp with a private guide and chef",
      "Hot-air balloon flight over the Grumeti at dawn",
      "Walking safari with Maasai trackers",
      "Private charter flights between every camp",
    ],
    stays: ["Offness private mobile camp", "Singita Sabora", "The Highlands, Ngorongoro"],
    palette: ["#8a5a2b", "#e9d7ab"],
  },
  {
    slug: "kyoto-in-the-in-between",
    name: "Kyoto, in the in-between",
    place: "Kyoto, Nara & the Kii Peninsula",
    region: "Asia",
    season: "Late November, and mid-April",
    nights: 8,
    fromPrice: 19200,
    summary:
      "The city in the weeks between seasons, when the temples are empty and the craftsmen have time to talk.",
    story:
      "We time this journey for the fortnight when the crowds have left but the gardens are still extraordinary. A machiya townhouse in Gion is home for four nights, with private mornings at temples that do not usually open. Then south by car to a ryokan on the Kii Peninsula and a day walking the Kumano Kodo with a pilgrimage guide.",
    highlights: [
      "Private dawn visit to Saiho-ji moss garden",
      "Tea with a fourth-generation Urasenke master",
      "Knife-making afternoon in the Sakai workshops",
      "Kumano Kodo walk ending at a riverside onsen",
    ],
    stays: ["Private machiya, Gion", "Amanemu, Ise-Shima", "Kawayu Midoriya, Kumano"],
    palette: ["#4a4e3a", "#e6d8c3"],
  },
  {
    slug: "patagonia-end-of-the-map",
    name: "Patagonia, end of the map",
    place: "Torres del Paine & Tierra del Fuego",
    region: "Americas",
    season: "November to March",
    nights: 10,
    fromPrice: 26400,
    summary:
      "Granite towers, a private estancia and a final sail to the Beagle Channel on a chartered expedition yacht.",
    story:
      "The far south of Chile rewards those who give it time. Four nights at a lodge beneath the towers with a private guide, three at a working estancia that hosts one party at a time, then a chartered yacht from Puerto Williams into the Beagle Channel to watch glaciers calve from the deck. Weather leads the itinerary here, and we keep it flexible on purpose.",
    highlights: [
      "Helicopter transfer to the base of the towers",
      "Exclusive-use estancia with gaucho horse riding",
      "Chartered expedition yacht in the Beagle Channel",
      "Glacier kayaking with a naturalist guide",
    ],
    stays: ["Awasi Patagonia", "Estancia Cerro Guido", "Private yacht charter"],
    palette: ["#35516b", "#c9d2d6"],
  },
  {
    slug: "the-long-white-silence",
    name: "The long white silence",
    place: "Svalbard, Norway",
    region: "Polar",
    season: "April, and September",
    nights: 6,
    fromPrice: 31000,
    summary:
      "A private ice-class yacht at the edge of the pack ice, for polar bears, walrus and the kind of quiet that resets a person.",
    story:
      "Svalbard is one of the last places where you can go a week without seeing another boat. We charter a small ice-class vessel with an expedition leader, a chef and a photographer on board, and follow the ice edge wherever the wildlife is. Days are unscripted. Evenings are long. A night in Longyearbyen on either end makes the flights civilised.",
    highlights: [
      "Exclusive charter of a 12-guest ice-class yacht",
      "Zodiac landings led by a polar expedition leader",
      "On-board photographer and printed book afterwards",
      "Dog-sledding on the Longyearbyen glacier",
    ],
    stays: ["Funken Lodge, Longyearbyen", "Private ice-class yacht"],
    palette: ["#5c6b78", "#eef0ef"],
  },
  {
    slug: "great-barrier-under-sail",
    name: "Great Barrier, under sail",
    place: "Whitsundays & Lizard Island",
    region: "Oceania",
    season: "May to September",
    nights: 8,
    fromPrice: 24200,
    summary:
      "A crewed superyacht through the Whitsundays and a private island to finish, with a marine biologist on board throughout.",
    story:
      "The reef is best understood slowly and from the water. A crewed sailing yacht takes you through the Whitsundays with a marine biologist who plans each dive and snorkel around the tides. The final three nights are on Lizard Island, where the reef is a swim from your villa and the research station opens its doors to our guests.",
    highlights: [
      "Crewed sailing yacht with a resident marine biologist",
      "Heart Reef by seaplane, with a landing on the pontoon",
      "Private dinner on Whitehaven Beach",
      "Guided visit to the Lizard Island Research Station",
    ],
    stays: ["Private sailing yacht", "Lizard Island Resort"],
    palette: ["#1f6f78", "#d9ecdc"],
  },
];

export function getJourney(slug: string): Journey | undefined {
  return journeys.find((journey) => journey.slug === slug);
}

export function getRegions(): Region[] {
  return Array.from(new Set(journeys.map((journey) => journey.region)));
}
