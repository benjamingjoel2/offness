"use client";

import { useActionState, useId } from "react";
import {
  budgets,
  contactMethods,
  travelStyles,
} from "@/lib/requests/schema";
import { submitRequest } from "@/app/request/actions";
import {
  initialRequestFormState,
  type RequestFormState,
} from "@/lib/requests/form-state";
import { Button } from "@/components/ui/button";

type Props = {
  /** Pre-fills the destination when arriving from a journey page. */
  defaultDestination?: string;
  journeySlug?: string;
};

const inputClass =
  "mt-2 w-full rounded-none border-0 border-b border-ink/30 bg-transparent px-0 py-3 text-base text-ink placeholder:text-stone/70 focus:border-bronze focus:outline-none focus:ring-0 aria-[invalid=true]:border-red-700";

const labelClass = "block text-[0.7rem] uppercase tracking-[0.18em] text-ink-soft";

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-2 text-sm text-red-800">
      {message}
    </p>
  );
}

export function RequestForm({ defaultDestination, journeySlug }: Props) {
  const [state, formAction, pending] = useActionState<RequestFormState, FormData>(
    submitRequest,
    initialRequestFormState,
  );
  const id = useId();
  const field = (name: string) => `${id}-${name}`;
  const value = (name: string, fallback = "") => state.values[name] ?? fallback;
  const errorProps = (name: keyof RequestFormState["errors"]) =>
    state.errors[name]
      ? { "aria-invalid": true as const, "aria-describedby": field(`${name}-error`) }
      : {};

  return (
    <form action={formAction} noValidate className="space-y-10">
      {journeySlug ? <input type="hidden" name="journeySlug" value={journeySlug} /> : null}

      {/* Honeypot for bots; hidden from real users and assistive tech. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor={field("company")}>Company</label>
        <input id={field("company")} name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset className="space-y-8">
        <legend className="eyebrow">About you</legend>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <label htmlFor={field("fullName")} className={labelClass}>
              Full name
            </label>
            <input
              id={field("fullName")}
              name="fullName"
              type="text"
              autoComplete="name"
              required
              defaultValue={value("fullName")}
              className={inputClass}
              {...errorProps("fullName")}
            />
            <FieldError id={field("fullName-error")} message={state.errors.fullName} />
          </div>

          <div>
            <label htmlFor={field("email")} className={labelClass}>
              Email
            </label>
            <input
              id={field("email")}
              name="email"
              type="email"
              autoComplete="email"
              required
              defaultValue={value("email")}
              className={inputClass}
              {...errorProps("email")}
            />
            <FieldError id={field("email-error")} message={state.errors.email} />
          </div>

          <div>
            <label htmlFor={field("phone")} className={labelClass}>
              Phone <span className="normal-case tracking-normal text-stone">(optional)</span>
            </label>
            <input
              id={field("phone")}
              name="phone"
              type="tel"
              autoComplete="tel"
              defaultValue={value("phone")}
              className={inputClass}
              {...errorProps("phone")}
            />
            <FieldError id={field("phone-error")} message={state.errors.phone} />
          </div>

          <div>
            <label htmlFor={field("contactMethod")} className={labelClass}>
              Preferred contact
            </label>
            <select
              id={field("contactMethod")}
              name="contactMethod"
              required
              defaultValue={value("contactMethod", "Email")}
              className={inputClass}
              {...errorProps("contactMethod")}
            >
              {contactMethods.map((method) => (
                <option key={method} value={method}>
                  {method}
                </option>
              ))}
            </select>
            <FieldError id={field("contactMethod-error")} message={state.errors.contactMethod} />
          </div>
        </div>
      </fieldset>

      <fieldset className="space-y-8">
        <legend className="eyebrow">The journey</legend>

        <div className="grid gap-8 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor={field("destination")} className={labelClass}>
              Where, or what, do you have in mind?
            </label>
            <input
              id={field("destination")}
              name="destination"
              type="text"
              required
              placeholder="Kyoto in late autumn, or simply: somewhere warm and quiet"
              defaultValue={value("destination", defaultDestination)}
              className={inputClass}
              {...errorProps("destination")}
            />
            <FieldError id={field("destination-error")} message={state.errors.destination} />
          </div>

          <div>
            <label htmlFor={field("travelStyle")} className={labelClass}>
              Style of travel
            </label>
            <select
              id={field("travelStyle")}
              name="travelStyle"
              required
              defaultValue={value("travelStyle")}
              className={inputClass}
              {...errorProps("travelStyle")}
            >
              <option value="">Choose one</option>
              {travelStyles.map((style) => (
                <option key={style} value={style}>
                  {style}
                </option>
              ))}
            </select>
            <FieldError id={field("travelStyle-error")} message={state.errors.travelStyle} />
          </div>

          <div>
            <label htmlFor={field("travellers")} className={labelClass}>
              Travellers
            </label>
            <input
              id={field("travellers")}
              name="travellers"
              type="number"
              inputMode="numeric"
              min={1}
              max={40}
              required
              defaultValue={value("travellers", "2")}
              className={inputClass}
              {...errorProps("travellers")}
            />
            <FieldError id={field("travellers-error")} message={state.errors.travellers} />
          </div>

          <div>
            <label htmlFor={field("dates")} className={labelClass}>
              Dates <span className="normal-case tracking-normal text-stone">(optional)</span>
            </label>
            <input
              id={field("dates")}
              name="dates"
              type="text"
              placeholder="Two weeks in May, flexible"
              defaultValue={value("dates")}
              className={inputClass}
              {...errorProps("dates")}
            />
            <FieldError id={field("dates-error")} message={state.errors.dates} />
          </div>

          <div>
            <label htmlFor={field("budget")} className={labelClass}>
              Indicative budget, per person
            </label>
            <select
              id={field("budget")}
              name="budget"
              required
              defaultValue={value("budget")}
              className={inputClass}
              {...errorProps("budget")}
            >
              <option value="">Choose a range</option>
              {budgets.map((budget) => (
                <option key={budget} value={budget}>
                  {budget}
                </option>
              ))}
            </select>
            <FieldError id={field("budget-error")} message={state.errors.budget} />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor={field("notes")} className={labelClass}>
              Anything else <span className="normal-case tracking-normal text-stone">(optional)</span>
            </label>
            <textarea
              id={field("notes")}
              name="notes"
              rows={5}
              placeholder="Who is travelling, what you loved last time, what you would rather avoid."
              defaultValue={value("notes")}
              className={`${inputClass} resize-y`}
              {...errorProps("notes")}
            />
            <FieldError id={field("notes-error")} message={state.errors.notes} />
          </div>
        </div>
      </fieldset>

      {state.formError ? (
        <p role="alert" className="border-l-2 border-red-700 pl-4 text-sm text-red-800">
          {state.formError}
        </p>
      ) : null}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-xs leading-relaxed text-stone">
          We reply personally, usually within a business day. Your details are used only to
          plan your journey.
        </p>
        <Button type="submit" disabled={pending}>
          {pending ? "Sending…" : "Send request"}
        </Button>
      </div>
    </form>
  );
}
