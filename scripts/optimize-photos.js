const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const PHOTO_DIR = path.join(__dirname, "..", "public", "photos");
const MAX_WIDTH = 2000;
// Track if any file was renamed so we can warn about updating entries
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

function getWidth(filePath) {
  const out = execSync(`sips -g pixelWidth "${filePath}"`, {
    encoding: "utf-8",
  });
  const match = out.match(/pixelWidth:\s*(\d+)/);
  return match ? parseInt(match[1], 10) : 0;
}

function optimize(filePath) {
  // Skip placeholder SVGs
  if (filePath.endsWith(".svg")) return;

  // Rename files with spaces
  const dir = path.dirname(filePath);
  const base = path.basename(filePath);
  if (base.includes(" ")) {
    const newBase = base.replace(/\s+/g, "-");
    const newPath = path.join(dir, newBase);
    fs.renameSync(filePath, newPath);
    renamed.push({ from: filePath, to: newPath });
    console.log(`  Renamed: ${base} -> ${newBase}`);
    filePath = newPath;
  }

  // Check if already small enough
  const width = getWidth(filePath);
  if (width <= MAX_WIDTH) {
    return;
  }

  const sizeBefore = fs.statSync(filePath).size;
  console.log(`  Resizing: ${path.basename(filePath)} (${width}px -> ${MAX_WIDTH}px)`);
  execSync(`sips --resampleWidth ${MAX_WIDTH} "${filePath}"`, {
    stdio: "ignore",
  });
  const sizeAfter = fs.statSync(filePath).size;
  const savings = Math.round((1 - sizeAfter / sizeBefore) * 100);
  console.log(`    ${(sizeBefore / 1024 / 1024).toFixed(1)}MB -> ${(sizeAfter / 1024).toFixed(0)}KB (${savings}% smaller)`);
}

console.log("Optimizing photos...\n");
const photos = walk(PHOTO_DIR);

for (const photo of photos) {
  optimize(photo);
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
