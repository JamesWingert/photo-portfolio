export interface Photo {
  src: string;
  alt?: string;
  title?: string;
  date?: string;
  location?: string;
  description?: string;
  stampPool?: string;
}

export interface Entry {
  id: string;
  title: string;
  date: string;
  photos: Photo[];
  summary?: string;
}

export function getEntries(): Entry[] {
  return [
    {
      id: "manhattan-ny_march-2026_lunar-new-year",
      title: "Chinatown Celebrates Lunar New Year",
      date: "March 2026",
      photos: [
        {
          src: "/photos/manhattan-ny_march-2026_lunar-new-year/dragon-dance.jpg",
          alt: "Dragon Dance — Lunar New Year",
          title: "Dragon Dance",
          date: "March 2026",
          location: "Manhattan, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/manhattan-ny_march-2026_lunar-new-year/gathering.jpg",
          alt: "Gathering — Lunar New Year",
          title: "Gathering",
          date: "March 2026",
          location: "Manhattan, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/manhattan-ny_march-2026_lunar-new-year/lantern-light.jpg",
          alt: "Lantern Light — Lunar New Year",
          title: "Lantern Light",
          date: "March 2026",
          location: "Manhattan, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/manhattan-ny_march-2026_lunar-new-year/red-and-gold.jpg",
          alt: "Red And Gold — Lunar New Year",
          title: "Red And Gold",
          date: "March 2026",
          location: "Manhattan, NY",
          stampPool: "nyc",
        }
      ],
      summary: "Lunar New Year celebrations in Manhattan's Chinatown.",
    }
  ];
}
