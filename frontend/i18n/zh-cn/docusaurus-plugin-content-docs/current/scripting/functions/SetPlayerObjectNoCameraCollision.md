---
title: SetPlayerObjectNoCameraCollision
sidebar_label: SetPlayerObjectNoCameraCollision
description: Toggles a player object camera collision.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Toggles a player object camera collision.

| Name     | Description                              |
| -------- | ---------------------------------------- |
| playerid | The playerID the object belongs to.      |
| objectid | The ID of the object you want to toggle. |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist.

## Examples

```c
public OnPlayerObjectMoved(playerid, objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetPlayerObjectPos(playerid, objectid, objX, objY, objZ);
    if (objX >= 3000.0 && objY >= 3000.0)
    {
        SetPlayerObjectNoCameraCollision(playerid, objectid);
    }
    return 1;
}
```

## Notes

:::tip

This does not work inside the normal SA map boundaries.

:::

## Related Functions

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): Disables collisions between camera and object.
