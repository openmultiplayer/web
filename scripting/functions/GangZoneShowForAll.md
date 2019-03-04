---
title: GangZoneShowForAll
description: Shows a gangzone with the desired color to all players.
tags: ["gangzone"]
---

# GangZoneShowForAll

## Description

Shows a gangzone with the desired color to all players.

| Name  | Description                                                                                               |
| ----- | --------------------------------------------------------------------------------------------------------- |
| zone  | The ID of the gangzone to show (returned by GangZoneCreate).                                              |
| color | The color to show the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported. |

## Returns

1: The function executed successfully. The gang zone was shown for all players.

0: The function failed to execute. The gangzone does not exist.

## Examples

```c
new gangzone;
 
public OnGameModeInit()
{
    gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}
 
public OnPlayerSpawn(playerid)
{
    if(IsPlayerAdmin(playerid)) GangZoneShowForAll(gangzone,COLOR_RED);
    return 1;
}
```

## Related Functions

- GangZoneCreate: Create a gangzone.
- GangZoneDestroy: Destroy a gangzone.
- GangZoneShowForPlayer: Show a gangzone for a player.
- GangZoneHideForPlayer: Hide a gangzone for a player.
- GangZoneHideForAll: Hide a gangzone for all players.
- GangZoneFlashForPlayer: Make a gangzone flash for a player.
- GangZoneFlashForAll: Make a gangzone flash for all players.
- GangZoneStopFlashForPlayer: Stop a gangzone flashing for a player.
- GangZoneStopFlashForAll: Stop a gangzone flashing for all players.
