interface TitleCardProps {
  totalPhotos: number;
}

export function TitleCard({ totalPhotos }: TitleCardProps) {
  return (
    <section className="snap-section" style={{ background: "var(--bg)" }}>
      {/* Site name — top center */}
      <p className="absolute top-6 left-0 right-0 text-center text-[13px] tracking-wide" style={{ color: "var(--muted)" }}>
        Jimmy Wingert
      </p>

      {/* Main content — centered postcard-style frame */}
      <div
        className="relative w-[90vw] max-w-[1100px] aspect-[16/10] flex flex-col items-center justify-center border-2 rounded-sm"
        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      >
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
        </div>

        <div className="absolute bottom-8 left-0 right-0 px-12">
          <hr className="border-t" style={{ borderColor: "var(--border)" }} />
          <p className="text-[13px] tracking-[0.15em] uppercase text-center mt-4" style={{ color: "var(--fg)" }}>
            Jimmy Wingert — New York City
          </p>
        </div>
      </div>
    </section>
  );
}
