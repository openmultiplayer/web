---
title: PlayerGangZoneStopFlash
sidebar_label: PlayerGangZoneStopFlash
description: Stop player gangzone flash
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Stop player gangzone flash.

| Name     | Description                                            |
| -------- | ------------------------------------------------------ |
| playerid | The ID of the player to whom player gangzone is bound. |
| zoneid   | The ID of the player gangzone for in stop flashing.    |

## Returns

**1:** The function executed successfully. Success is reported even if the player gangzone wasn't flashing to begin with.

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

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    // Check if gangzone exists and also check if it flashing
    // If true, then stop flashing gangzone
    if (IsValidPlayerGangZone(playerid, gGangZoneID[playerid]) && IsPlayerGangZoneFlashing(playerid, gGangZoneID[playerid]))
    {
        PlayerGangZoneStopFlash(playerid, gGangZoneID[playerid]);
    }
}
```

## Related Functions

- [CreatePlayerGangZone](CreatePlayerGangZone): Create player gangzone.
- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): Destroy player gangzone.
- [PlayerGangZoneShow](PlayerGangZoneShow): Show player gangzone.
- [PlayerGangZoneHide](PlayerGangZoneHide): Hide player gangzone.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): Start player gangzone flash.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): Get the colour of a player gangzone.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Get the flashing colour of a player gangzone.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Check if the player gangzone valid.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Check if the player in player gangzone.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Check if the player gangzone is visible.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Enables the callback when a player enters/leaves this zone.
