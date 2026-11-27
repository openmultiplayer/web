---
title: "GangZoneShowForAll | open.mp"
description: "Shows a gangzone with the desired color to all players."
canonical: https://open.mp/docs/scripting/functions/GangZoneShowForAll
language: en
---

# GangZoneShowForAll

## Description

Shows a gangzone with the desired color to all players.

| Name | Description |
| --- | --- |
| zoneid | The ID of the gangzone to show (returned by [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate)). |
| colour | The color to show the gang zone, as an integer or hex in **RGBA** color format. Alpha transparency supported. |

## Returns

**1**: The function executed successfully. The gang zone was shown for all players.

**0**: The function failed to execute. The gangzone does not exist.

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
    if (IsPlayerAdmin(playerid))
    {
        GangZoneShowForAll(gGangZoneId, 0xFF0000FF);
    }
    return 1;
}
```

## Related Functions

-   [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate): Create a gangzone.
-   [GangZoneDestroy](https://open.mp/docs/scripting/functions/GangZoneDestroy): Destroy a gangzone.
-   [GangZoneShowForPlayer](https://open.mp/docs/scripting/functions/GangZoneShowForPlayer): Show a gangzone for a player.
-   [GangZoneHideForPlayer](https://open.mp/docs/scripting/functions/GangZoneHideForPlayer): Hide a gangzone for a player.
-   [GangZoneHideForAll](https://open.mp/docs/scripting/functions/GangZoneHideForAll): Hide a gangzone for all players.
-   [GangZoneFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
-   [GangZoneFlashForAll](https://open.mp/docs/scripting/functions/GangZoneFlashForAll): Make a gangzone flash for all players.
-   [GangZoneStopFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
-   [GangZoneStopFlashForAll](https://open.mp/docs/scripting/functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
