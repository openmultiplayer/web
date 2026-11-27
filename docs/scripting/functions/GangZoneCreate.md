---
title: "GangZoneCreate | open.mp"
description: "Create a gangzone (colored radar area)."
canonical: https://open.mp/docs/scripting/functions/GangZoneCreate
language: en
---

# GangZoneCreate

## Description

Create a gangzone (colored radar area).

| Name | Description |
| --- | --- |
| Float:minX | The X coordinate for the west side of the gangzone. |
| Float:minY | The Y coordinate for the south side of the gangzone. |
| Float:maxX | The X coordinate for the east side of the gangzone. |
| Float:maxY | The Y coordinate for the north side of the gangzone. |

## Returns

The ID of the created zone, returns **\-1** if not created

## Examples

```c
new gangZone;

public OnGameModeInit()
{
    gangZone = GangZoneCreate(1248.011, 2072.804, 1439.348, 2204.319);
    return 1;
}
```

```text
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

warning

-   There is a limit of 1024 gangzones.
-   Putting the parameters in the wrong order results in glitchy behavior.

note

This function merely CREATES the gangzone, you must use [GangZoneShowForPlayer](https://open.mp/docs/scripting/functions/GangZoneShowForPlayer) or [GangZoneShowForAll](https://open.mp/docs/scripting/functions/GangZoneShowForAll) to show it.

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

## GangZone Editors

-   [Prineside DevTools GangZone Editor](https://dev.prineside.com/en/gtasa_gangzone_editor/)
