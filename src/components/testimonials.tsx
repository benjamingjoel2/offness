"use client";

import { useState } from "react";
import type { Testimonial } from "@/lib/testimonials";

export function Testimonials({ items }: { items: Testimonial[] }) {
  const [index, setIndex] = useState(0);
  const current = items[index];

  return (
    <section aria-label="What our members say" className="bg-ink text-ivory">
      <div className="container-luxe py-20 text-center sm:py-24">
        <h2 className="display text-3xl sm:text-4xl">Here’s what our members have to say</h2>
        <figure className="mx-auto mt-6 max-w-2xl">
          <blockquote className="text-sm leading-relaxed text-ivory/85 sm:text-base" aria-live="polite">
            ‘{current.quote}’
          </blockquote>
          <figcaption className="mt-4 text-[0.66rem] uppercase tracking-[0.18em] text-bronze-light">
            {current.attribution}
          </figcaption>
        </figure>
        <div className="mt-10 flex items-center justify-center gap-3" role="tablist" aria-label="Choose a testimonial">
          {items.map((item, i) => (
            <button
              key={item.attribution}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full border border-ivory/70 transition-colors ${
                i === index ? "bg-ivory" : "bg-transparent hover:bg-ivory/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
