# Wordra — GitHub-ready full prototype

Wordra is an independent English word-search game inspired by familiar filword conventions and built around the rules we defined for this project.

## Core rules

- English words.
- Word paths move only **up, down, left, or right**.
- No diagonal movement.
- No jumping over cells.
- A cell cannot be used twice in the same word selection.
- Words may cross and share letters.
- A word can be found in reverse order.
- Target words are required to finish a level.
- Bonus words are optional and are not part of the target set.
- Bonus words may be shorter or longer than target words and can intersect the same board.

## Included in this build

- Automatic level generator and validator.
- Seeded generation, so levels are reproducible.
- Endless generated campaign (1000+ levels without shipping 1000 hand-authored boards).
- Chapter / progression system.
- Daily challenge with deterministic daily level.
- Weekly event mode with local leaderboard simulation.
- Coins, hints, streaks, achievements and local shop.
- Undo/restart level.
- Touch / mouse / pointer swipe selection.
- Bonus-word detection using a trie-backed DFS over orthogonal paths.
- Local save with `localStorage`.
- Export/import save JSON.
- PWA manifest + service worker for offline use after first load.
- Responsive mobile-first interface.
- No external runtime dependencies.

## Run locally

Recommended:

```bash
python3 -m http.server 8080
```

Open `http://localhost:8080`.

You can also use any static server. ES modules are used, so opening `index.html` directly via `file://` may be blocked by browser CORS rules.

## GitHub Pages

1. Create a GitHub repository.
2. Upload this folder's contents to the repository root.
3. GitHub → Settings → Pages.
4. Select **Deploy from a branch**, choose your branch and `/ (root)`.
5. Save.

No build step is required.

## Generator overview

`src/generator.js` creates a board from a deterministic seed:

1. Selects target words from the English dictionary using a difficulty profile.
2. Places the longest words first by finding orthogonal simple paths.
3. Scores paths by how useful their overlaps are and commits the best candidate.
4. Fills remaining cells using weighted letters while reducing unwanted short words.
5. Validates all target paths.
6. Scans the final board for optional bonus words with a trie + DFS.
7. Computes a difficulty score and rejects weak/unsolvable boards.

The result is a completely generated level object — no hand-authored cell paths are required.

## Dictionary

`english.js` is intentionally local and compact. It contains a curated pool of common English words suitable for a prototype. Replace or extend it with a licensed dictionary for production scale.

## Important production notes

This is a complete **testable web prototype**, not yet a store-ready iOS/Android release. For production, add a backend for accounts, cloud save, real leaderboards, remote events, analytics, ad mediation and purchases.

The implementation is independent and does not contain proprietary source code, assets, or text from MALPA GAMES.
