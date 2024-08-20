---
title: GangZoneGetPos
description: Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.

| Name        | Description                                                 |
| ----------- | ----------------------------------------------------------- |
| zoneid      | The ID of the zone to the coordinates of which want to get. |
| &Float:minX | The X coordinate for the west side of the player gangzone.  |
| &Float:minY | The Y coordinate for the south side of the player gangzone. |
| &Float:maxX | The X coordinate for the east side of the player gangzone.  |
| &Float:maxY | The Y coordinate for the north side of the player gangzone. |

## Returns

This function always returns **true**.

## Examples

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

    new 
        Float:minX,
        Float:minY,
        Float:maxX,
        Float:maxY;
    
    GangZoneGetPos(gangZone, minX, minY, maxX, maxY);
    return 1;
}
```

## Related Functions

- [GangZoneDestroy](GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
- [IsValidGangZone](IsValidGangZone): Check if the gangzone valid.
- [IsPlayerInGangZone](IsPlayerInGangZone): Check if the player in gangzone.
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): Check if the gangzone is visible for player.
- [GangZoneGetFlashColourForPlayer](GangZoneGetFlashColourForPlayer): Get the flashing colour of a gangzone for player.
- [IsGangZoneFlashingForPlayer](IsGangZoneFlashingForPlayer): Check if the gangzone is flashing for player.