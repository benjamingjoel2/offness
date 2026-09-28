import type { EnquiryFieldErrors } from "./schema";

export type EnquiryFormState = {
  errors: EnquiryFieldErrors;
  formError?: string;
  values: Record<string, string>;
};

export const initialEnquiryFormState: EnquiryFormState = {
  errors: {},
  values: {},
};
