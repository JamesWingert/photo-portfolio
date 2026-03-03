import Image from "next/image";
import { Entry } from "@/lib/entries";

interface PhotoEntryProps {
  entry: Entry;
}

export function PhotoEntry({ entry }: PhotoEntryProps) {
  return (
    <article className="px-6 md:px-12">
      {/* Title and Date */}
      <div className="mb-6">
        <h2 className="text-lg font-normal text-gray-900 leading-snug">
          {entry.title}
        </h2>
        <p className="mt-1 text-xs text-gray-400">
          {entry.date}
        </p>
      </div>

      {/* Photos Grid - 2x2 */}
      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {entry.photos.map((photo, index) => (
          <div 
            key={index} 
            className="relative aspect-square overflow-hidden bg-gray-100"
          >
            <Image
              src={photo.src}
              alt={photo.alt || entry.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 400px"
            />
          </div>
        ))}
      </div>

      {/* Summary/Description */}
      {entry.summary && (
        <div className="mt-6 max-w-2xl">
          <p className="text-sm text-gray-600 leading-relaxed">
            {entry.summary}
          </p>
        </div>
      )}

      {/* Color accent */}
      {entry.accentColor && (
        <div 
          className="mt-6 w-12 h-1 rounded-full"
          style={{ backgroundColor: entry.accentColor }}
        />
      )}
    </article>
  );
}
