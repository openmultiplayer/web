---
title: "GangZoneShowForPlayer | open.mp"
description: "Show a gangzone for a player."
canonical: https://open.mp/docs/scripting/functions/GangZoneShowForPlayer
language: en
---

# GangZoneShowForPlayer

## Description

Show a gangzone for a player. Must be created with [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate) first.

| Name | Description |
| --- | --- |
| playerid | The ID of the player you would like to show the gangzone for. |
| zoneid | The ID of the gang zone to show for the player. Returned by [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate) |
| colour | The color to show the gang zone, as an integer or hex in **RGBA** color format. Alpha transparency supported. |

## Returns

**1** if the gangzone was shown, otherwise **0** (non-existant).

## Examples

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1082.962, -2787.229, 2942.549, -1859.51);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneShowForPlayer(playerid, gGangZoneId, 0xFFFF0096);
    return 1;
}
```

## Related Functions

-   [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate): Create a gangzone.
-   [GangZoneDestroy](https://open.mp/docs/scripting/functions/GangZoneDestroy): Destroy a gangzone.
-   [GangZoneShowForAll](https://open.mp/docs/scripting/functions/GangZoneShowForAll): Show a gangzone for all players.
-   [GangZoneHideForPlayer](https://open.mp/docs/scripting/functions/GangZoneHideForPlayer): Hide a gangzone for a player.
-   [GangZoneHideForAll](https://open.mp/docs/scripting/functions/GangZoneHideForAll): Hide a gangzone for all players.
-   [GangZoneFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
-   [GangZoneFlashForAll](https://open.mp/docs/scripting/functions/GangZoneFlashForAll): Make a gangzone flash for all players.
-   [GangZoneStopFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
-   [GangZoneStopFlashForAll](https://open.mp/docs/scripting/functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
