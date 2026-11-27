---
title: "GangZoneGetPos | open.mp"
description: "Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates"
canonical: https://open.mp/docs/scripting/functions/GangZoneGetPos
language: en
---

# GangZoneGetPos

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.

| Name | Description |
| --- | --- |
| zoneid | The ID of the zone to the coordinates of which want to get. |
| &Float:minX | The X coordinate for the west side of the player gangzone. |
| &Float:minY | The Y coordinate for the south side of the player gangzone. |
| &Float:maxX | The X coordinate for the east side of the player gangzone. |
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

-   [GangZoneDestroy](https://open.mp/docs/scripting/functions/GangZoneDestroy): Destroy a gangzone.
-   [GangZoneShowForPlayer](https://open.mp/docs/scripting/functions/GangZoneShowForPlayer): Show a gangzone for a player.
-   [GangZoneShowForAll](https://open.mp/docs/scripting/functions/GangZoneShowForAll): Show a gangzone for all players.
-   [GangZoneHideForPlayer](https://open.mp/docs/scripting/functions/GangZoneHideForPlayer): Hide a gangzone for a player.
-   [GangZoneHideForAll](https://open.mp/docs/scripting/functions/GangZoneHideForAll): Hide a gangzone for all players.
-   [GangZoneFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
-   [GangZoneFlashForAll](https://open.mp/docs/scripting/functions/GangZoneFlashForAll): Make a gangzone flash for all players.
-   [GangZoneStopFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
-   [GangZoneStopFlashForAll](https://open.mp/docs/scripting/functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
-   [IsValidGangZone](https://open.mp/docs/scripting/functions/IsValidGangZone): Check if the gangzone valid.
-   [IsPlayerInGangZone](https://open.mp/docs/scripting/functions/IsPlayerInGangZone): Check if the player in gangzone.
-   [IsGangZoneVisibleForPlayer](https://open.mp/docs/scripting/functions/IsGangZoneVisibleForPlayer): Check if the gangzone is visible for player.
-   [GangZoneGetFlashColourForPlayer](https://open.mp/docs/scripting/functions/GangZoneGetFlashColourForPlayer): Get the flashing colour of a gangzone for player.
-   [IsGangZoneFlashingForPlayer](https://open.mp/docs/scripting/functions/IsGangZoneFlashingForPlayer): Check if the gangzone is flashing for player.
