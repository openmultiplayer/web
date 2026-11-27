---
title: "GangZoneStopFlashForAll | open.mp"
description: "Stops a gangzone flashing for all players."
canonical: https://open.mp/docs/scripting/functions/GangZoneStopFlashForAll
language: en
---

# GangZoneStopFlashForAll

## Description

Stops a gangzone flashing for all players.

| Name | Description |
| --- | --- |
| zoneid | The ID of the zone to stop flashing. Returned by [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate). |

## Returns

**1**: The function executed successfully. Success is reported even if the gang zone wasn't flashing to begin with.

**0**: The function failed to execute. The gangzone specified does not exist.

## Examples

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerDeath(playerid, killerid, WEAPON:reason)
{
    GangZoneFlashForAll(gGangZoneId, COLOR_RED);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneStopFlashForAll(gGangZoneId);
    return 1;
}
```

## Related Functions

-   [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate): Create a gangzone.
-   [GangZoneDestroy](https://open.mp/docs/scripting/functions/GangZoneDestroy): Destroy a gangzone.
-   [GangZoneShowForPlayer](https://open.mp/docs/scripting/functions/GangZoneShowForPlayer): Show a gangzone for a player.
-   [GangZoneShowForAll](https://open.mp/docs/scripting/functions/GangZoneShowForAll): Show a gangzone for all players.
-   [GangZoneHideForPlayer](https://open.mp/docs/scripting/functions/GangZoneHideForPlayer): Hide a gangzone for a player.
-   [GangZoneHideForAll](https://open.mp/docs/scripting/functions/GangZoneHideForAll): Hide a gangzone for all players.
-   [GangZoneFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
-   [GangZoneFlashForAll](https://open.mp/docs/scripting/functions/GangZoneFlashForAll): Make a gangzone flash for all players.
-   [GangZoneStopFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
