const fs = require('fs');
const path = require('path');

const PHOTOS_DIR = path.join(__dirname, '../public/photos');
const ENTRIES_DIR = path.join(__dirname, '../public/entries');
const ENTRIES_FILE = path.join(__dirname, '../lib/entries.ts');

// Ensure directories exist
if (!fs.existsSync(ENTRIES_DIR)) {
  fs.mkdirSync(ENTRIES_DIR, { recursive: true });
}

// Get all photos (including subdirectories)
function getAllPhotos(dir, baseDir = dir) {
  let photos = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively search subdirectories
      photos = photos.concat(getAllPhotos(fullPath, baseDir));
    } else if (/\.(jpg|jpeg|png|webp)$/i.test(item)) {
      // Get relative path from base photos directory
      const relativePath = path.relative(baseDir, fullPath);
      photos.push(relativePath);
    }
  }
  
  return photos;
}

const photos = getAllPhotos(PHOTOS_DIR).sort();

console.log(`Found ${photos.length} photos`);

// Process in batches of 4
const batches = [];
for (let i = 0; i < photos.length; i += 4) {
  batches.push(photos.slice(i, i + 4));
}

console.log(`Creating ${batches.length} entries`);

// Generate entries
batches.forEach((batch, index) => {
  const entryId = `entry-${Date.now()}-${index}`;
  const folderName = path.dirname(batch[0]); // Get folder name from first photo path
  
  // In production, this would call AI API
  // For now, I'll generate titles for you to review
  const entry = {
    id: entryId,
    title: `[REVIEW NEEDED] Entry ${index + 1}${folderName ? ` (${folderName})` : ''}`,
    date: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
    photos: batch.map(p => ({ 
      src: `/photos/${p.replace(/\\/g, '/')}`, 
      alt: path.basename(p) 
    })),
    summary: `[REVIEW NEEDED - This would be a poetic description of the photos. Please review and edit.]`,
    accentColor: "#E8D5C4",
  };

  // Save entry JSON
  fs.writeFileSync(
    path.join(ENTRIES_DIR, `${entryId}.json`),
    JSON.stringify(entry, null, 2)
  );

  console.log(`Generated entry: ${entryId} with ${batch.length} photos`);
});

console.log('Done! In production, this would use AI to generate titles and summaries.');
