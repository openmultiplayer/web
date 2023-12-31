---
title: UsePlayerGangZoneCheck
description: Enables the callback when a player enters this zone
tags: ["player", "gangzone", "playergangzone"]
---

## Description

Enables the callback when a player enters this zone.

| Name        | Description                                                                                                      |
| ----------- | ---------------------------------------------------------------------------------------------------------------- |
| playerid    | The ID of the player for whom you want to enable callback triggering when the player enters this zone.           |
| zoneid      | The ID of the zone to enable area detection for.                                                                 |
| enable      | Should entry detection be started or stopped?                                                                    |


## Returns

1: The function executed successfully.

0: The function failed to execute.  The gangzone specified does not exist.

## Examples

```c
// This variable is used to store the id of the gangzone
// so that we can use it throught the script
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);

    // Enabled the callback when a player enters this zone
    UsePlayerGangZoneCheck(playerid, gGangZoneID[playerid], true);
}

public OnPlayerEnterPlayerGangZone(playerid, zoneid)
{
    if(gGangZoneID[playerid] == zoneid)
    {
        new string[128];
        format(string, sizeof(string), "You are entering player gangzone %i", zoneid);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    }
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
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Check if the player gangzone valid.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Check if the player in player gangzone.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Check if the player gangzone is visible.
