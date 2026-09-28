import type { FieldErrors } from "./schema";

export type RequestFormState = {
  errors: FieldErrors;
  formError?: string;
  values: Record<string, string>;
};

export const initialRequestFormState: RequestFormState = {
  errors: {},
  values: {},
};
