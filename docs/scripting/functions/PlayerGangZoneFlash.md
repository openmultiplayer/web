---
title: "PlayerGangZoneFlash | open.mp"
description: "Start player gangzone flash"
canonical: https://open.mp/docs/scripting/functions/PlayerGangZoneFlash
language: en
---

# PlayerGangZoneFlash

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Start player gangzone flash.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to whom player gangzone is bound. |
| zoneid | The ID of the player gangzone for in start flashing. |
| flashColour | The colour by which the player gangzone will be flashing. |

## Returns

**1:** The function executed successfully. Success is reported even if the player gangzone was flashing to begin with.

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
    PlayerGangZoneShow(playerid, gGangZoneID[playerid]);

    // Start player gangzone flash
    PlayerGangZoneFlash(playerid, gGangZoneID[playerid], 0xFF00FFFF);
}
```

## Related Functions

-   [CreatePlayerGangZone](https://open.mp/docs/scripting/functions/CreatePlayerGangZone): Create player gangzone.
-   [PlayerGangZoneDestroy](https://open.mp/docs/scripting/functions/PlayerGangZoneDestroy): Destroy player gangzone.
-   [PlayerGangZoneShow](https://open.mp/docs/scripting/functions/PlayerGangZoneShow): Show player gangzone.
-   [PlayerGangZoneHide](https://open.mp/docs/scripting/functions/PlayerGangZoneHide): Hide player gangzone.
-   [PlayerGangZoneStopFlash](https://open.mp/docs/scripting/functions/PlayerGangZoneStopFlash): Stop player gangzone flash.
-   [PlayerGangZoneGetColour](https://open.mp/docs/scripting/functions/PlayerGangZoneGetColour): Get the colour of a player gangzone.
-   [PlayerGangZoneGetFlashColour](https://open.mp/docs/scripting/functions/PlayerGangZoneGetFlashColour): Get the flashing colour of a player gangzone.
-   [PlayerGangZoneGetPos](https://open.mp/docs/scripting/functions/PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
-   [IsValidPlayerGangZone](https://open.mp/docs/scripting/functions/IsValidPlayerGangZone): Check if the player gangzone valid.
-   [IsPlayerInPlayerGangZone](https://open.mp/docs/scripting/functions/IsPlayerInPlayerGangZone): Check if the player in player gangzone.
-   [IsPlayerGangZoneVisible](https://open.mp/docs/scripting/functions/IsPlayerGangZoneVisible): Check if the player gangzone is visible.
-   [IsPlayerGangZoneFlashing](https://open.mp/docs/scripting/functions/IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
-   [UsePlayerGangZoneCheck](https://open.mp/docs/scripting/functions/UsePlayerGangZoneCheck): Enables the callback when a player enters/leaves this zone.
