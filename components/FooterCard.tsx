export function FooterCard() {
  return (
    <section className="snap-section" style={{ background: "var(--bg)" }}>
      {/* Site name — top center */}
      <p className="absolute top-6 left-0 right-0 text-center text-[13px] tracking-wide" style={{ color: "var(--muted)" }}>
        Jimmy Wingert
      </p>

      {/* Outer frame */}
      <div
        className="relative w-[90vw] max-w-[1100px] aspect-[16/10] border-2 rounded-sm flex items-center"
        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      >
        <div className="grid grid-cols-3 gap-8 w-full px-[8%] py-12">
          {/* Column 1 — Info */}
          <div className="space-y-4">
            <p className="text-[14px] font-medium tracking-wide uppercase">Jimmy Wingert</p>
            <div className="text-[12px] leading-relaxed space-y-1" style={{ color: "var(--muted)" }}>
              <p>Photographer</p>
              <p>New York City</p>
            </div>
            <div className="text-[12px] leading-relaxed space-y-1 pt-2" style={{ color: "var(--muted)" }}>
              <p>
                <a href="mailto:[email]" className="underline underline-offset-2 hover:text-[var(--fg)] transition-colors">
                  Email
                </a>
              </p>
              <p>
                <a href="https://instagram.com" className="underline underline-offset-2 hover:text-[var(--fg)] transition-colors">
                  Instagram
                </a>
              </p>
            </div>
          </div>

          {/* Column 2 — About */}
          <div className="space-y-3">
            <p className="text-[12px] font-medium uppercase tracking-wide">About</p>
            <p className="text-[12px] leading-relaxed" style={{ color: "var(--muted)" }}>
              Street and documentary photography focused on community, light, and the quiet moments between.
              Based in New York City. Shooting on Fuji X-M5.
            </p>
          </div>

          {/* Column 3 — Series */}
          <div className="space-y-3 text-right">
            <p className="text-[12px] font-medium uppercase tracking-wide">Series</p>
            <div className="text-[12px] leading-relaxed italic space-y-1" style={{ color: "var(--muted)" }}>
              <p>Chinatown Celebrates Lunar New Year</p>
              <p>2026</p>
              <p className="pt-2">Late Afternoon Light</p>
              <p>2024</p>
              <p className="pt-2">Chinatown Mornings</p>
              <p>2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom link */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute bottom-6 left-0 right-0 text-center text-[13px] tracking-wide cursor-pointer hover:opacity-70 transition-opacity"
        style={{ color: "var(--muted)" }}
      >
        Top ↑
      </button>
    </section>
  );
}
