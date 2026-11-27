---
title: "CreatePlayerGangZone | open.mp"
description: "Create player gangzone"
canonical: https://open.mp/docs/scripting/functions/CreatePlayerGangZone
language: en
---

# CreatePlayerGangZone

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Create player gangzone. This can be used as a way around the global gangzone limit.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to whom the player gangzone will be created. |
| Float:minX | The X coordinate for the west side of the player gangzone. |
| Float:minY | The Y coordinate for the south side of the player gangzone. |
| Float:maxX | The X coordinate for the east side of the player gangzone. |
| Float:maxY | The Y coordinate for the north side of the player gangzone. |

## Returns

The ID of the created player gangzone, returns **\-1** if not created

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

This function merely CREATES the gangzone, you must use [PlayerGangZoneShow](https://open.mp/docs/scripting/functions/PlayerGangZoneShow) to show it.

## Related Functions

-   [PlayerGangZoneDestroy](https://open.mp/docs/scripting/functions/PlayerGangZoneDestroy): Destroy player gangzone.
-   [PlayerGangZoneShow](https://open.mp/docs/scripting/functions/PlayerGangZoneShow): Show player gangzone in a color.
-   [PlayerGangZoneHide](https://open.mp/docs/scripting/functions/PlayerGangZoneHide): Hide player gangzone.
-   [PlayerGangZoneFlash](https://open.mp/docs/scripting/functions/PlayerGangZoneFlash): Start player gangzone flash.
-   [PlayerGangZoneStopFlash](https://open.mp/docs/scripting/functions/PlayerGangZoneStopFlash): Stop player gangzone flash.
-   [PlayerGangZoneGetColour](https://open.mp/docs/scripting/functions/PlayerGangZoneGetColour): Get the colour of a player gangzone.
-   [PlayerGangZoneGetFlashColour](https://open.mp/docs/scripting/functions/PlayerGangZoneGetFlashColour): Get the flashing colour of a player gangzone.
-   [PlayerGangZoneGetPos](https://open.mp/docs/scripting/functions/PlayerGangZoneGetPos): Get the position of a gangzone, represented by minX, minY, maxX, maxY coordinates.
-   [IsValidPlayerGangZone](https://open.mp/docs/scripting/functions/IsValidPlayerGangZone): Check if the player gangzone valid.
-   [IsPlayerInPlayerGangZone](https://open.mp/docs/scripting/functions/IsPlayerInPlayerGangZone): Check if the player in player gangzone.
-   [IsPlayerGangZoneVisible](https://open.mp/docs/scripting/functions/IsPlayerGangZoneVisible): Check if the player gangzone is visible.
-   [IsPlayerGangZoneFlashing](https://open.mp/docs/scripting/functions/IsPlayerGangZoneFlashing): Check if the player gangzone is flashing.
-   [UsePlayerGangZoneCheck](https://open.mp/docs/scripting/functions/UsePlayerGangZoneCheck): Enables the callback when a player enters/leaves this zone.

## GangZone Editors

-   [Prineside DevTools GangZone Editor](https://dev.prineside.com/en/gtasa_gangzone_editor/)
