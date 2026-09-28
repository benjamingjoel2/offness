import { NextResponse } from "next/server";
import { parseRequest } from "@/lib/requests/schema";
import { saveRequest } from "@/lib/requests/store";

/**
 * JSON intake endpoint, for partners and future native apps.
 * Mirrors the validation of the web form exactly.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Body must be JSON" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null || Array.isArray(body)) {
    return NextResponse.json({ error: "Body must be a JSON object" }, { status: 400 });
  }

  const parsed = parseRequest(body as Record<string, unknown>);
  if (!parsed.ok) {
    return NextResponse.json({ errors: parsed.errors }, { status: 422 });
  }

  const stored = await saveRequest(parsed.data);
  return NextResponse.json(
    { reference: stored.reference, receivedAt: stored.receivedAt },
    { status: 201 },
  );
}
