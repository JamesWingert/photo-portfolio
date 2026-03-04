export interface Photo {
  src: string;
  alt?: string;
  title?: string;
  date?: string;
  location?: string;
  description?: string;
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
      id: "lunar-new-year-26",
      title: "Chinatown Celebrates Lunar New Year",
      date: "March 2026",
      photos: [
        {
          src: "/photos/lunar-new-year-26/DSCF0533.jpg",
          alt: "Lunar New Year celebration in Chinatown",
          title: "Dragon Dance",
          date: "March 2026",
          location: "Manhattan, NY",
          description: "Dragon dance procession through Mott Street during Lunar New Year celebrations.",
        },
        {
          src: "/photos/lunar-new-year-26/DSCF1134-web.jpg",
          alt: "Lunar New Year lanterns",
          title: "Lantern Light",
          date: "March 2026",
          location: "Manhattan, NY",
          description: "Paper lanterns strung across the narrow streets of Chinatown.",
        },
        {
          src: "/photos/lunar-new-year-26/DSCF1193.jpg",
          alt: "Lunar New Year crowd",
          title: "Gathering",
          date: "March 2026",
          location: "Manhattan, NY",
          description: "Community gathering on Canal Street for the new year festivities.",
        },
        {
          src: "/photos/lunar-new-year-26/DSCF1259.jpg",
          alt: "Lunar New Year decorations",
          title: "Red & Gold",
          date: "March 2026",
          location: "Manhattan, NY",
          description: "Traditional red and gold decorations adorning storefronts.",
        },
      ],
      summary: "Lunar New Year celebrations in Manhattan's Chinatown.",
    },
    {
      id: "afternoon-light",
      title: "Late afternoon light through apartment windows",
      date: "March 2024",
      photos: [
        {
          src: "/photos/placeholder-1.svg",
          alt: "Window light study 1",
          title: "Golden Hour I",
          date: "March 2024",
          location: "Brooklyn, NY",
        },
        {
          src: "/photos/placeholder-2.svg",
          alt: "Window light study 2",
          title: "Golden Hour II",
          date: "March 2024",
          location: "Brooklyn, NY",
        },
        {
          src: "/photos/placeholder-3.svg",
          alt: "Window light study 3",
          title: "Golden Hour III",
          date: "March 2024",
          location: "Brooklyn, NY",
        },
        {
          src: "/photos/placeholder-4.svg",
          alt: "Window light study 4",
          title: "Golden Hour IV",
          date: "March 2024",
          location: "Brooklyn, NY",
        },
      ],
      summary: "A series exploring how natural light transforms ordinary spaces.",
    },
    {
      id: "chinatown-mornings",
      title: "Chinatown mornings before the crowds",
      date: "February 2024",
      photos: [
        {
          src: "/photos/placeholder-5.svg",
          alt: "Chinatown morning 1",
          title: "Early Light",
          date: "February 2024",
          location: "Manhattan, NY",
        },
        {
          src: "/photos/placeholder-6.svg",
          alt: "Chinatown morning 2",
          title: "Empty Streets",
          date: "February 2024",
          location: "Manhattan, NY",
        },
        {
          src: "/photos/placeholder-7.svg",
          alt: "Chinatown morning 3",
          title: "First Open",
          date: "February 2024",
          location: "Manhattan, NY",
        },
        {
          src: "/photos/placeholder-8.svg",
          alt: "Chinatown morning 4",
          title: "Morning Prep",
          date: "February 2024",
          location: "Manhattan, NY",
        },
      ],
      summary: "Quiet moments in Manhattan's Chinatown before the streets fill.",
    },
  ];
}
