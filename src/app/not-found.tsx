import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-luxe flex min-h-[60vh] items-center py-20">
      <div className="max-w-xl">
        <p className="eyebrow">Off the map</p>
        <h1 className="display mt-6 text-5xl text-ink sm:text-6xl">This page does not exist.</h1>
        <p className="mt-6 text-lg text-ink-soft">
          Which is, admittedly, the kind of place we like. But not this one.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href="/">Back to the start</ButtonLink>
          <ButtonLink href="/journeys" variant="ghost">
            See journeys
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
