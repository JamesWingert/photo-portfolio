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
      <div
        className="relative flex"
        style={{
          background: "var(--card-bg)",
          width: "min(80vw, 1000px)",
          aspectRatio: "3 / 2",
        }}
      >
        {/* Left side — photo */}
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
        </button>

        {/* Vertical divider */}
        <div className="w-px self-stretch" style={{ background: "#ccc" }} />

        {/* Rotated metadata — tight to divider */}
        <div className="relative" style={{ width: "18px" }}>
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 whitespace-nowrap text-[7px] tracking-[0.12em] uppercase"
            style={{ color: "var(--muted)" }}
          >
            {photo.location} — {photo.date} — Jimmy Wingert
          </span>
        </div>

        {/* Right side — postcard details */}
        <div className="flex-1 h-full flex flex-col justify-center items-center relative px-6">
          {/* Stamp — top right corner */}
          <div className="absolute top-4 right-4">
            {stamp ? (
              <div
                className="w-16 h-20 overflow-visible relative"
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
              <div className="w-11 h-13 border" style={{ borderColor: "#bbb" }} />
            )}
          </div>

          {/* Series label — top left */}
          <span
            className="absolute top-4 left-6 text-[7px] tracking-[0.15em] uppercase"
            style={{ color: "#bbb" }}
          >
            {photo.entryTitle}
          </span>

          {/* Centered content block */}
          <div className="w-full max-w-[85%]">
            {/* Handwritten location */}
            <div className="border-b pb-2 mb-1" style={{ borderColor: "#ccc" }}>
              <span
                className="font-[family-name:var(--font-handwriting)] text-[24px] leading-none"
                style={{ color: "var(--fg)" }}
              >
                {photo.location}
              </span>
            </div>
            {/* Handwritten title + date */}
            <div className="border-b pb-2 mb-1" style={{ borderColor: "#ccc" }}>
              <span
                className="font-[family-name:var(--font-handwriting)] text-[18px] leading-none"
                style={{ color: "var(--fg)", opacity: 0.55 }}
              >
                {photo.title} — {photo.date}
              </span>
            </div>
            {/* Empty lines */}
            <div className="border-b py-2" style={{ borderColor: "#ccc" }} />
            <div className="border-b py-2" style={{ borderColor: "#ccc" }} />
          </div>

          {/* Counter — bottom */}
          <p
            className="absolute bottom-4 left-6 text-[8px] tracking-wide"
            style={{ color: "#bbb" }}
          >
            {number} / {total}
          </p>
        </div>
      </div>
    </section>
  );
}
