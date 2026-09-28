import type { ReactNode } from "react";

type Props = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
};

export function SectionHeading({ eyebrow, title, intro, align = "left", as: Tag = "h2" }: Props) {
  const alignment = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignment}`}>
      <p className="eyebrow">{eyebrow}</p>
      <Tag className="display mt-4 text-4xl text-ink sm:text-5xl">{title}</Tag>
      {intro ? <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{intro}</p> : null}
    </div>
  );
}
