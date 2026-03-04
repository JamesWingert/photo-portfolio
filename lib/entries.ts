export interface Photo {
  src: string;
  alt?: string;
}

export interface Entry {
  id: string;
  title: string;
  date: string;
  photos: Photo[];
}

export function getEntries(): Entry[] {
  return [
    {
      id: "entry-1772581115877-0",
      title: "Chinatown Celebrates Lunar New Year",
      date: "March 2026",
      photos: [
        { src: "/photos/lunar-new-year-26/DSCF0533-Topaz-Gigapixel-2X.jpg", alt: "Lunar New Year 1" },
        { src: "/photos/lunar-new-year-26/DSCF1134.jpg", alt: "Lunar New Year 2" },
        { src: "/photos/lunar-new-year-26/DSCF1193 2.jpg", alt: "Lunar New Year 3" },
        { src: "/photos/lunar-new-year-26/DSCF1259-Topaz-Gigapixel-2X 2.jpg", alt: "Lunar New Year 4" },
      ],
    },
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
    },
  ];
}
