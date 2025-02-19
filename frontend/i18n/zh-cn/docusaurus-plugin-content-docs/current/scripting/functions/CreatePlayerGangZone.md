---
title: CreatePlayerGangZone
sidebar_label: CreatePlayerGangZone
description: Create player gangzone
tags: ["player", "gangzone", "playergangzone"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Create player gangzone. This can be used as a way around the global gangzone limit.

| Name        | Description                                                       |
| ----------- | ----------------------------------------------------------------- |
| playerid    | The ID of the player to whom the player gangzone will be created. |
| Float:minX  | The X coordinate for the west side of the player gangzone.        |
| Float:minY  | The Y coordinate for the south side of the player gangzone.       |
| Float:maxX  | The X coordinate for the east side of the player gangzone.        |
| Float:maxY  | The Y coordinate for the north side of the player gangzone.       |

## Returns

The ID of the created player gangzone, returns **-1** if not created

## Examples

```c
// This variable is used to store the id of the gangzone
// so that we can use it throught the script
new gGangZoneID[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    // Create the gangzone
    gGangZoneID[playerid] = CreatePlayerGangZone(playerid, 2236.1475, 2424.7266, 2319.1636, 2502.4348);
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

This function merely CREATES the gangzone, you must use [PlayerGangZoneShow](PlayerGangZoneShow) to show it.

:::

## Related Functions

- [PlayerGangZoneDestroy](PlayerGangZoneDestroy): Destroy player gangzone.
- [PlayerGangZoneShow](PlayerGangZoneShow): Show player gangzone in a color.
- [PlayerGangZoneHide](PlayerGangZoneHide): Hide player gangzone.
- [PlayerGangZoneFlash](PlayerGangZoneFlash): Start player gangzone flash.
- [PlayerGangZoneStopFlash](PlayerGangZoneStopFlash): Stop player gangzone flash.
- [PlayerGangZoneGetColour](PlayerGangZoneGetColour): Get the colour of a player gangzone.
- [PlayerGangZoneGetFlashColour](PlayerGangZoneGetFlashColour): Get the flashing colour of a player gangzone.
- [PlayerGangZoneGetPos](PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
- [IsValidPlayerGangZone](IsValidPlayerGangZone): Check if the player gangzone valid.
- [IsPlayerInPlayerGangZone](IsPlayerInPlayerGangZone): Check if the player in player gangzone.
- [IsPlayerGangZoneVisible](IsPlayerGangZoneVisible): Check if the player gangzone is visible.
- [IsPlayerGangZoneFlashing](IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
- [UsePlayerGangZoneCheck](UsePlayerGangZoneCheck): Enables the callback when a player enters/leaves this zone.

## GangZone Editors

- [Prineside DevTools GangZone Editor](https://dev.prineside.com/en/gtasa_gangzone_editor/)
