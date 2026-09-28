import { journeys, type Region } from "./journeys";

export type Destination = {
  region: Region;
  name: string;
  count: number;
  palette: [string, string];
};

const regionMeta: Record<Region, { name: string; palette: [string, string] }> = {
  Europe: { name: "The Mediterranean", palette: ["#2f4e6f", "#dcc7a3"] },
  Africa: { name: "East Africa", palette: ["#8a5a2b", "#e9d7ab"] },
  Asia: { name: "Japan", palette: ["#4a4e3a", "#e6d8c3"] },
  Americas: { name: "Patagonia", palette: ["#35516b", "#c9d2d6"] },
  Polar: { name: "The Arctic", palette: ["#5c6b78", "#eef0ef"] },
  Oceania: { name: "The Great Barrier Reef", palette: ["#1f6f78", "#d9ecdc"] },
};

export function getDestinations(): Destination[] {
  const counts = new Map<Region, number>();
  for (const journey of journeys) {
    counts.set(journey.region, (counts.get(journey.region) ?? 0) + 1);
  }
  return (Object.keys(regionMeta) as Region[]).map((region) => ({
    region,
    name: regionMeta[region].name,
    count: counts.get(region) ?? 0,
    palette: regionMeta[region].palette,
  }));
}
