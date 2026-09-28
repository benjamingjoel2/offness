"use client";

import { useRef, type ReactNode } from "react";

/**
 * A horizontal, scroll-snapping row with arrow buttons. Works without
 * JavaScript as a plain scrolling row; the arrows are progressive.
 */
export function Carousel({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLDivElement>(null);

  const scrollBy = (direction: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const step = first ? first.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={ref}
        role="region"
        aria-label={label}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden items-center pr-2 md:flex">
        <div className="pointer-events-auto flex flex-col gap-2">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-ink shadow-md shadow-ink/10 hover:bg-ivory"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
              <path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory/90 text-ink shadow-md shadow-ink/10 hover:bg-ivory"
          >
            <svg aria-hidden="true" viewBox="0 0 16 16" className="h-4 w-4">
              <path d="m6 3 5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
