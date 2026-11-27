---
title: "PlayerGangZoneGetColour | open.mp"
description: "Get the colour of a player gangzone"
canonical: https://open.mp/docs/scripting/functions/PlayerGangZoneGetColour
language: en
---

# PlayerGangZoneGetColour

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the colour of a player gangzone.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to whom player gangzone is bound. |
| zoneid | The ID of the player gangzone. |

## Returns

Color of player gangzone.

**0:** Failed to execute the function. The player gangzone is not shown for the player.

## Examples

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Show the gangzone to player
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);

    new colour = PlayerGangZoneGetColour(playerid, gGangZoneID[playerid]);
    // colour = 0xFF0000FF
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
-   [PlayerGangZoneGetPos](https://open.mp/docs/scripting/functions/PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
-   [IsValidPlayerGangZone](https://open.mp/docs/scripting/functions/IsValidPlayerGangZone): Check if the player gangzone valid.
-   [IsPlayerInPlayerGangZone](https://open.mp/docs/scripting/functions/IsPlayerInPlayerGangZone): Check if the player in player gangzone.
-   [IsPlayerGangZoneVisible](https://open.mp/docs/scripting/functions/IsPlayerGangZoneVisible): Check if the player gangzone is visible.
-   [IsPlayerGangZoneFlashing](https://open.mp/docs/scripting/functions/IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
-   [UsePlayerGangZoneCheck](https://open.mp/docs/scripting/functions/UsePlayerGangZoneCheck): Enables the callback when a player enters/leaves this zone.
