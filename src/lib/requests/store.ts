import { randomBytes } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { ConciergeRequest } from "./schema";

export type Stored<T> = T & {
  reference: string;
  receivedAt: string;
};

export type StoredRequest = Stored<ConciergeRequest>;

/**
 * A deliberately simple append-only JSON store. It keeps the intake flows
 * working with zero infrastructure; swap it for a database or CRM by
 * replacing `appendRecord` and `listRecords`.
 */
const DATA_DIR = path.join(process.cwd(), "data");

export type StoreName = "requests" | "enquiries";

function storeFile(name: StoreName): string {
  if (name === "requests" && process.env.OFFNESS_REQUESTS_FILE) {
    return process.env.OFFNESS_REQUESTS_FILE;
  }
  if (name === "enquiries" && process.env.OFFNESS_ENQUIRIES_FILE) {
    return process.env.OFFNESS_ENQUIRIES_FILE;
  }
  return path.join(DATA_DIR, `${name}.json`);
}

/** Short, unambiguous reference like OFF-7K3M9Q. No 0/O or 1/I. */
export function makeReference(): string {
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  const bytes = randomBytes(6);
  let out = "";
  for (const byte of bytes) {
    out += alphabet[byte % alphabet.length];
  }
  return `OFF-${out}`;
}

export async function listRecords<T>(name: StoreName): Promise<Stored<T>[]> {
  try {
    const raw = await readFile(/* turbopackIgnore: true */ storeFile(name), "utf8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as Stored<T>[]) : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function appendRecord<T extends object>(name: StoreName, record: T): Promise<Stored<T>> {
  const file = storeFile(name);
  await mkdir(/* turbopackIgnore: true */ path.dirname(file), { recursive: true });
  const existing = await listRecords<T>(name);
  const stored: Stored<T> = {
    ...record,
    reference: makeReference(),
    receivedAt: new Date().toISOString(),
  };
  await writeFile(
    /* turbopackIgnore: true */ file,
    JSON.stringify([...existing, stored], null, 2) + "\n",
    "utf8",
  );
  return stored;
}

export function listRequests(): Promise<StoredRequest[]> {
  return listRecords<ConciergeRequest>("requests");
}

export function saveRequest(request: ConciergeRequest): Promise<StoredRequest> {
  return appendRecord("requests", request);
}
