# Gravity Junkers

A self-contained 3D browser arcade game built with Vite-style npm scripts, TypeScript, and a custom lightweight 3D projection renderer.

You pilot a twitchy salvage skiff inside a collapsing scrapyard moon. Harpoon green ore, drag it into the golden reactor core, and survive waves of red drones. The core mechanic is a two-way tether: it pulls your ship, pulls cargo, and turns heavy ore into a wrecking ball.

## Why this concept

I chose a salvage-arena game because it gives a clear objective and a surprising central mechanic in a compact scope. The harpoon is useful for scoring, movement, and combat, so the mechanics interact instead of feeling like separate features.

## Controls

- `WASD` — thrust
- Mouse — aim ship
- Left click — tether nearest ore/enemy or release tether
- `Space` — dash
- `Shift` — brake
- `P` — pause/resume
- `R` — restart
- `M` — mute/unmute audio

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Build

```bash
npm run build
```

## Verified

- Dependencies install with `npm install`.
- Production build succeeds with `npm run build`.
- Dev server starts with `npm run dev`.
- Browser smoke check confirmed the title screen renders and the 3D canvas is present.

## Known limitations

- Desktop keyboard/mouse only; touch/mobile controls are intentionally out of scope.
- Audio is synthesized rather than using mastered sound assets.
- The game uses procedural primitives rather than detailed authored models to keep performance and licensing simple.
