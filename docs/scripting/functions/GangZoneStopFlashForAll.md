---
id: GangZoneStopFlashForAll
title: GangZoneStopFlashForAll
description: Stops a gangzone flashing for all players.
tags: ["gangzone"]
---

## Description

Stops a gangzone flashing for all players.

| Name | Description                                                      |
| ---- | ---------------------------------------------------------------- |
| zone | The ID of the zone to stop flashing. Returned by GangZoneCreate. |

## Returns

1: The function executed successfully. Success is reported even if the gang zone wasn't flashing to begin with.

0: The function failed to execute. The gangzone specified does not exist.

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
    GangZoneFlashForAll(gangzone, COLOR_RED);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneStopFlashForAll(gangzone);
    return 1;
}
```

## Related Functions

- [GangZoneCreate](../functions/GangZoneCreate): Create a gangzone.
- [GangZoneDestroy](../functions/GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](../functions/GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](../functions/GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](../functions/GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](../functions/GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](../functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](../functions/GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](../functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
