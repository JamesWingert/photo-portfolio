"use client";

import { useState, useMemo } from "react";
import { getEntries, Photo } from "@/lib/entries";
import { Postcard } from "@/components/Postcard";
import { TitleCard } from "@/components/TitleCard";
import { FooterCard } from "@/components/FooterCard";
import { Lightbox } from "@/components/Lightbox";

export default function Home() {
  const entries = getEntries();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Flatten all photos into a single array for postcard navigation
  const allPhotos: (Photo & { entryTitle: string; number: number })[] = useMemo(() => {
    let num = 1;
    return entries.flatMap((entry) =>
      entry.photos.map((photo) => ({
        ...photo,
        entryTitle: entry.title,
        number: num++,
      }))
    );
  }, [entries]);

  return (
    <main>
      {/* Title card */}
      <TitleCard totalPhotos={allPhotos.length} />

      {/* Postcards */}
      {allPhotos.map((photo, index) => (
        <Postcard
          key={index}
          photo={photo}
          number={photo.number}
          total={allPhotos.length}
          onPhotoClick={() => setLightboxIndex(index)}
        />
      ))}

      {/* Footer */}
      <FooterCard />

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={allPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}
    </main>
  );
}
