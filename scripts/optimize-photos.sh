#!/bin/bash
# Optimize photos for web delivery (macOS — uses built-in sips)
# Resizes to max 2000px wide, keeps JPEG format
# Creates -web.jpg versions alongside originals

PHOTO_DIR="public/photos"
MAX_WIDTH=2000

echo "Optimizing photos in $PHOTO_DIR..."

find "$PHOTO_DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) ! -name "*-web.*" | while read -r file; do
  dir=$(dirname "$file")
  basename=$(basename "$file")
  name="${basename%.*}"
  output="${dir}/${name}-web.jpg"

  if [ -f "$output" ]; then
    echo "  SKIP (exists): $output"
    continue
  fi

  echo "  Processing: $file"
  cp "$file" "$output"
  sips --resampleWidth $MAX_WIDTH "$output" --setProperty formatOptions 80 >/dev/null 2>&1

  original_size=$(stat -f%z "$file")
  new_size=$(stat -f%z "$output")
  savings=$(( (original_size - new_size) * 100 / original_size ))
  echo "    $(( original_size / 1024 / 1024 ))MB -> $(( new_size / 1024 ))KB  (${savings}% smaller)"
done

echo ""
echo "Done! Update your entries in lib/entries.ts to use the -web.jpg versions."
