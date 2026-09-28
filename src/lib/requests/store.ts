import { randomBytes } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { ConciergeRequest } from "./schema";

export type StoredRequest = ConciergeRequest & {
  reference: string;
  receivedAt: string;
};

/**
 * A deliberately simple append-only JSON store. It keeps the intake flow
 * working with zero infrastructure; swap it for a database or CRM by
 * replacing `saveRequest` and `listRequests`.
 */
const DEFAULT_FILE = path.join(process.cwd(), "data", "requests.json");

function storeFile(): string {
  return process.env.OFFNESS_REQUESTS_FILE ?? DEFAULT_FILE;
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

export async function listRequests(): Promise<StoredRequest[]> {
  try {
    const raw = await readFile(/* turbopackIgnore: true */ storeFile(), "utf8");
    const parsed: unknown = JSON.parse(raw);
    return Array.isArray(parsed) ? (parsed as StoredRequest[]) : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function saveRequest(request: ConciergeRequest): Promise<StoredRequest> {
  const file = storeFile();
  await mkdir(/* turbopackIgnore: true */ path.dirname(file), { recursive: true });
  const existing = await listRequests();
  const stored: StoredRequest = {
    ...request,
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
