---
title: "PlayerGangZoneGetPos | open.mp"
description: "Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates"
canonical: https://open.mp/docs/scripting/functions/PlayerGangZoneGetPos
language: en
---

# PlayerGangZoneGetPos

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to whom player gangzone is bound. |
| zoneid | The ID of the zone to the coordinates of which want to get. |
| &Float:minX | The X coordinate for the west side of the player gangzone. |
| &Float:minY | The Y coordinate for the south side of the player gangzone. |
| &Float:maxX | The X coordinate for the east side of the player gangzone. |
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

-   [CreatePlayerGangZone](https://open.mp/docs/scripting/functions/CreatePlayerGangZone): Create player gangzone.
-   [PlayerGangZoneDestroy](https://open.mp/docs/scripting/functions/PlayerGangZoneDestroy): Destroy player gangzone.
-   [PlayerGangZoneShow](https://open.mp/docs/scripting/functions/PlayerGangZoneShow): Show player gangzone.
-   [PlayerGangZoneHide](https://open.mp/docs/scripting/functions/PlayerGangZoneHide): Hide player gangzone.
-   [PlayerGangZoneFlash](https://open.mp/docs/scripting/functions/PlayerGangZoneFlash): Start player gangzone flash.
-   [PlayerGangZoneStopFlash](https://open.mp/docs/scripting/functions/PlayerGangZoneStopFlash): Stop player gangzone flash.
-   [PlayerGangZoneGetFlashColour](https://open.mp/docs/scripting/functions/PlayerGangZoneGetFlashColour): Get the flashing colour of a player gangzone.
-   [PlayerGangZoneGetColour](https://open.mp/docs/scripting/functions/PlayerGangZoneGetColour): Get the colour of a player gangzone.
-   [IsValidPlayerGangZone](https://open.mp/docs/scripting/functions/IsValidPlayerGangZone): Check if the player gangzone valid.
-   [IsPlayerInPlayerGangZone](https://open.mp/docs/scripting/functions/IsPlayerInPlayerGangZone): Check if the player in player gangzone.
-   [IsPlayerGangZoneVisible](https://open.mp/docs/scripting/functions/IsPlayerGangZoneVisible): Check if the player gangzone is visible.
-   [IsPlayerGangZoneFlashing](https://open.mp/docs/scripting/functions/IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
-   [UsePlayerGangZoneCheck](https://open.mp/docs/scripting/functions/UsePlayerGangZoneCheck): Enables the callback when a player enters/leaves this zone.
