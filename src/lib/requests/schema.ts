import { z } from "zod";

export const travelStyles = [
  "Sea and coast",
  "Wilderness and safari",
  "Cities and culture",
  "Mountains and snow",
  "Wellness and retreat",
  "Family",
] as const;

export const budgets = [
  "Under £15,000",
  "£15,000 to £30,000",
  "£30,000 to £60,000",
  "£60,000 to £120,000",
  "Above £120,000",
] as const;

export const contactMethods = ["Email", "Phone", "WhatsApp"] as const;

const optionalText = (max: number) =>
  z
    .string()
    .trim()
    .max(max, `Please keep this under ${max} characters`)
    .optional()
    .transform((value) => (value ? value : undefined));

export const requestSchema = z.object({
  fullName: z
    .string({ error: "Please tell us your name" })
    .trim()
    .min(2, "Please tell us your name")
    .max(120, "Please keep your name under 120 characters"),
  email: z.email({ error: "Please enter a valid email address" }).trim().max(254),
  phone: optionalText(40),
  contactMethod: z.enum(contactMethods, {
    error: "Please choose how you would like to be contacted",
  }),
  destination: z
    .string({ error: "Tell us where you have in mind, or that you are open to ideas" })
    .trim()
    .min(2, "Tell us where you have in mind, or that you are open to ideas")
    .max(200, "Please keep this under 200 characters"),
  journeySlug: optionalText(80),
  travelStyle: z.enum(travelStyles, {
    error: "Please choose the style that fits best",
  }),
  travellers: z.coerce
    .number({ error: "How many people are travelling?" })
    .int("Please enter a whole number")
    .min(1, "At least one traveller")
    .max(40, "For groups over 40, please call us"),
  dates: optionalText(120),
  budget: z.enum(budgets, { error: "Please give us an indicative budget" }),
  notes: optionalText(2000),
});

export type RequestInput = z.input<typeof requestSchema>;
export type ConciergeRequest = z.output<typeof requestSchema>;

export type FieldErrors = Partial<Record<keyof ConciergeRequest, string>>;

/**
 * Validates raw form data. Returns either the parsed request or the first
 * error message per field, ready to render next to the inputs.
 */
export function parseRequest(
  raw: Record<string, unknown>,
): { ok: true; data: ConciergeRequest } | { ok: false; errors: FieldErrors } {
  const result = requestSchema.safeParse(raw);
  if (result.success) {
    return { ok: true, data: result.data };
  }
  const flat = z.flattenError(result.error);
  const errors: FieldErrors = {};
  for (const [field, messages] of Object.entries(flat.fieldErrors)) {
    if (messages && messages.length > 0) {
      errors[field as keyof ConciergeRequest] = messages[0];
    }
  }
  return { ok: false, errors };
}

/** Pulls the fields we care about out of FormData, ignoring React's $ACTION_ keys. */
export function formDataToRecord(formData: FormData): Record<string, unknown> {
  const record: Record<string, unknown> = {};
  for (const key of Object.keys(requestSchema.shape)) {
    const value = formData.get(key);
    if (typeof value === "string") {
      record[key] = value;
    }
  }
  return record;
}
