---
title: "UseGangZoneCheck | open.mp"
description: "Enables the callback when a player enters/leaves this zone"
canonical: https://open.mp/docs/scripting/functions/UseGangZoneCheck
language: en
---

# UseGangZoneCheck

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Enables the callback when a player enters/leaves this zone.

| Name | Description |
| --- | --- |
| zoneid | The ID of the zone to enable area detection for. |
| bool:enable | Should entry detection be started or stopped? (`true`/`false`) |

## Returns

**1:** The function executed successfully.

**0:** The function failed to execute. The gangzone specified does not exist.

## Examples

```c
new gGangZoneID = INVALID_GANG_ZONE;

public OnGameModeInit()
{
    gGangZoneID = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

    // Enabled the callback when a player enters/leaves this zone
    UseGangZoneCheck(gGangZoneID, true);
}

public OnPlayerEnterGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID)
    {
        new string[64];
        format(string, sizeof(string), "You are entering gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}

public OnPlayerLeaveGangZone(playerid, zoneid)
{
    if (zoneid == gGangZoneID)
    {
        new string[64];
        format(string, sizeof(string), "You are leaving gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this function in one way or another.

-   [OnPlayerEnterGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerEnterGangZone): This callback is called when a player enters a gangzone.
-   [OnPlayerLeaveGangZone](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveGangZone): This callback is called when a player exited a gangzone.

## Related Functions

The following functions might be useful, as they're related to this function in one way or another.

-   [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate): Create a gangzone.
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
