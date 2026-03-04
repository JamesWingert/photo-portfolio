"use client";

import Image from "next/image";
import { useEffect, useCallback } from "react";
import { Photo } from "@/lib/entries";

interface LightboxProps {
  photos: (Photo & { entryTitle: string; number: number })[];
  currentIndex: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export function Lightbox({ photos, currentIndex, onClose, onChange }: LightboxProps) {
  const photo = photos[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < photos.length - 1;

  const goPrev = useCallback(() => {
    if (hasPrev) onChange(currentIndex - 1);
  }, [hasPrev, currentIndex, onChange]);

  const goNext = useCallback(() => {
    if (hasNext) onChange(currentIndex + 1);
  }, [hasNext, currentIndex, onChange]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goPrev, goNext]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-6 text-white/70 hover:text-white text-[14px] tracking-wide z-10 cursor-pointer transition-colors"
        aria-label="Close lightbox"
      >
        Close
      </button>

      {/* Counter */}
      <p className="absolute top-5 left-6 text-white/50 text-[13px] tracking-wide z-10">
        {currentIndex + 1} / {photos.length}
      </p>

      {/* Photo title */}
      <p className="absolute bottom-5 left-6 text-white/50 text-[13px] z-10">
        {photo.title}
        {photo.location && <span className="ml-3 text-white/30">{photo.location}</span>}
      </p>

      {/* Prev */}
      {hasPrev && (
        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl z-10 cursor-pointer transition-colors px-2 py-8"
          aria-label="Previous photo"
        >
          ‹
        </button>
      )}

      {/* Next */}
      {hasNext && (
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white text-3xl z-10 cursor-pointer transition-colors px-2 py-8"
          aria-label="Next photo"
        >
          ›
        </button>
      )}

      {/* Image */}
      <div className="relative w-[85vw] h-[85vh]">
        <Image
          src={photo.src}
          alt={photo.alt || ""}
          fill
          className="object-contain"
          sizes="85vw"
          quality={90}
          priority
        />
      </div>
    </div>
  );
}
