export interface Photo {
  src: string;
  alt?: string;
}

export interface Entry {
  id: string;
  title: string;
  date: string;
  photos: Photo[];
  summary?: string;
  accentColor?: string;
}

// Placeholder entries for initial build
export function getEntries(): Entry[] {
  return [
    // REAL ENTRY - Your Lunar New Year photos (NEEDS YOUR REVIEW)
    {
      id: "entry-1772581115877-0",
      title: "[REVIEW NEEDED] Lunar New Year 2026",
      date: "March 2026",
      photos: [
        { src: "/photos/lunar-new-year-26/DSCF0533-Topaz-Gigapixel-2X.jpg", alt: "Lunar New Year 1" },
        { src: "/photos/lunar-new-year-26/DSCF1134.jpg", alt: "Lunar New Year 2" },
        { src: "/photos/lunar-new-year-26/DSCF1193 2.jpg", alt: "Lunar New Year 3" },
        { src: "/photos/lunar-new-year-26/DSCF1259-Topaz-Gigapixel-2X 2.jpg", alt: "Lunar New Year 4" },
      ],
      summary: "[REVIEW NEEDED - Please provide a description or I'll generate one for your approval]",
      accentColor: "#E8D5C4",
    },
    // Placeholder entries
    {
      id: "entry-1",
      title: "Late afternoon light through apartment windows",
      date: "March 2024",
      photos: [
        { src: "/photos/placeholder-1.svg", alt: "Window light study 1" },
        { src: "/photos/placeholder-2.svg", alt: "Window light study 2" },
        { src: "/photos/placeholder-3.svg", alt: "Window light study 3" },
        { src: "/photos/placeholder-4.svg", alt: "Window light study 4" },
      ],
      summary: "A series exploring how natural light transforms ordinary spaces throughout the day. Shot on Fuji X-M5.",
      accentColor: "#E8D5C4",
    },
    {
      id: "entry-2",
      title: "Chinatown mornings before the crowds",
      date: "February 2024",
      photos: [
        { src: "/photos/placeholder-5.svg", alt: "Chinatown morning 1" },
        { src: "/photos/placeholder-6.svg", alt: "Chinatown morning 2" },
        { src: "/photos/placeholder-7.svg", alt: "Chinatown morning 3" },
        { src: "/photos/placeholder-8.svg", alt: "Chinatown morning 4" },
      ],
      summary: "Quiet moments in Manhattan's Chinatown before the streets fill with activity.",
      accentColor: "#D4C4B0",
    },
  ];
}
