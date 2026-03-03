# Photo Portfolio - Automated

Minimal photography portfolio with AI-generated titles and automated deployment.

## How it works

1. Add 4 photos to `public/photos/`
2. GitHub Action triggers AI analysis
3. AI generates title, summary, and accent color
4. Site auto-deploys to Vercel

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
