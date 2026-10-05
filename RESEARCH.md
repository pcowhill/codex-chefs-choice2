# Research Notes

## Brief inspiration pass
- Three.js community examples show browser 3D games work best when the camera and interaction model stay legible instead of chasing console-game complexity: arcade flight, tanks, shooters, and physics toys were recurring patterns. Source: https://threejs-games.github.io/
- Itch.io's Three.js game-jam listings reinforced that compact web games benefit from one readable twist and fast restarts rather than large content scope. Source: https://itch.io/games/in-jam/made-with-threejs
- Three.js forum discussion noted that physics demos and simple loops are a practical foundation for web games, but full engines are not required for focused arcade play. Source: https://discourse.threejs.org/t/game-development-with-threejs/4912
- Kenney/OpenGameArt were considered for CC0 assets, but I chose procedural geometry and Web Audio synthesis to keep the game self-contained, fast-loading, and license-simple. Sources: https://kenney.nl/assets and https://opengameart.org/

## Chosen concept
**Gravity Junkers**: a top-down 3D salvage arena where the player harpoons ore and drags it to a reactor core while hostile drones attack.

I chose it because the tether is immediately understandable yet creates layered play: it is a collection tool, an anchor that changes ship movement, and a weapon when ore is swung into enemies. That gives a small game enough replayable depth without needing external assets or a long campaign.
