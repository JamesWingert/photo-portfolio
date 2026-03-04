# Photo Portfolio - Automated

Minimal photography portfolio with AI-generated titles and automated deployment.

## How it works

1. Create a folder: public/photos/manhattan-ny_march-2026_lunar-new-year/
2. Drop in photos named descriptively: dragon-dance.jpg, red-lanterns.jpg
3. Optionally add meta.json for stamp pool or custom title
4. Push to Vercel — the build script auto-generates entries.ts and optimizes photos before Next.js builds

## Local Development

```bash
npm install
npm run dev
```

## Structure

- `public/photos/` - Photo files
- `public/entries/` - Generated entry metadata
- `scripts/generate-entry.js` - AI title/summary generation
- `.github/workflows/` - Automation
