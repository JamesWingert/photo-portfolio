const fs = require('fs');
const path = require('path');

const PHOTOS_DIR = path.join(__dirname, '../public/photos');
const ENTRIES_DIR = path.join(__dirname, '../public/entries');
const ENTRIES_FILE = path.join(__dirname, '../lib/entries.ts');

// Ensure directories exist
if (!fs.existsSync(ENTRIES_DIR)) {
  fs.mkdirSync(ENTRIES_DIR, { recursive: true });
}

// Get all photos
const photos = fs.readdirSync(PHOTOS_DIR)
  .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f))
  .sort();

console.log(`Found ${photos.length} photos`);

// Process in batches of 4
const batches = [];
for (let i = 0; i < photos.length; i += 4) {
  batches.push(photos.slice(i, i + 4));
}

console.log(`Creating ${batches.length} entries`);

// Generate entries (placeholder - would use AI in production)
batches.forEach((batch, index) => {
  const entryId = `entry-${Date.now()}-${index}`;
  
  // In production, this would call AI API
  // For now, create placeholder entry
  const entry = {
    id: entryId,
    title: `[AI Generated Title ${index + 1}]`,
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    photos: batch.map(p => ({ src: `/photos/${p}`, alt: p })),
    summary: `[AI Generated Summary - This would be a poetic description of the photos, the mood, the lighting, and the story behind them.]`,
    accentColor: "#E8D5C4", // Would extract from image
  };

  // Save entry JSON
  fs.writeFileSync(
    path.join(ENTRIES_DIR, `${entryId}.json`),
    JSON.stringify(entry, null, 2)
  );

  console.log(`Generated entry: ${entryId}`);
});

console.log('Done! In production, this would use AI to generate titles and summaries.');
