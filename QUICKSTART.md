# UFC Form Tracker — Quick Start

## What's built

✅ **Core infrastructure:**
- Type definitions and data models
- Cache abstraction layer (file-based for dev, Vercel KV for prod)
- Anthropic API client for fight card generation
- The Odds API client for Australian bookmaker odds
- Smart refresh engine with decision tree

✅ **API Routes:**
- `POST /api/refresh` — Generate or update fight card
- `GET /api/cache-status` — Check if refresh is needed

✅ **UI Components:**
- Cache prompt banner (smart nudge)
- Fight screen with all modules (header, odds, method, form strips, editorial, up-next)
- Form strips (signature W/L/D tiles with hover tooltips)
- Story content with collapsible substantiation bullets
- Home page and card wrap summary page

## Local Development

### 1. Set up environment variables

Create a `.env.local` file (or update the existing one):

```bash
ANTHROPIC_API_KEY=your_actual_key_here
ODDS_API_KEY=your_actual_key_here
```

Get these keys:
- **Anthropic**: https://console.anthropic.com/
- **The Odds API**: https://the-odds-api.com/

### 2. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Load a card

Click "Load the card" on the home page. The app will:
1. Call Claude to find the next UFC event and generate editorial for all fights
2. Fetch Australian bookmaker odds
3. Cache everything in `/tmp/ufc-cache.json`
4. Display the card

## Mobile Testing

On the home page after loading a card:
1. Click "Start at main event" to view fight details
2. Tap "Up next" footer or use the back button to navigate
3. Tap form tiles to see opponent details
4. Click "Why this pick" to expand substantiation bullets

## Known Issues & TODO

### Current limitations:
- Mock data needed for Claude generation (schema validation)
- Card change detection not yet implemented (will always refresh all bouts)
- Odds price history/movement not tracked
- No persistent storage beyond session (file cache resets on server restart)

### Next phase improvements:
- Add offline capability (localStorage fallback)
- Implement card change detection
- Add swipe navigation between fights
- Dark mode refinement (currently using Tailwind dark)
- Mobile viewport optimization

## File Structure

```
lib/
  types.ts           — All TypeScript interfaces
  constants.ts       — API keys, thresholds, config
  cache.ts           — Cache abstraction (file/KV)
  anthropic-client.ts — Claude API wrapper
  odds-client.ts     — The Odds API wrapper
  refresh-engine.ts  — Core refresh orchestration

components/
  CachePromptBanner.tsx                 — Smart refresh nudge
  FightScreen/
    FightHeader.tsx                     — Division, fighters, flags
    OddsBoard.tsx                       — Australian decimal odds
    MethodOfVictory.tsx                 — MOV prediction
    FormStrips.tsx                      — W/L/D tiles (signature element)
    StoryContent.tsx                    — Editorial + expandable bullets
    UpNextFooter.tsx                    — Next fight teaser

hooks/
  useCacheState.ts   — Cache state + refresh logic

app/
  page.tsx           — Home (event card selector)
  /fight/[index]/    — Fight detail screen
  /card-wrap/        — Card summary page
  /api/refresh       — Refresh endpoint
  /api/cache-status  — Status check endpoint
```

## Deployment to Vercel

When ready:

```bash
git add .
git commit -m "Initial UFC Form Tracker"
git push origin main
```

Vercel will automatically deploy. Set these environment variables in Vercel settings:
- `ANTHROPIC_API_KEY`
- `ODDS_API_KEY`

The app will automatically use Vercel KV for caching in production.
