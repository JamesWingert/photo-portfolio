interface TitleCardProps {
  totalPhotos: number;
}

export function TitleCard({ totalPhotos }: TitleCardProps) {
  return (
    <section className="snap-section" style={{ background: "var(--bg)" }}>
      <div className="text-center px-8">
        <h1 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.95] tracking-tight uppercase">
          Photography
        </h1>
        <h2 className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.95] tracking-tight uppercase">
          {totalPhotos} Postcards
        </h2>
        <h3 className="text-[clamp(2rem,6vw,5.5rem)] font-black leading-[0.95] tracking-tight uppercase mt-2">
          2024–2026
        </h3>

        <div className="mt-10 max-w-md mx-auto">
          <hr className="border-t" style={{ borderColor: "var(--border)" }} />
          <p className="text-[13px] tracking-[0.15em] uppercase text-center mt-4" style={{ color: "var(--fg)" }}>
            Jimmy Wingert — New York City
          </p>
        </div>
      </div>
    </section>
  );
}
