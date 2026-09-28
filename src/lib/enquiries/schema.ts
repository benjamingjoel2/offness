import { z } from "zod";

export const salutations = ["Mr", "Mrs", "Ms", "Dr", "Prefer not to say"] as const;

export const enquirySources = [
  "A member introduced me",
  "Press",
  "Search",
  "Social media",
  "An event",
  "Other",
] as const;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Please keep this under ${max} characters`)
    .optional()
    .transform((value) => (value ? value : undefined));

export const enquirySchema = z.object({
  salutation: optionalText(30),
  firstName: z
    .string({ error: "Please enter your first name" })
    .trim()
    .min(1, "Please enter your first name")
    .max(80, "Please keep this under 80 characters"),
  lastName: z
    .string({ error: "Please enter your last name" })
    .trim()
    .min(1, "Please enter your last name")
    .max(80, "Please keep this under 80 characters"),
  country: z
    .string({ error: "Please tell us your country of residence" })
    .trim()
    .min(2, "Please tell us your country of residence")
    .max(80, "Please keep this under 80 characters"),
  email: z.email({ error: "Please enter a valid email address" }).trim().max(254),
  phone: z
    .string({ error: "Please enter a phone number" })
    .trim()
    .min(6, "Please enter a phone number")
    .max(40, "Please keep this under 40 characters"),
  source: optionalText(60),
  message: z
    .string({ error: "Let us know how we can help" })
    .trim()
    .min(10, "A sentence or two is enough")
    .max(2000, "Please keep this under 2000 characters"),
  newsletter: z
    .string()
    .optional()
    .transform((value) => value === "on" || value === "true"),
  consent: z
    .string()
    .optional()
    .refine((value) => value === "on" || value === "true", {
      message: "Please confirm you have read the terms and privacy policy",
    })
    .transform(() => true as const),
});

export type Enquiry = z.output<typeof enquirySchema>;
export type EnquiryFieldErrors = Partial<Record<keyof Enquiry, string>>;

export function parseEnquiry(
  raw: Record<string, unknown>,
): { ok: true; data: Enquiry } | { ok: false; errors: EnquiryFieldErrors } {
  const result = enquirySchema.safeParse(raw);
  if (result.success) {
    return { ok: true, data: result.data };
  }
  const flat = z.flattenError(result.error);
  const errors: EnquiryFieldErrors = {};
  for (const [field, messages] of Object.entries(flat.fieldErrors)) {
    if (messages && messages.length > 0) {
      errors[field as keyof Enquiry] = messages[0];
    }
  }
  return { ok: false, errors };
}

export function enquiryFormDataToRecord(formData: FormData): Record<string, unknown> {
  const record: Record<string, unknown> = {};
  for (const key of Object.keys(enquirySchema.shape)) {
    const value = formData.get(key);
    if (typeof value === "string") {
      record[key] = value;
    }
  }
  return record;
}
