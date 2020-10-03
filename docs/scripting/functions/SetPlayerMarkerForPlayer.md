---
id: SetPlayerMarkerForPlayer
title: SetPlayerMarkerForPlayer
description: Change the colour of a player's nametag and radar blip for another player.
tags: ["player"]
---

## Description

Change the colour of a player's nametag and radar blip for another player.

| Name         | Description                                                      |
| ------------ | ---------------------------------------------------------------- |
| playerid     | The player that will see the player's changed blip/nametag color |
| showplayerid | The player whose color will be changed                           |
| color        | New color. Supports alpha values.                                |

## Returns

This function does not return any specific values.

## Examples

```c
// Make player 42 see player 1 as a red marker
SetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);

// Make the players marker an invisible white (chat will be white but marker will be gone).
SetPlayerMarkerForPlayer(42, 1, 0xFFFFFF00);

// Make the players marker invisible to the player while keeping chat colour the same. Will only work correctly if SetPlayerColor has been used:
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) & 0xFFFFFF00));

// Make the players marker fully opaque (solid) to the player while keeping chat colour the same. Will only work correctly if SetPlayerColor has been used:
SetPlayerMarkerForPlayer(42, 1, (GetPlayerColor(1) | 0x000000FF));
```

## Related Functions

- [ShowPlayerMarkers](functions/ShowPlayerMarkers.md): Decide if the server should show markers on the radar.
- [LimitPlayerMarkerRadius](functions/LimitPlayerMarkerRadius.md): Limit the player marker radius.
- [SetPlayerColor](functions/SetPlayerColor.md): Set a player's color.
- [ShowPlayerNameTagForPlayer](functions/ShowPlayerNameTagForPlayer.md): Show or hide a nametag for a certain player.
