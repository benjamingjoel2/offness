import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "inverse" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-ivory disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-ivory hover:bg-ink-soft",
  inverse: "bg-ivory text-ink hover:bg-ivory-deep",
  outline: "border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  ghost: "text-ink underline-offset-8 hover:underline",
};

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: Variant;
  children: ReactNode;
};

export function ButtonLink({ variant = "primary", className = "", children, ...props }: ButtonLinkProps) {
  return (
    <Link className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & {
  variant?: Variant;
};

export function Button({ variant = "primary", className = "", children, ...props }: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
