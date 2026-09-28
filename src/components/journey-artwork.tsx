/**
 * Editorial placeholder artwork. Each journey has a two-colour palette that
 * becomes a soft gradient with a horizon line. Swap for photography by
 * rendering a next/image here instead.
 */
export function JourneyArtwork({
  palette,
  className = "",
}: {
  palette: [string, string];
  className?: string;
}) {
  const [top, bottom] = palette;
  return (
    <div
      aria-hidden="true"
      className={`relative ${className}`}
      style={{
        background: `linear-gradient(180deg, ${top} 0%, ${top} 46%, ${bottom} 100%)`,
      }}
    >
      <div
        className="absolute inset-x-0 top-[46%] h-px opacity-40"
        style={{ background: bottom }}
      />
      <div
        className="absolute inset-0 opacity-[0.12] mix-blend-multiply"
        style={{
          backgroundImage:
            "radial-gradient(circle at 30% 20%, #fff 0, transparent 45%), radial-gradient(circle at 75% 80%, #000 0, transparent 40%)",
        }}
      />
    </div>
  );
}
