---
title: "IsPlayerInGangZone | open.mp"
description: "Check if the player in gangzone"
canonical: https://open.mp/docs/scripting/functions/IsPlayerInGangZone
language: en
---

# IsPlayerInGangZone

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Check if the player in gangzone.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check if he is in a gangzone. |
| zoneid | The ID of the gangzone. |

## Returns

**true** - The player is in gangzone.

**false** - The player is not in gangzone.

## Notes

warning

-   This function is for open.mp, not SA-MP. To use with SA-MP, you need the [YSF](https://github.com/IS4Code/YSF/releases) plugin.
-   This function cannot be used without [UseGangZoneCheck](https://open.mp/docs/scripting/functions/UseGangZoneCheck) being called first.

## Related Functions

-   [GangZoneDestroy](https://open.mp/docs/scripting/functions/GangZoneDestroy): Destroy a gangzone.
-   [GangZoneShowForPlayer](https://open.mp/docs/scripting/functions/GangZoneShowForPlayer): Show a gangzone for a player.
-   [GangZoneShowForAll](https://open.mp/docs/scripting/functions/GangZoneShowForAll): Show a gangzone for all players.
-   [GangZoneHideForPlayer](https://open.mp/docs/scripting/functions/GangZoneHideForPlayer): Hide a gangzone for a player.
-   [GangZoneHideForAll](https://open.mp/docs/scripting/functions/GangZoneHideForAll): Hide a gangzone for all players.
-   [GangZoneFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneFlashForPlayer): Make a gangzone flash for a player.
-   [GangZoneFlashForAll](https://open.mp/docs/scripting/functions/GangZoneFlashForAll): Make a gangzone flash for all players.
-   [GangZoneStopFlashForPlayer](https://open.mp/docs/scripting/functions/GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
-   [GangZoneStopFlashForAll](https://open.mp/docs/scripting/functions/GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
-   [IsValidGangZone](https://open.mp/docs/scripting/functions/IsValidGangZone): Check if the gangzone valid.
