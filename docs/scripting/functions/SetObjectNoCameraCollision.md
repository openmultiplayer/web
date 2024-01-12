---
title: SetObjectNoCameraCollision
description: Disable collisions between players' cameras and the specified object.
tags: ["camera"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Disable collisions between players' cameras and the specified object.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| objectid | The ID of the object to disable camera collisions on. |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist.

## Examples

```c
public OnObjectMoved(objectid)
{
    new Float:objX, Float:objY, Float:objZ;
    GetObjectPos(objectid, objX, objY, objZ);
    if (objX >= 3000.0 || objY >= 3000.0 || objX <= -3000.0 || objY <= -3000.0)
    {
        SetObjectNoCameraCollision(objectid);
    }
    return 1;
}
```

## Notes

:::tip

This only works outside the map boundaries (past -3000/3000 units on the x and/or y axis).

:::

## Related Functions

- [HasObjectCameraCollision](HasObjectCameraCollision): Checks if an object has camera collision enabled.
- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): Disables collisions between camera and player object.
