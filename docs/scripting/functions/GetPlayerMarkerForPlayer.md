---
title: GetPlayerMarkerForPlayer
description: Get the colour of a player's nametag and radar blip for another player.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the colour of a player's **nametag** and **radar blip** for another player.

| Name     | Description                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| playerid | The player that can see the player's changed blip/nametag colour                                                                                |                        |
| targetid | The player whose colour has been changed.                                                                                                       |

## Returns

The target player's **nametag** and **radar blip** colour.

## Examples

```c
GetPlayerMarkerForPlayer(playerid, targetid);
```

## Related Functions

- [ShowPlayerMarkers](ShowPlayerMarkers): Decide if the server should show markers on the radar.
- [LimitPlayerMarkerRadius](LimitPlayerMarkerRadius): Limit the player marker radius.
- [SetPlayerColor](SetPlayerColor): Set a player's color.
- [ShowPlayerNameTagForPlayer](ShowPlayerNameTagForPlayer): Show or hide a nametag for a certain player.
- [SetPlayerMarkerForPlayer](SetPlayerMarkerForPlayer): Set a player's marker for a specific player.
