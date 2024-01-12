---
title: GetObjectMovingTargetPos
description: Get the move target position of an object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the move target position of an object.

| Name           | Description                                                                     |
|----------------|---------------------------------------------------------------------------------|
| objectid       | The ID of the object to get the move target position of.                        |
| &Float:targetX | A float variable in which to store the targetX coordinate, passed by reference. |
| &Float:targetY | A float variable in which to store the targetY coordinate, passed by reference. |
| &Float:targetZ | A float variable in which to store the targetZ coordinate, passed by reference. |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist.

## Examples

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

new 
    Float:targetX,
    Float:targetY,
    Float:targetZ;

GetObjectMovingTargetPos(objectid, targetX, targetY, targetZ);
// targetX = 1003.3915
// targetY = -643.3342
// targetZ = 114.5122
```

## Related Functions

- [GetObjectMovingTargetRot](GetObjectMovingTargetRot): Get the move target rotation of an object.
- [GetPlayerObjectMovingTargetPos](GetPlayerObjectMovingTargetPos): Get the move target position of a player-object.
