import Link from "next/link";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Offness home"
      className={`display text-2xl tracking-[0.08em] text-ink ${className}`}
    >
      OFFNESS
    </Link>
  );
}
