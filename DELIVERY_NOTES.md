# Delivery Notes

## Final concept summary
Gravity Junkers is a desktop keyboard/mouse 3D-perspective arcade salvage game. The player pilots a skiff, tethers green ore, tows it into a golden reactor core, and fights red drones by swinging cargo into them.

## Implementation summary
- Vite + TypeScript project structure with npm scripts for install, dev, build, and typecheck.
- Canvas-rendered 3D perspective projection for a readable arena, object depth sorting, core, player, ore, drones, tether line, HUD, title, pause, and end screens.
- Procedural visuals, runtime synthesized audio, replayable wave/quota progression, increasing enemy pressure, hull damage, dash cooldown, tether interactions, cargo banking, and restart flow.
- Documentation added in README, RESEARCH, ASSETS, and this delivery note.

## Verification checklist
- `npm install` completed successfully after removing external package dependencies blocked by the environment registry policy.
- `npm run build` completed successfully.
- `npm run dev` started the local development server on port 5173.
- HTTP smoke check confirmed the title HTML and transpiled game module are served.
- Browser automation/screenshot tooling was not available in this environment, so full interactive checks were performed by static review and server smoke checks only.

## Issues or limitations
- The environment returned 403 for npm registry downloads, so the final project is self-contained and uses no external npm packages.
- The dev server is a small local Vite-compatible server script rather than the official Vite package because package installation from the registry was blocked.
- Desktop keyboard/mouse only; mobile/touch controls are intentionally not supported.

## Branch and commit
- Branch: `feat/gravity-salvage-3d`
- Commit: see `git rev-parse --short HEAD` for the final amended commit
