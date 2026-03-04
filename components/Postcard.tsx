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
      {/* Site name — top center */}
      <p className="absolute top-6 left-0 right-0 text-center text-[13px] tracking-wide" style={{ color: "var(--muted)" }}>
        Jimmy Wingert
      </p>

      {/* Outer frame with dashed border */}
      <div
        className="relative w-[90vw] max-w-[1100px] aspect-[16/10] border-2 rounded-sm overflow-hidden"
        style={{ borderColor: "var(--border)", background: "var(--bg)" }}
      >
        {/* Inner white postcard */}
        <div
          className="absolute inset-[6%] flex"
          style={{ background: "var(--card-bg)" }}
        >
          {/* Left side — photo */}
          <button
            onClick={onPhotoClick}
            className="relative w-1/2 h-full cursor-zoom-in overflow-hidden group"
            aria-label={`View ${photo.title || photo.alt} full size`}
          >
            <Image
              src={photo.src}
              alt={photo.alt || ""}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 80vw, 40vw"
              quality={80}
            />
            {/* Number overlay */}
            <span className="absolute bottom-4 left-5 text-[clamp(3rem,6vw,5rem)] font-bold leading-none text-blue-800 opacity-80 mix-blend-multiply">
              {number}
            </span>
          </button>

          {/* Vertical divider */}
          <div className="w-px self-stretch my-4" style={{ background: "#ccc" }} />

          {/* Right side — postcard details */}
          <div className="w-1/2 h-full flex flex-col justify-between p-5 relative">
            {/* Stamp area */}
            <div className="flex justify-end">
              <div className="w-12 h-14 border" style={{ borderColor: "#ccc" }} />
            </div>

            {/* Rotated metadata text */}
            <div
              className="absolute left-3 top-1/2 -translate-y-1/2 -rotate-90 origin-center whitespace-nowrap text-[9px] tracking-[0.15em] uppercase"
              style={{ color: "var(--muted)" }}
            >
              {photo.location} — {photo.date} — Jimmy Wingert
            </div>

            {/* Address lines area */}
            <div className="mt-auto space-y-3 pl-8">
              {photo.title && (
                <p className="text-[13px] font-medium" style={{ color: "var(--fg)" }}>
                  {photo.title}
                </p>
              )}
              {photo.description && (
                <p className="text-[11px] leading-relaxed" style={{ color: "var(--muted)" }}>
                  {photo.description}
                </p>
              )}
              <div className="space-y-2 pt-2">
                <hr style={{ borderColor: "#ccc" }} />
                <hr style={{ borderColor: "#ccc" }} />
                <hr style={{ borderColor: "#ccc" }} />
              </div>
              <p className="text-[10px] tracking-wide" style={{ color: "var(--muted)" }}>
                {number} / {total}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
