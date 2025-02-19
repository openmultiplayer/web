---
title: GetObjectMoveSpeed
sidebar_label: GetObjectMoveSpeed
description: Get the move speed of an object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the move speed of an object.

| Name     | Description                                    |
|----------|------------------------------------------------|
| objectid | The ID of the object to get the move speed of. |

## Returns

Returns the move speed as float.

## Examples

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

new Float:moveSpeed = GetObjectMoveSpeed(objectid);
// moveSpeed = 0.8
```

## Related Functions

- [MoveObject](MoveObject): Move an object to a new position with a set speed.
- [SetObjectMoveSpeed](SetObjectMoveSpeed): Set the move speed of an object.
- [GetPlayerObjectMoveSpeed](GetPlayerObjectMoveSpeed): Get the move speed of a player-object.
