"use client";

import { useActionState, useId } from "react";
import { submitEnquiry } from "@/app/contact/actions";
import { enquirySources, salutations } from "@/lib/enquiries/schema";
import {
  initialEnquiryFormState,
  type EnquiryFormState,
} from "@/lib/enquiries/form-state";
import { Button } from "@/components/ui/button";

const inputClass =
  "peer w-full rounded-none border-0 border-b border-ink/30 bg-transparent px-0 pb-2 pt-5 text-sm text-ink placeholder-transparent focus:border-ink focus:outline-none focus:ring-0 aria-[invalid=true]:border-red-700";

const floatingLabel =
  "pointer-events-none absolute left-0 top-5 text-xs font-medium uppercase tracking-[0.12em] text-ink-soft transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-xs peer-focus:top-0 peer-focus:text-[0.6rem] peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[0.6rem]";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-xs text-red-800">
      {message}
    </p>
  );
}

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState<EnquiryFormState, FormData>(
    submitEnquiry,
    initialEnquiryFormState,
  );
  const id = useId();
  const field = (name: string) => `${id}-${name}`;
  const value = (name: string) => state.values[name] ?? "";
  const errorProps = (name: keyof EnquiryFormState["errors"]) =>
    state.errors[name]
      ? { "aria-invalid": true as const, "aria-describedby": field(`${name}-error`) }
      : {};

  const text = (name: keyof EnquiryFormState["errors"], label: string, extra: Record<string, unknown> = {}) => (
    <div className="relative">
      <input
        id={field(name)}
        name={name}
        type="text"
        placeholder={label}
        defaultValue={value(name)}
        className={inputClass}
        {...extra}
        {...errorProps(name)}
      />
      <label htmlFor={field(name)} className={floatingLabel}>
        {label}
      </label>
      <FieldError id={field(`${name}-error`)} message={state.errors[name]} />
    </div>
  );

  return (
    <form action={formAction} noValidate className="mx-auto max-w-xl space-y-7">
      <div className="hidden" aria-hidden="true">
        <label htmlFor={field("company")}>Company</label>
        <input id={field("company")} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="relative">
        <label htmlFor={field("salutation")} className="block text-[0.6rem] font-medium uppercase tracking-[0.12em] text-ink-soft">
          Salutation
        </label>
        <select
          id={field("salutation")}
          name="salutation"
          defaultValue={value("salutation")}
          className="w-full rounded-none border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-sm text-ink focus:border-ink focus:outline-none focus:ring-0"
        >
          <option value="">Choose</option>
          {salutations.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        {text("firstName", "First name *", { autoComplete: "given-name", required: true })}
        {text("lastName", "Last name *", { autoComplete: "family-name", required: true })}
      </div>

      {text("country", "Country of residence *", { autoComplete: "country-name", required: true })}
      {text("email", "Email address *", { type: "email", autoComplete: "email", required: true })}
      {text("phone", "Phone number *", { type: "tel", autoComplete: "tel", required: true })}

      <div>
        <label htmlFor={field("source")} className="block text-[0.6rem] font-medium uppercase tracking-[0.12em] text-ink-soft">
          How did you hear about us?
        </label>
        <select
          id={field("source")}
          name="source"
          defaultValue={value("source")}
          className="w-full rounded-none border-0 border-b border-ink/30 bg-transparent px-0 py-2 text-sm text-ink focus:border-ink focus:outline-none focus:ring-0"
        >
          <option value="">Choose</option>
          {enquirySources.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="relative">
        <textarea
          id={field("message")}
          name="message"
          rows={3}
          placeholder="Let us know how we can help you... *"
          defaultValue={value("message")}
          className={`${inputClass} resize-y`}
          {...errorProps("message")}
        />
        <label htmlFor={field("message")} className={floatingLabel}>
          Let us know how we can help you... *
        </label>
        <FieldError id={field("message-error")} message={state.errors.message} />
      </div>

      <div className="space-y-3 text-xs text-ink-soft">
        <label className="flex items-start gap-3">
          <input type="checkbox" name="newsletter" defaultChecked={value("newsletter") === "on"} className="mt-0.5 h-4 w-4 rounded-full border-ink/40 accent-ink" />
          <span>I would like to subscribe to the Offness Notebook newsletter</span>
        </label>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="consent" defaultChecked={value("consent") === "on"} className="mt-0.5 h-4 w-4 rounded-full border-ink/40 accent-ink" {...errorProps("consent")} />
          <span>
            I confirm that I have read and agree with the{" "}
            <a href="/contact" className="underline underline-offset-2">Terms &amp; Conditions</a> and{" "}
            <a href="/contact" className="underline underline-offset-2">Privacy Policy</a> *
          </span>
        </label>
        <FieldError id={field("consent-error")} message={state.errors.consent} />
        <p>* Indicates required field</p>
      </div>

      {state.formError ? (
        <p role="alert" className="border-l-2 border-red-700 pl-4 text-sm text-red-800">
          {state.formError}
        </p>
      ) : null}

      <div className="flex justify-center pt-2">
        <Button type="submit" disabled={pending}>
          {pending ? "Sending…" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
