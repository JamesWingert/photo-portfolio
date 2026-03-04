import { getEntries } from "@/lib/entries";

export function FooterCard() {
  const entries = getEntries();

  return (
    <section className="snap-section" style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-[900px] px-10 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
          <div className="space-y-3 md:text-right">
            <p className="text-[12px] font-medium uppercase tracking-wide">Series</p>
            <div className="text-[12px] leading-relaxed italic space-y-1" style={{ color: "var(--muted)" }}>
              {entries.map((entry, i) => (
                <div key={entry.id} className={i > 0 ? "pt-2" : ""}>
                  <p>{entry.title}</p>
                  <p>{entry.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p
          className="text-center text-[13px] tracking-wide mt-12 cursor-pointer hover:opacity-70 transition-opacity"
          style={{ color: "var(--muted)" }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Top ↑
        </p>
      </div>
    </section>
  );
}
