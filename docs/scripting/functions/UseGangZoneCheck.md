---
title: UseGangZoneCheck
description: Enables the callback when a player enters/leaves this zone
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Enables the callback when a player enters/leaves this zone.

| Name        | Description                                        |
| ----------- | -------------------------------------------------- |
| zoneid      | The ID of the zone to enable area detection for.   |
| enable      | Should entry detection be started or stopped?      |

## Returns

1: The function executed successfully.

0: The function failed to execute. The gangzone specified does not exist.

## Examples

```c
new gGangZoneID = INVALID_GANG_ZONE;

public OnGameModeInit()
{
    gGangZoneID = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);

    // Enabled the callback when a player enters/leaves this zone
    UsePlayerGangZoneCheck(playerid, gGangZoneID, true);
}

public OnPlayerEnterGangZone(playerid, zoneid)
{
    if(gGangZoneID == zoneid)
    {
        new string[128];
        format(string, sizeof(string), "You are entering gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}

public OnPlayerLeaveGangZone(playerid, zoneid)
{
    if(gGangZoneID == zoneid)
    {
        new string[128];
        format(string, sizeof(string), "You are leaving gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
    return 1;
}
```

## Related Callbacks

The following callbacks might be useful, as they're related to this function in one way or another. 

- [OnPlayerEnterGangZone](../callbacks/OnPlayerEnterGangZone): This callback is called when a player enters a gangzone.
- [OnPlayerLeaveGangZone](../callbacks/OnPlayerLeaveGangZone): This callback is called when a player exited a gangzone.

## Related Functions

The following functions might be useful, as they're related to this function in one way or another. 

- [GangZoneCreate](GangZoneCreate): Create a gangzone.
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