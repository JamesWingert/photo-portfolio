const fs = require('fs');
const path = require('path');

const PHOTOS_DIR = path.join(__dirname, '../public/photos');
const ENTRIES_FILE = path.join(__dirname, '../lib/entries.ts');

// Folder naming convention:
//   public/photos/{location}_{date}_{series-title}/
//   e.g. manhattan-ny_march-2026_lunar-new-year
//
// Photo naming convention:
//   {descriptive-title}.jpg  →  title-cased for display
//   e.g. dragon-dance.jpg  →  "Dragon Dance"
//
// Optional: drop a meta.json in the folder to override stampPool or description
//   { "stampPool": "nyc", "description": "..." }

const IMAGE_EXT = /\.(jpg|jpeg|png|webp)$/i;

function titleCase(str) {
  // State/country abbreviations to keep uppercase
  const upperWords = new Set(['ny', 'nyc', 'la', 'sf', 'dc', 'uk', 'us', 'usa']);
  return str
    .replace(/[-_]/g, ' ')
    .replace(/\b\w+/g, word => {
      const lower = word.toLowerCase();
      if (upperWords.has(lower)) return word.toUpperCase();
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
}

function parseFolderName(folder) {
  // Expected: location_date_series-title
  // Location part: "manhattan-ny" → "Manhattan, NY"
  // The last hyphen-segment in location is treated as state/country if 2-3 chars
  const parts = folder.split('_');

  function parseLocation(loc) {
    const segments = loc.split('-');
    const last = segments[segments.length - 1];
    // If last segment is 2-3 chars, treat as state/country abbreviation
    if (segments.length > 1 && last.length <= 3) {
      const city = titleCase(segments.slice(0, -1).join('-'));
      return `${city}, ${last.toUpperCase()}`;
    }
    return titleCase(loc);
  }

  if (parts.length >= 3) {
    return {
      location: parseLocation(parts[0]),
      date: titleCase(parts[1]),
      seriesTitle: titleCase(parts.slice(2).join(' ')),
    };
  }
  if (parts.length === 2) {
    return {
      location: parseLocation(parts[0]),
      date: titleCase(parts[1]),
      seriesTitle: parseLocation(parts[0]),
    };
  }
  return {
    location: parseLocation(folder),
    date: '',
    seriesTitle: titleCase(folder),
  };
}

function photoTitle(filename) {
  const name = path.basename(filename, path.extname(filename));
  return titleCase(name);
}

// Scan photo directories
const folders = fs.readdirSync(PHOTOS_DIR).filter(f => {
  const full = path.join(PHOTOS_DIR, f);
  return fs.statSync(full).isDirectory();
}).sort();

const entries = [];

for (const folder of folders) {
  const folderPath = path.join(PHOTOS_DIR, folder);
  const { location, date, seriesTitle } = parseFolderName(folder);

  // Check for optional meta.json
  let meta = {};
  const metaPath = path.join(folderPath, 'meta.json');
  if (fs.existsSync(metaPath)) {
    meta = JSON.parse(fs.readFileSync(metaPath, 'utf-8'));
  }

  // Get image files
  const images = fs.readdirSync(folderPath)
    .filter(f => IMAGE_EXT.test(f))
    .sort();

  if (images.length === 0) continue;

  const photos = images.map(img => {
    const title = photoTitle(img);
    return {
      src: `/photos/${folder}/${img}`,
      alt: `${title} — ${seriesTitle}`,
      title,
      date: meta.date || date,
      location: meta.location || location,
      ...(meta.stampPool ? { stampPool: meta.stampPool } : {}),
    };
  });

  entries.push({
    id: folder,
    title: meta.title || seriesTitle,
    date: meta.date || date,
    photos,
    summary: meta.description || `${seriesTitle} — ${location}.`,
  });
}

console.log(`Found ${folders.length} folders, ${entries.length} entries, ${entries.reduce((n, e) => n + e.photos.length, 0)} photos total`);

// Generate lib/entries.ts
const photosType = (photos) => photos.map(p => {
  const fields = [
    `          src: ${JSON.stringify(p.src)}`,
    `          alt: ${JSON.stringify(p.alt)}`,
    `          title: ${JSON.stringify(p.title)}`,
    `          date: ${JSON.stringify(p.date)}`,
    `          location: ${JSON.stringify(p.location)}`,
  ];
  if (p.stampPool) {
    fields.push(`          stampPool: ${JSON.stringify(p.stampPool)}`);
  }
  return `        {\n${fields.join(',\n')},\n        }`;
}).join(',\n');

const entriesCode = entries.map(e => `    {
      id: ${JSON.stringify(e.id)},
      title: ${JSON.stringify(e.title)},
      date: ${JSON.stringify(e.date)},
      photos: [
${photosType(e.photos)}
      ],
      summary: ${JSON.stringify(e.summary)},
    }`).join(',\n');

const output = `export interface Photo {
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
${entriesCode}
  ];
}
`;

fs.writeFileSync(ENTRIES_FILE, output);
console.log(`Wrote ${ENTRIES_FILE}`);
