---
title: "SetPlayerWorldBounds | open.mp"
description: "Set the world boundaries for a player."
canonical: https://open.mp/docs/scripting/functions/SetPlayerWorldBounds
language: en
---

# SetPlayerWorldBounds

## Description

Set the world boundaries for a player. Players can not go out of the boundaries (they will be pushed back in).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to set the world boundaries of. |
| Float:maxX | The maximum X coordinate the player can go to. |
| Float:minX | The minimum X coordinate the player can go to. |
| Float:maxY | The maximum Y coordinate the player can go to. |
| Float:minY | The minimum Y coordinate the player can go to. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, 20.0, 0.0, 20.0, 0.0);
    return 1;
}
```

```text
               (North)
                ymax
            |----------|
            |          |
(West) xmin |          | xmax (East)
            |          |
            |----------|
                ymin
               (South)
```

## Notes

tip

A player's world boundaries can be reset by setting them to 20000.0000, -20000.0000, 20000.0000, -20000.0000. These are the default values. You can also use [ClearPlayerWorldBounds](https://open.mp/docs/scripting/functions/ClearPlayerWorldBounds).

warning

This function doesn't work in [interiors](https://open.mp/docs/scripting/resources/interiorids)!

## Related Functions

-   [ClearPlayerWorldBounds](https://open.mp/docs/scripting/functions/ClearPlayerWorldBounds): Reset the player's world boundaries to default world boundaries.
-   [GetPlayerWorldBounds](https://open.mp/docs/scripting/functions/GetPlayerWorldBounds): Get a player's world boundaries.
-   [GangZoneCreate](https://open.mp/docs/scripting/functions/GangZoneCreate): Create a gangzone.
