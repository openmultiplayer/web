---
title: GangZoneFlashForAll
description: GangZoneFlashForAll flashes a gangzone for all players.
tags: ["gangzone"]
---

# GangZoneFlashForAll

<TagLinks />

## Description

GangZoneFlashForAll flashes a gangzone for all players.

| Name       | Description                                                                                                |
| ---------- | ---------------------------------------------------------------------------------------------------------- |
| zone       | The zone to flash.                                                                                         |
| flashcolor | The color to flash the gang zone, as an integer or hex in RGBA color format. Alpha transparency supported. |

## Returns

This function does not return any specific values.

## Examples

```c
new gangzone;

public OnGameModeInit()
{
    gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerDeath(playerid, killerid, reason)
{
    GangZoneFlashForAll(gangzone,COLOR_RED);
    return 1;
}
```

## Related Functions

- GangZoneCreate: Create a gangzone.
- GangZoneDestroy: Destroy a gangzone.
- GangZoneShowForPlayer: Show a gangzone for a player.
- GangZoneShowForAll: Show a gangzone for all players.
- GangZoneHideForPlayer: Hide a gangzone for a player.
- GangZoneHideForAll: Hide a gangzone for all players.
- GangZoneFlashForPlayer: Make a gangzone flash for a player.
- GangZoneStopFlashForPlayer: Stop a gangzone flashing for a player.
- GangZoneStopFlashForAll: Stop a gangzone flashing for all players.
