# Assets

Gravity Junkers uses no external runtime art, model, texture, music, or sound-effect files.

## Procedural / code-generated assets
- 3D-perspective objects are generated procedurally in code with projected arena rings, diamond ships, ore, drones, and a tether line.
- Lighting, fog, materials, shadows, and motion are authored in code.
- Sound effects are synthesized at runtime with the Web Audio API oscillators.
- UI typography uses Google Fonts via CSS import (`Anton` and `IBM Plex Mono`). These are served at development/runtime by the browser and are not required for game logic; fallback fonts are specified in CSS.

## External assets considered but not used
- Kenney CC0 assets: https://kenney.nl/assets
- OpenGameArt free assets: https://opengameart.org/
