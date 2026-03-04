interface TitleCardProps {
  totalPhotos: number;
}

export function TitleCard({ totalPhotos }: TitleCardProps) {
  return (
    <section className="snap-section" style={{ background: "var(--bg)" }}>
      <div className="flex flex-col items-center px-8">
        <h1 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[1] tracking-tight uppercase text-center">
          Photography
        </h1>
        <h2 className="text-[clamp(2.5rem,7vw,6rem)] font-black leading-[1] tracking-tight uppercase text-center">
          {totalPhotos} Postcards
        </h2>
        <h3 className="text-[clamp(1.8rem,5vw,4rem)] font-black leading-[1] tracking-tight uppercase text-center mt-1">
          2024–2026
        </h3>

        <div className="w-48 mt-6">
          <hr className="border-t" style={{ borderColor: "var(--border)" }} />
          <p className="text-[11px] tracking-[0.15em] uppercase text-center mt-3" style={{ color: "var(--fg)" }}>
            Jimmy Wingert — New York City
          </p>
        </div>
      </div>
    </section>
  );
}
