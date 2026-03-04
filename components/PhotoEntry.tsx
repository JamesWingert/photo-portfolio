"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Entry } from "@/lib/entries";

interface PhotoEntryProps {
  entry: Entry;
}

export function PhotoEntry({ entry }: PhotoEntryProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className="border-t border-neutral-200"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Entry header row */}
      <div className="grid grid-cols-3 px-5 py-2 text-[13px] text-neutral-500">
        <span>{entry.date}</span>
        <span></span>
        <span>{entry.title}</span>
      </div>

      {/* Main content: 2x2 photo grid (left 2/3) + text panel (right 1/3) */}
      <div className="grid grid-cols-[2fr_1fr] gap-[6px] px-5 pb-10">
        {/* 2x2 photo grid */}
        <div className="grid grid-cols-2 gap-[6px]">
          {entry.photos.slice(0, 4).map((photo, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden bg-[#e8e4e0]"
            >
              <Image
                src={photo.src}
                alt={photo.alt || entry.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
                quality={75}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Text panel */}
        <div className="flex flex-col justify-start pt-2">
          <h2 className="text-[40px] font-normal leading-[1.1] text-neutral-900 mb-4">
            {entry.shortTitle || entry.title.split(" ").slice(0, 3).join(" ")}
          </h2>

          {entry.summary && (
            <p className="text-[12.5px] leading-[1.55] text-neutral-700 mb-5">
              {entry.summary}
            </p>
          )}

          {entry.tags && entry.tags.length > 0 && (
            <ol className="list-decimal list-inside text-[12px] leading-[1.7] text-neutral-600 italic">
              {entry.tags.map((tag, i) => (
                <li key={i}>{tag}</li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </article>
  );
}
