const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const PHOTO_DIR = path.join(__dirname, "..", "public", "photos");
const MAX_WIDTH = 2000;
const QUALITY = 82;
let renamed = [];

function walk(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full));
    } else if (/\.(jpg|jpeg|png)$/i.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimize(filePath) {
  const dir = path.dirname(filePath);
  let base = path.basename(filePath);

  // Rename files with spaces
  if (base.includes(" ")) {
    const newBase = base.replace(/\s+/g, "-");
    const newPath = path.join(dir, newBase);
    fs.renameSync(filePath, newPath);
    renamed.push({ from: filePath, to: newPath });
    console.log(`  Renamed: ${base} -> ${newBase}`);
    filePath = newPath;
    base = newBase;
  }

  // Check dimensions
  const metadata = await sharp(filePath).metadata();
  if (!metadata.width || metadata.width <= MAX_WIDTH) {
    return;
  }

  const sizeBefore = fs.statSync(filePath).size;
  console.log(`  Resizing: ${base} (${metadata.width}px -> ${MAX_WIDTH}px)`);

  const tmpPath = filePath + ".tmp";
  await sharp(filePath)
    .resize(MAX_WIDTH, null, { withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toFile(tmpPath);

  // Replace original with optimized
  fs.unlinkSync(filePath);
  fs.renameSync(tmpPath, filePath);

  const sizeAfter = fs.statSync(filePath).size;
  const savings = Math.round((1 - sizeAfter / sizeBefore) * 100);
  console.log(`    ${(sizeBefore / 1024 / 1024).toFixed(1)}MB -> ${(sizeAfter / 1024).toFixed(0)}KB (${savings}% smaller)`);
}

async function main() {
  console.log("Optimizing photos...\n");
  const photos = walk(PHOTO_DIR);

  for (const photo of photos) {
    await optimize(photo);
  }

  if (renamed.length > 0) {
    console.log("\n⚠️  Files were renamed (spaces removed). Update paths in lib/entries.ts:");
    for (const r of renamed) {
      const relFrom = path.relative(path.join(__dirname, ".."), r.from);
      const relTo = path.relative(path.join(__dirname, ".."), r.to);
      console.log(`   ${relFrom} -> ${relTo}`);
    }
  }

  console.log("\nDone.");
}

main().catch(console.error);
