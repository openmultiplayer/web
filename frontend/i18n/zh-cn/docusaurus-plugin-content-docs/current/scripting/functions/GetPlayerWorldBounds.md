---
title: GetPlayerWorldBounds
description: Get a player's world boundaries.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get a player's world boundaries.

| Name        | Description                                                                  |
|-------------|------------------------------------------------------------------------------|
| playerid    | The ID of the player.                                                        |
| &Float:maxX | A float variable in which to store the maxX coordinate, passed by reference. |
| &Float:minX | A float variable in which to store the minX coordinate, passed by reference. |
| &Float:maxY | A float variable in which to store the maxY coordinate, passed by reference. |
| &Float:minY | A float variable in which to store the minY coordinate, passed by reference. |

## Returns

This function does not return a specific value.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    SetPlayerWorldBounds(playerid, -1212.0, -1420.0, 2628.5, 2430.5);

    new
        Float:maxX,
        Float:minX,
        Float:maxY,
        Float:minY;

    GetPlayerWorldBounds(playerid, maxX, minX, maxY, minY);
    // maxX = -1212.0
    // minX = -1420.0
    // maxY = 2628.5
    // minY = 2430.5
    return 1;
}
```

## Related Functions

- [SetPlayerWorldBounds](SetPlayerWorldBounds): Set the world boundaries for a player. Players can not go out of the boundaries (they will be pushed back in).
- [ClearPlayerWorldBounds](ClearPlayerWorldBounds): Reset the player's world boundaries to default world boundaries.
