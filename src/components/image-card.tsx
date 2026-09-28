import Link from "next/link";
import { JourneyArtwork } from "@/components/journey-artwork";
import { ButtonLink } from "@/components/ui/button";

type Props = {
  title: string;
  body: string;
  href: string;
  palette: [string, string];
  cta?: string;
  className?: string;
};

/** Image-led card: artwork on top, white body, serif title, pill CTA. */
export function ImageCard({ title, body, href, palette, cta = "Learn more", className = "" }: Props) {
  return (
    <article className={`flex flex-col bg-white shadow-sm shadow-ink/5 ${className}`}>
      <Link href={href} aria-label={title} className="block">
        <JourneyArtwork palette={palette} className="aspect-[4/3]" />
      </Link>
      <div className="flex flex-1 flex-col p-7">
        <h3 className="display text-2xl text-ink sm:text-3xl">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{body}</p>
        <div className="mt-6">
          <ButtonLink href={href} className="px-5 py-2.5">
            {cta}
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
