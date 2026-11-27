---
title: "UsePlayerGangZoneCheck | open.mp"
description: "Enables the callback when a player enters/leaves this zone"
canonical: https://open.mp/docs/scripting/functions/UsePlayerGangZoneCheck
language: en
---

# UsePlayerGangZoneCheck

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Enables the callback when a player enters/leaves this zone.

| Name | Description |
| --- | --- |
| playerid | The ID of the player for whom you want to enable callback triggering when the player enters/leaves this zone. |
| zoneid | The ID of the player-zone to enable area detection for. |
| bool:enable | Should entry detection be started or stopped? (`true`/`false`) |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The gangzone specified does not exist.

## Examples

```c
// This variable is used to store the id of the gangzone
// so that we can use it throught the script
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Enabled the callback when a player enters/leaves this zone
    UsePlayerGangZoneCheck(playerid, gGangZoneID[playerid], true);
}

public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID[playerid])
    {
        new string[64];
        format(string, sizeof(string), "You are entering player gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}

public OnPlayerLeavePlayerGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID[playerid])
    {
        new string[64];
        format(string, sizeof(string), "You are leaving player gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this function in one way or another.

-   [OnPlayerEnterPlayerGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerEnterPlayerGangZone): This callback is called when a player enters a player gangzone.
-   [OnPlayerLeavePlayerGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerLeavePlayerGangZone): This callback is called when a player exited a player gangzone.

## Related Functions

The following functions might be useful, as they're related to this function in one way or another.

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
-   [IsPlayerGangZoneVisible](https://open.mp/docs/scripting/functions/IsPlayerGangZoneVisible): Check if the player gangzone is visible.
