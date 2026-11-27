---
title: "SetPlayerMarkerForPlayer | open.mp"
description: "Change the colour of a player's nametag and radar blip for another player."
canonical: https://open.mp/docs/scripting/functions/SetPlayerMarkerForPlayer
language: en
---

# SetPlayerMarkerForPlayer

## Description

Change the colour of a player's **nametag** and **radar blip** for another player.

| Name | Description |
| --- | --- |
| playerid | The player that will see the player's changed blip/nametag color |
| targetid | The player whose color will be changed |
| colour | New color. Supports [alpha values](https://open.mp/docs/scripting/resources/colorslist#alpha-values-transparency). |

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

-   [ShowPlayerMarkers](https://open.mp/docs/scripting/functions/ShowPlayerMarkers): Decide if the server should show markers on the radar.
-   [LimitPlayerMarkerRadius](https://open.mp/docs/scripting/functions/LimitPlayerMarkerRadius): Limit the player marker radius.
-   [SetPlayerColor](https://open.mp/docs/scripting/functions/SetPlayerColor): Set a player's color.
-   [ShowPlayerNameTagForPlayer](https://open.mp/docs/scripting/functions/ShowPlayerNameTagForPlayer): Show or hide a nametag for a certain player.
-   [GetPlayerMarkerForPlayer](https://open.mp/docs/scripting/functions/GetPlayerMarkerForPlayer): Gets the colour of a player's nametag and radar blip for another player.
