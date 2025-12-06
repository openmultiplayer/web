---
title: GangZoneGetFlashColourForPlayer
sidebar_label: GangZoneGetFlashColourForPlayer
description: Get the flashing colour of a gangzone for player
tags: ["player", "gangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the flashing colour of a gangzone for player.

| Name     | Description                           |
| -------- | ------------------------------------- |
| playerid | The ID of the player you need to get. |
| zoneid   | The ID of the gangzone.               |

## Returns

Flashing color of gangzone for player.

**0:** Failed to execute the function. The gangzone is not shown for the player.

## Related Functions

- [GangZoneDestroy](GangZoneDestroy): Destroy a gangzone.
- [GangZoneShowForPlayer](GangZoneShowForPlayer): Show a gangzone for a player.
- [GangZoneShowForAll](GangZoneShowForAll): Show a gangzone for all players.
- [GangZoneHideForPlayer](GangZoneHideForPlayer): Hide a gangzone for a player.
- [GangZoneHideForAll](GangZoneHideForAll): Hide a gangzone for all players.
- [GangZoneFlashForPlayer](GangZoneFlashForPlayer): Make a gangzone flash for a player.
- [GangZoneFlashForAll](GangZoneFlashForAll): Make a gangzone flash for all players.
- [GangZoneStopFlashForPlayer](GangZoneStopFlashForPlayer): Stop a gangzone flashing for a player.
- [GangZoneStopFlashForAll](GangZoneStopFlashForAll): Stop a gangzone flashing for all players.
- [IsValidGangZone](IsValidGangZone): Check if the gangzone valid.
- [IsPlayerInGangZone](IsPlayerInGangZone): Check if the player in gangzone.
- [IsGangZoneVisibleForPlayer](IsGangZoneVisibleForPlayer): Check if the gangzone is visible for player.
