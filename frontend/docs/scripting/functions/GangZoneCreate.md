---
title: GangZoneCreate
sidebar_label: GangZoneCreate
description: Create a gangzone (colored radar area).
tags: ["gangzone"]
---

## Description

Create a gangzone (colored radar area).

| Name       | Description                                          |
| ---------- | ---------------------------------------------------- |
| Float:minX | The X coordinate for the west side of the gangzone.  |
| Float:minY | The Y coordinate for the south side of the gangzone. |
| Float:maxX | The X coordinate for the east side of the gangzone.  |
| Float:maxY | The Y coordinate for the north side of the gangzone. |

## Returns

The ID of the created zone, returns **-1** if not created

## Examples

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}
```

```
                          MaxY
                          v
             -------------* < MaxX
             |            |
             |  gangzone  |
             |   center   |
             |            |
      MinX > *-------------
             ^
             MinY
```

## Notes

:::warning

- There is a limit of 1024 gangzones.
- Putting the parameters in the wrong order results in glitchy behavior.

:::

:::tip

This function merely CREATES the gangzone, you must use [GangZoneShowForPlayer](GangZoneShowForPlayer) or [GangZoneShowForAll](GangZoneShowForAll) to show it.

:::

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

## GangZone Editors

- [Prineside DevTools GangZone Editor](https://dev.prineside.com/en/gtasa_gangzone_editor/)
