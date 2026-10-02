import { siteConfig, whatsappLink } from "@/lib/site";

export function WhatsAppIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 1 1-4.2 15.3l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 0 1 12 3.8Zm-3.3 4.4c-.2 0-.5 0-.7.3-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.7.5 0 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4l-.6-.3-2-1c-.3-.1-.5-.1-.7.1l-.9 1.1c-.2.2-.3.2-.6.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6Z" />
    </svg>
  );
}

type Props = {
  message?: string;
  children?: React.ReactNode;
  variant?: "primary" | "inverse" | "outline";
  className?: string;
};

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-[0.72rem] font-medium uppercase tracking-[0.18em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-ivory";

const variants = {
  primary: "bg-ink text-ivory hover:bg-ink-soft",
  inverse: "bg-ivory text-ink hover:bg-ivory-deep",
  outline: "border border-ink/40 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
};

/** The primary call to action everywhere: open a WhatsApp conversation. */
export function WhatsAppButton({ message, children = "Message us on WhatsApp", variant = "primary", className = "" }: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
    >
      <WhatsAppIcon />
      {children}
    </a>
  );
}

/** Persistent floating button, bottom right, on every page. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Hello Offness,")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Message Offness on WhatsApp, ${siteConfig.whatsapp.display}`}
      className="fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full bg-ink py-3 pl-4 pr-5 text-ivory shadow-xl shadow-ink/25 transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze sm:bottom-7 sm:right-7"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="text-[0.66rem] font-medium uppercase tracking-[0.18em]">Message us</span>
    </a>
  );
}

/** A quiet line of contact details to sit under a WhatsApp button. */
export function WhatsAppDetails({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs text-stone ${className}`}>
      {siteConfig.whatsapp.display} · {siteConfig.hours} · {siteConfig.whatsapp.responseTime}
    </p>
  );
}
