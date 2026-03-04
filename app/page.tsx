"use client";

import { useState, useMemo, useEffect } from "react";
import { getEntries, Photo } from "@/lib/entries";
import { Postcard } from "@/components/Postcard";
import { TitleCard } from "@/components/TitleCard";
import { FooterCard } from "@/components/FooterCard";
import { Lightbox } from "@/components/Lightbox";

export default function Home() {
  const entries = getEntries();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.5);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <>
      {/* Fixed frame overlay */}
      <div className="site-frame" />

      {/* Fixed site name — top center, above frame */}
      <p className="fixed top-3 left-0 right-0 text-center text-[13px] tracking-wide z-50" style={{ color: "var(--muted)" }}>
        Jimmy Wingert
      </p>

      <main>
        <TitleCard totalPhotos={allPhotos.length} />

        {allPhotos.map((photo, index) => (
          <Postcard
            key={index}
            photo={photo}
            number={photo.number}
            total={allPhotos.length}
            onPhotoClick={() => setLightboxIndex(index)}
          />
        ))}

        <FooterCard />
      </main>

      {lightboxIndex !== null && (
        <Lightbox
          photos={allPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onChange={setLightboxIndex}
        />
      )}

      {/* Back to top */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition-opacity duration-300 hover:opacity-70"
          style={{ background: "var(--fg)", color: "var(--card-bg)" }}
          aria-label="Scroll to top"
        >
          ↑
        </button>
      )}
    </>
  );
}
