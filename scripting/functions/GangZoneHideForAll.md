---
title: GangZoneHideForAll
description: GangZoneHideForAll hides a gangzone from all players.
tags: ["gangzone"]
---

# GangZoneHideForAll

<TagLinks />

## Description

GangZoneHideForAll hides a gangzone from all players.

| Name | Description       |
| ---- | ----------------- |
| zone | The zone to hide. |

## Returns

This function does not return any specific values.

## Examples

```c
new gangzone;
gangzone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
GangZoneHideForAll(gangzone);
```

## Related Functions

- GangZoneCreate: Create a gangzone.
- GangZoneDestroy: Destroy a gangzone.
- GangZoneShowForPlayer: Show a gangzone for a player.
- GangZoneShowForAll: Show a gangzone for all players.
- GangZoneHideForPlayer: Hide a gangzone for a player.
- GangZoneFlashForPlayer: Make a gangzone flash for a player.
- GangZoneFlashForAll: Make a gangzone flash for all players.
- GangZoneStopFlashForPlayer: Stop a gangzone flashing for a player.
- GangZoneStopFlashForAll: Stop a gangzone flashing for all players.
