---
title: PlayerGangZoneGetColour
description: Get the colour of a player gangzone
tags: ["player", "gangzone", "playergangzone"]
---

## Description

Get the colour of a player gangzone.

| Name        | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| playerid    | The ID of the player to whom player gangzone is bound.           |
| zoneid      | The ID of the player gangzone.                                   |

## Returns

Color of player gangzone.

0: Failed to execute the function. The player gangzone is not shown for the player.

## Related Functions

- [CreatePlayerGangZone](CreatePlayerGangZone): Create player gangzone.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): Destroy player gangzone.
- [PlayerGangZoneShow](PlayerGangZoneShow): Show player gangzone.
- [PlayerGangZoneHide](PlayerGangZoneHide): Hide player gangzone.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): Start player gangzone flash.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): Stop player gangzone flash.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Get the flashing colour of a player gangzone.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Check if the player gangzone valid.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Check if the player in player gangzone.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Check if the player gangzone is visible.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Enables the callback when a player enters this zone.