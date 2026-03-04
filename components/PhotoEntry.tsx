import Image from "next/image";
import { Entry } from "@/lib/entries";

interface PhotoEntryProps {
  entry: Entry;
}

export function PhotoEntry({ entry }: PhotoEntryProps) {
  return (
    <article className="mb-16">
      {/* Title and Date */}
      <div className="px-5 mb-4">
        <h2 className="text-[15px] font-normal text-neutral-800 leading-snug">
          {entry.title}
        </h2>
        <p className="text-[13px] text-neutral-400 leading-snug mt-0.5">
          {entry.date}
        </p>
      </div>

      {/* Photos Grid — 2 columns, tight gap, edge-to-edge with small padding */}
      <div className="px-5">
        <div className="grid grid-cols-2 gap-[6px]">
          {entry.photos.map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden bg-[#e2d5c8]"
            >
              <Image
                src={photo.src}
                alt={photo.alt || entry.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
