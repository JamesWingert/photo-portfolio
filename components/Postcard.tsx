import Image from "next/image";
import { Photo } from "@/lib/entries";

interface PostcardProps {
  photo: Photo & { entryTitle: string; number: number };
  number: number;
  total: number;
  onPhotoClick: () => void;
}

export function Postcard({ photo, number, total, onPhotoClick }: PostcardProps) {
  return (
    <section className="snap-section" style={{ background: "var(--bg)" }}>
      {/* White postcard — bigger, fills more of the viewport */}
      <div
        className="relative flex"
        style={{
          background: "var(--card-bg)",
          width: "min(80vw, 1000px)",
          aspectRatio: "3 / 2",
        }}
      >
        {/* Left side — photo (takes ~55% for more image) */}
        <button
          onClick={onPhotoClick}
          className="relative h-full cursor-zoom-in overflow-hidden group"
          style={{ width: "55%" }}
          aria-label={`View ${photo.title || photo.alt} full size`}
        >
          <Image
            src={photo.src}
            alt={photo.alt || ""}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 80vw, 44vw"
            quality={80}
          />
          {/* Number overlay */}
          <span className="absolute bottom-3 left-4 text-[clamp(2.5rem,5vw,4.5rem)] font-bold leading-none text-blue-800 opacity-80 mix-blend-multiply">
            {number}
          </span>
        </button>

        {/* Vertical divider — right next to the photo */}
        <div className="w-px self-stretch" style={{ background: "#ccc" }} />

        {/* Rotated metadata text — tight to the divider */}
        <div className="relative" style={{ width: "20px" }}>
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[8px] tracking-[0.12em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            {photo.location} — {photo.date} — Jimmy Wingert
          </span>
        </div>

        {/* Right side — postcard details */}
        <div className="flex-1 h-full flex flex-col justify-between p-5">
          {/* Top: "EXAMPLE CONTENT" label + stamp */}
          <div className="flex justify-between items-start">
            <span className="text-[8px] tracking-[0.12em] uppercase" style={{ color: "var(--muted)" }}>
              {photo.entryTitle}
            </span>
            <div className="w-10 h-12 border flex-shrink-0" style={{ borderColor: "#ccc" }} />
          </div>

          {/* Bottom: address lines with handwritten text */}
          <div className="space-y-0">
            {/* Line 1 — handwritten location */}
            <div className="relative py-2 border-b" style={{ borderColor: "#ccc" }}>
              <span className="font-[family-name:var(--font-handwriting)] text-[20px] leading-none" style={{ color: "var(--fg)" }}>
                {photo.location}
              </span>
            </div>
            {/* Line 2 — handwritten title */}
            <div className="relative py-2 border-b" style={{ borderColor: "#ccc" }}>
              <span className="font-[family-name:var(--font-handwriting)] text-[16px] leading-none" style={{ color: "var(--fg)", opacity: 0.6 }}>
                {photo.title} — {photo.date}
              </span>
            </div>
            {/* Line 3 — empty */}
            <div className="py-2 border-b" style={{ borderColor: "#ccc" }} />
            {/* Line 4 — empty */}
            <div className="py-2 border-b" style={{ borderColor: "#ccc" }} />

            <p className="text-[9px] tracking-wide mt-2" style={{ color: "var(--muted)" }}>
              {number} / {total}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
