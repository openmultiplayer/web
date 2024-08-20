---
title: PlayerGangZoneShow
description: Show player gangzone in a color
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Show player gangzone in a color.

| Name        | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| playerid    | The ID of the player to whom player gangzone is bound.           |
| zoneid      | The ID of the player gangzone for shown.                         |
| colour      | The colour by which the player gangzone will be shown.           |

## Returns

**1:** The function executed successfully. Success is reported even if the gangzone was show to begin with.

**0:** The function failed to execute. The gangzone specified does not exist.

## Examples

```c
// This variable is used to store the id of the gangzone
// so that we can use it throught the script
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Show the gangzone player
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFFFFFFFF);
}
```

## Related Functions

- [CreatePlayerGangZone](CreatePlayerGangZone): Create player gangzone.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): Destroy player gangzone.
- [PlayerGangZoneHide](PlayerGangZoneHide): Hide player gangzone.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): Start player gangzone flash.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): Stop player gangzone flash.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): Get the colour of a player gangzone.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Get the flashing colour of a player gangzone.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Check if the player gangzone valid.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Check if the player in player gangzone.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Check if the player gangzone is visible.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Enables the callback when a player enters/leaves this zone.