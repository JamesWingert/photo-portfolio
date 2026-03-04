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
          src: "/photos/manhattan-ny_march-2026_lunar-new-year/face-off.jpg",
          alt: "Face Off — Lunar New Year",
          title: "Face Off",
          date: "March 2026",
          location: "Manhattan, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/manhattan-ny_march-2026_lunar-new-year/ferocity.jpg",
          alt: "Ferocity — Lunar New Year",
          title: "Ferocity",
          date: "March 2026",
          location: "Manhattan, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/manhattan-ny_march-2026_lunar-new-year/sparkle-of-life.jpg",
          alt: "Sparkle Of Life — Lunar New Year",
          title: "Sparkle Of Life",
          date: "March 2026",
          location: "Manhattan, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/manhattan-ny_march-2026_lunar-new-year/taking-it-in.jpg",
          alt: "Taking It In — Lunar New Year",
          title: "Taking It In",
          date: "March 2026",
          location: "Manhattan, NY",
          stampPool: "nyc",
        }
      ],
      summary: "Lunar New Year celebrations in Manhattan's Chinatown.",
    },
    {
      id: "manhattan-ny_august-2025_central-park-in-the-summer",
      title: "Central Park In The Summer",
      date: "August 2025",
      photos: [
        {
          src: "/photos/manhattan-ny_august-2025_central-park-in-the-summer/castle-in-the-sky.jpg",
          alt: "Castle In The Sky — Central Park In The Summer",
          title: "Castle In The Sky",
          date: "August 2025",
          location: "Manhattan, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/manhattan-ny_august-2025_central-park-in-the-summer/contemplative.jpg",
          alt: "Contemplative — Central Park In The Summer",
          title: "Contemplative",
          date: "August 2025",
          location: "Manhattan, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/manhattan-ny_august-2025_central-park-in-the-summer/jazz-jammin.jpg",
          alt: "Jazz Jammin — Central Park In The Summer",
          title: "Jazz Jammin",
          date: "August 2025",
          location: "Manhattan, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/manhattan-ny_august-2025_central-park-in-the-summer/sole-performer.jpg",
          alt: "Sole Performer — Central Park In The Summer",
          title: "Sole Performer",
          date: "August 2025",
          location: "Manhattan, NY",
          stampPool: "nyc",
        }
      ],
      summary: "Central Park In The Summer — Manhattan, NY.",
    },
    {
      id: "brooklyn-ny_july-2025_brooklyn_bound",
      title: "Brooklyn Bound",
      date: "July 2025",
      photos: [
        {
          src: "/photos/brooklyn-ny_july-2025_brooklyn_bound/arrival.jpg",
          alt: "Arrival — Brooklyn Bound",
          title: "Arrival",
          date: "July 2025",
          location: "Brooklyn, NY",
          stampPool: "nyc",
        },
        {
          src: "/photos/brooklyn-ny_july-2025_brooklyn_bound/the-wanderer.jpg",
          alt: "The Wanderer — Brooklyn Bound",
          title: "The Wanderer",
          date: "July 2025",
          location: "Brooklyn, NY",
          stampPool: "nyc",
        }
      ],
      summary: "Brooklyn Bound — Brooklyn, NY.",
    }
  ];
}
