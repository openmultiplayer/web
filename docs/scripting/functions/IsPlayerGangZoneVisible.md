---
title: "IsPlayerGangZoneVisible | open.mp"
description: "Check if the player gangzone is visible."
canonical: https://open.mp/docs/scripting/functions/IsPlayerGangZoneVisible
language: en
---

# IsPlayerGangZoneVisible

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Check if the player gangzone is visible.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to whom player gangzone is bound. |
| zoneid | The ID of the player gangzone. |

## Returns

**true** - The player gangzone is visible.

**false** - The player gangzone is not visible.

## Examples

```c
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Show the gangzone to player
    PlayerGangZoneShow(playerid, gGangZoneID[playerid], 0xFF0000FF);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/zone", true))
    {
        if (IsPlayerGangZoneVisible(playerid, gGangZoneID[playerid]))
        {
            SendClientMessage(playerid, 0x00FF00FF, "Gangzone is visible.");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "Gangzone is not visible.");
        }
        return 1;
    }
    return 0;
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
-   [PlayerGangZoneGetPos](https://open.mp/docs/scripting/functions/PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
-   [IsValidPlayerGangZone](https://open.mp/docs/scripting/functions/IsValidPlayerGangZone): Check if the player gangzone valid.
-   [IsPlayerInPlayerGangZone](https://open.mp/docs/scripting/functions/IsPlayerInPlayerGangZone): Check if the player in player gangzone.
-   [IsPlayerGangZoneFlashing](https://open.mp/docs/scripting/functions/IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
-   [UsePlayerGangZoneCheck](https://open.mp/docs/scripting/functions/UsePlayerGangZoneCheck): Enables the callback when a player enters/leaves this zone.
