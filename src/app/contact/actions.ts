"use server";

import { redirect } from "next/navigation";
import { enquiryFormDataToRecord, parseEnquiry } from "@/lib/enquiries/schema";
import type { EnquiryFormState } from "@/lib/enquiries/form-state";
import { appendRecord } from "@/lib/requests/store";

export async function submitEnquiry(
  _previous: EnquiryFormState,
  formData: FormData,
): Promise<EnquiryFormState> {
  // Honeypot: real users never fill this in.
  if (formData.get("company")) {
    redirect("/request/confirmation");
  }

  const raw = enquiryFormDataToRecord(formData);
  const values = Object.fromEntries(
    Object.entries(raw).map(([key, value]) => [key, String(value)]),
  );

  const parsed = parseEnquiry(raw);
  if (!parsed.ok) {
    return { errors: parsed.errors, values };
  }

  let reference: string;
  try {
    const stored = await appendRecord("enquiries", parsed.data);
    reference = stored.reference;
  } catch (error) {
    console.error("Failed to store enquiry", error);
    return {
      errors: {},
      values,
      formError:
        "We could not save your enquiry just now. Please try again, or email concierge@offness.com.",
    };
  }

  redirect(`/request/confirmation?ref=${encodeURIComponent(reference)}`);
}
