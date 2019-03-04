---
title: GangZoneDestroy
description: Destroy a gangzone.
tags: ["gangzone"]
---

# GangZoneDestroy

## Description

Destroy a gangzone.

| Name | Description                    |
| ---- | ------------------------------ |
| zone | The ID of the zone to destroy. |

## Returns

This function does not return any specific values.

## Examples

```c
new gangzone;
gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
 
GangZoneDestroy(gangzone);
```

## Related Functions

- GangZoneCreate: Create a gangzone.
- GangZoneShowForPlayer: Show a gangzone for a player.
- GangZoneShowForAll: Show a gangzone for all players.
- GangZoneHideForPlayer: Hide a gangzone for a player.
- GangZoneHideForAll: Hide a gangzone for all players.
- GangZoneFlashForPlayer: Make a gangzone flash for a player.
- GangZoneFlashForAll: Make a gangzone flash for all players.
- GangZoneStopFlashForPlayer: Stop a gangzone flashing for a player.
- GangZoneStopFlashForAll: Stop a gangzone flashing for all players.
