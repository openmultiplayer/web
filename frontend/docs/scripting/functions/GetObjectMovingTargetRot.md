---
title: GetObjectMovingTargetRot
sidebar_label: GetObjectMovingTargetRot
description: Get the move target rotation of an object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the move target rotation of an object.

| Name             | Description                                                                       |
| ---------------- | --------------------------------------------------------------------------------- |
| objectid         | The ID of the object to get the move target rotation of.                          |
| &Float:rotationX | A float variable in which to store the rotationX coordinate, passed by reference. |
| &Float:rotationY | A float variable in which to store the rotationY coordinate, passed by reference. |
| &Float:rotationZ | A float variable in which to store the rotationZ coordinate, passed by reference. |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist.

## Examples

```c
new objectid = CreateObject(968, 1023.79541, -943.75879, 42.31450,   0.00000, 0.00000, 10.00000);
MoveObject(objectid, 1023.79541, -943.75879, 42.31450,  0.8,   0.00000, -90.00000, 10.00000);

new
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetObjectMovingTargetRot(objectid, rotationX, rotationY, rotationZ);
// rotationX = 0.00000
// rotationY = -90.00000
// rotationZ = 10.00000
```

## Related Functions

- [GetObjectMovingTargetPos](GetObjectMovingTargetPos): Get the move target position of an object.
- [GetPlayerObjectMovingTargetRot](GetPlayerObjectMovingTargetRot): Get the move target rotation of a player-object.
