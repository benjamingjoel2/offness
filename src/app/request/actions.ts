"use server";

import { redirect } from "next/navigation";
import { formDataToRecord, parseRequest } from "@/lib/requests/schema";
import type { RequestFormState } from "@/lib/requests/form-state";
import { saveRequest } from "@/lib/requests/store";

export async function submitRequest(
  _previous: RequestFormState,
  formData: FormData,
): Promise<RequestFormState> {
  // Honeypot: real users never fill this in.
  if (formData.get("company")) {
    redirect("/request/confirmation");
  }

  const raw = formDataToRecord(formData);
  const values = Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key, String(value)]),
  );

  const parsed = parseRequest(raw);
  if (!parsed.ok) {
    return { errors: parsed.errors, values };
  }

  let reference: string;
  try {
    const stored = await saveRequest(parsed.data);
    reference = stored.reference;
  } catch (error) {
    console.error("Failed to store concierge request", error);
    return {
      errors: {},
      values,
      formError:
        "We could not save your request just now. Please try again, or email concierge@offness.com.",
    };
  }

  redirect(`/request/confirmation?ref=${encodeURIComponent(reference)}`);
}
