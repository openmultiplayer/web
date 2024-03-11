---
title: PlayerGangZoneGetPos
description: Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.

| Name        | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| playerid    | The ID of the player to whom player gangzone is bound.      |
| zoneid      | The ID of the zone to the coordinates of which want to get. |
| &Float:minX | The X coordinate for the west side of the player gangzone.  |
| &Float:minY | The Y coordinate for the south side of the player gangzone. |
| &Float:maxX | The X coordinate for the east side of the player gangzone.  |
| &Float:maxY | The Y coordinate for the north side of the player gangzone. |

## Returns

This function always returns **true**.

## Examples

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    new 
        Float:minX,
        Float:minY,
        Float:maxX,
        Float:maxY;
    
    PlayerGangZoneGetPos(playerid, gGangZoneID[playerid], minX, minY, maxX, maxY);
    return 1;
}
```

## Related Functions

- [CreatePlayerGangZone](CreatePlayerGangZone): Create player gangzone.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): Destroy player gangzone.
- [PlayerGangZoneShow](PlayerGangZoneShow): Show player gangzone.
- [PlayerGangZoneHide](PlayerGangZoneHide): Hide player gangzone.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): Start player gangzone flash.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): Stop player gangzone flash.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Get the flashing colour of a player gangzone.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): Get the colour of a player gangzone.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Check if the player gangzone valid.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Check if the player in player gangzone.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Check if the player gangzone is visible.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Enables the callback when a player enters/leaves this zone.