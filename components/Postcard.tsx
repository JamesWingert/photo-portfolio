import Image from "next/image";
import { Photo } from "@/lib/entries";
import { getStampForPhoto } from "@/lib/stamps";

interface PostcardProps {
  photo: Photo & { entryTitle: string; number: number };
  number: number;
  total: number;
  onPhotoClick: () => void;
}

export function Postcard({ photo, number, total, onPhotoClick }: PostcardProps) {
  const stamp = getStampForPhoto(photo.stampPool, number);

  return (
    <section className="snap-section" style={{ background: "var(--bg)" }}>
      {/* Desktop: horizontal postcard / Mobile: vertical stack */}
      <div
        className="relative flex flex-col md:flex-row"
        style={{
          background: "var(--card-bg)",
          width: "min(90vw, 1000px)",
          aspectRatio: undefined,
        }}
      >
        {/* Photo */}
        <button
          onClick={onPhotoClick}
          className="relative cursor-zoom-in overflow-hidden group w-full md:w-[55%] aspect-[4/3] md:aspect-[3/2]"
          aria-label={`View ${photo.title || photo.alt} full size`}
        >
          <Image
            src={photo.src}
            alt={photo.alt || ""}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
            sizes="(max-width: 768px) 90vw, 44vw"
            quality={80}
          />
        </button>

        {/* Divider — horizontal on mobile, vertical on desktop */}
        <div className="hidden md:block w-px self-stretch" style={{ background: "#ccc" }} />
        <div className="block md:hidden h-px w-full" style={{ background: "#ccc" }} />

        {/* Rotated metadata — desktop only */}
        <div className="hidden md:block relative" style={{ width: "18px" }}>
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[7px] tracking-[0.12em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            {photo.location} — {photo.date} — Jimmy Wingert
          </span>
        </div>

        {/* Right side / Bottom — postcard details */}
        <div className="flex-1 flex flex-col justify-center items-center relative px-5 py-6 md:px-6 md:py-0">
          {/* Stamp — top right */}
          <div className="absolute top-3 right-3 md:top-4 md:right-4">
            {stamp ? (
              <div
                className="w-10 h-12 md:w-16 md:h-20 overflow-visible relative"
                style={{
                  transform: `rotate(${stamp.rotation}deg) translate(${stamp.offsetX}px, ${stamp.offsetY}px)`,
                }}
              >
                <img
                  src={stamp.src}
                  alt="Postage stamp"
                  className="w-full h-full object-cover"
                  style={{ filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.1))" }}
                />
              </div>
            ) : (
              <div className="w-10 h-12 md:w-11 md:h-13 border" style={{ borderColor: "#bbb" }} />
            )}
          </div>

          {/* Series label — top left */}
          <span
            className="absolute top-3 left-5 md:top-4 md:left-6 text-[7px] tracking-[0.15em] uppercase"
            style={{ color: "#bbb" }}
          >
            {photo.entryTitle}
          </span>

          {/* Centered content block */}
          <div className="w-full max-w-[85%] mt-6 md:mt-0">
            <div className="border-b pb-2 mb-1" style={{ borderColor: "#ccc" }}>
              <span
                className="font-[family-name:var(--font-handwriting)] text-[18px] md:text-[24px] leading-none"
                style={{ color: "var(--fg)" }}
              >
                {photo.location}
              </span>
            </div>
            <div className="border-b pb-2 mb-1" style={{ borderColor: "#ccc" }}>
              <span
                className="font-[family-name:var(--font-handwriting)] text-[14px] md:text-[18px] leading-none"
                style={{ color: "var(--fg)", opacity: 0.55 }}
              >
                {photo.title} — {photo.date}
              </span>
            </div>
            <div className="border-b py-2" style={{ borderColor: "#ccc" }} />
            <div className="border-b py-2" style={{ borderColor: "#ccc" }} />
          </div>

          {/* Mobile metadata — shown below lines */}
          <p
            className="block md:hidden text-[8px] tracking-[0.12em] uppercase mt-3"
            style={{ color: "var(--muted)" }}
          >
            {photo.location} — {photo.date} — Jimmy Wingert
          </p>

          {/* Counter */}
          <p
            className="absolute bottom-3 left-5 md:bottom-4 md:left-6 text-[8px] tracking-wide"
            style={{ color: "#bbb" }}
          >
            {number} / {total}
          </p>
        </div>
      </div>
    </section>
  );
}
