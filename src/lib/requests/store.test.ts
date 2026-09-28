import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { listRequests, makeReference, saveRequest } from "./store";
import type { ConciergeRequest } from "./schema";

const sample: ConciergeRequest = {
  fullName: "Ada Lovelace",
  email: "ada@example.com",
  phone: undefined,
  contactMethod: "Email",
  destination: "Svalbard",
  journeySlug: "the-long-white-silence",
  travelStyle: "Wilderness and safari",
  travellers: 2,
  dates: undefined,
  budget: "£30,000 to £60,000",
  notes: undefined,
};

let dir: string;

beforeEach(async () => {
  dir = await mkdtemp(path.join(tmpdir(), "offness-"));
  process.env.OFFNESS_REQUESTS_FILE = path.join(dir, "nested", "requests.json");
});

afterEach(async () => {
  delete process.env.OFFNESS_REQUESTS_FILE;
  await rm(dir, { recursive: true, force: true });
});

describe("makeReference", () => {
  it("produces OFF- plus six unambiguous characters", () => {
    for (let i = 0; i < 50; i += 1) {
      expect(makeReference()).toMatch(/^OFF-[A-HJ-NP-Z2-9]{6}$/);
    }
  });
});

describe("saveRequest / listRequests", () => {
  it("returns an empty list when nothing has been saved", async () => {
    expect(await listRequests()).toEqual([]);
  });

  it("creates the directory and appends requests in order", async () => {
    const first = await saveRequest(sample);
    const second = await saveRequest({ ...sample, fullName: "Grace Hopper" });

    expect(first.reference).not.toBe(second.reference);
    expect(Date.parse(first.receivedAt)).not.toBeNaN();

    const stored = await listRequests();
    expect(stored.map((r) => r.fullName)).toEqual(["Ada Lovelace", "Grace Hopper"]);

    const raw = await readFile(process.env.OFFNESS_REQUESTS_FILE as string, "utf8");
    expect(JSON.parse(raw)).toHaveLength(2);
  });
});
