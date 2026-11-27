---
title: "GetPlayerMarkerForPlayer | open.mp"
description: "Get the colour of a player's nametag and radar blip for another player."
canonical: https://open.mp/docs/scripting/functions/GetPlayerMarkerForPlayer
language: en
---

# GetPlayerMarkerForPlayer

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the colour of a player's **nametag** and **radar blip** for another player.

| Name | Description |
| --- | --- |
| playerid | The player that can see the player's changed blip/nametag colour |
| targetid | The player whose colour has been changed. |

## Returns

The target player's **nametag** and **radar blip** colour.

## Examples

```c
// Make player 42 see player 1 as a red marker
SetPlayerMarkerForPlayer(42, 1, 0xFF0000FF);

new markerColour = GetPlayerMarkerForPlayer(42, 1);
// markerColour = 0xFF0000FF
```

## Related Functions

-   [ShowPlayerMarkers](https://open.mp/docs/scripting/functions/ShowPlayerMarkers): Decide if the server should show markers on the radar.
-   [LimitPlayerMarkerRadius](https://open.mp/docs/scripting/functions/LimitPlayerMarkerRadius): Limit the player marker radius.
-   [SetPlayerColor](https://open.mp/docs/scripting/functions/SetPlayerColor): Set a player's color.
-   [ShowPlayerNameTagForPlayer](https://open.mp/docs/scripting/functions/ShowPlayerNameTagForPlayer): Show or hide a nametag for a certain player.
-   [SetPlayerMarkerForPlayer](https://open.mp/docs/scripting/functions/SetPlayerMarkerForPlayer): Set a player's marker for a specific player.
