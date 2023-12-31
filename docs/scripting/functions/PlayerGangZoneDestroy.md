---
title: PlayerGangZoneDestroy
description: Destroy player gangzone
tags: ["player", "gangzone", "playergangzone"]
---

## Description

Destroy player gangzone.

| Name        | Description                                                      |
| ----------- | ---------------------------------------------------------------- |
| playerid    | The ID of the player to whom the player gangzone will be created |
| zoneid      | The ID of the player gangzone for destroy                        |

## Returns

1: The function executed successfully.

0: The function failed to execute. The gangzone specified does not exist.

## Examples

```c
// This variable is used to store the id of the gangzone
// so that we can use it throught the script
new gGangZoneID[MAX_PLAYERS] = {INVALID_GANG_ZONE, ...};

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
}

public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    // Check for the existence of gangzone and if it exists, destroy it
    if(gGangZoneID[playerid] != INVALID_GANG_ZONE)
    {
        PlayerGangZoneDestroy(playerid, gGangZoneID[playerid]);
        gGangZoneID[playerid] = INVALID_GANG_ZONE;
    }
    return 1;
}
```

## Related Functions

- [CreatePlayerGangZone](CreatePlayerGangZone): Create player gangzone.
- [PlayerGangZoneShow](PlayerGangZoneShow): Show player gangzone in a color.
- [PlayerGangZoneHide](PlayerGangZoneHide): Hide player gangzone.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): Start player gangzone flash.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): Stop player gangzone flash.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): Get the colour of a player gangzone.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Get the flashing colour of a player gangzone.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Check if the player gangzone valid.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Check if the player in player gangzone.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Check if the player gangzone is visible.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Enables the callback when a player enters this zone.