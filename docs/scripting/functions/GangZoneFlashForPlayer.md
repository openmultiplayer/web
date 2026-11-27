---
title: "GangZoneFlashForPlayer | open.mp"
description: "Makes a gangzone flash for a player."
canonical: https://open.mp/docs/scripting/functions/GangZoneFlashForPlayer
language: en
---

# GangZoneFlashForPlayer

## Description

Makes a gangzone flash for a player.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to flash the gangzone for. |
| zoneid | The ID of the zone to flash. |
| flashColour | The color to flash the gang zone, as an integer or hex in **RGBA** color format. Alpha transparency supported. |

## Returns

This function does not return any specific values.

## Examples

```c
new gGangZoneId;

public OnGameModeInit()
{
    gGangZoneId = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}

public OnPlayerSpawn(playerid)
{
    GangZoneFlashForPlayer(playerid, gGangZoneId, 0xFF0000FF);
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
-   [GangZoneFlashForAll](https://open.mp/docs/scripting/functions/GangZoneFlashForAll): Make a gangzone flash for all players.
-   [GangZoneStopFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
-   [GangZoneStopFlashForAll](https://open.mp/docs/scripting/functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
