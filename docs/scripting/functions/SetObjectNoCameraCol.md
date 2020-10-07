---
id: SetObjectNoCameraCol
title: SetObjectNoCameraCol
description: Disable collisions between players' cameras and the specified object.
tags: []
---

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Disable collisions between players' cameras and the specified object.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| objectid | The ID of the object to disable camera collisions on. |

## Returns

1: The function was executed successfully.

0: The function failed to execute. The object specified does not exist.

## Examples

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCol(objectid);
    }
    return 1;
}
```

## Notes

:::tip

This only works outside the map boundaries (past -3000/3000 units on the x and/or y axis).

:::

## Related Functions

- [SetPlayerObjectNoCameraCol](SetPlayerObjectNoCameraCol.md): Disables collisions between camera and player object.
