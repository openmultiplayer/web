---
title: SetObjectMoveSpeed
sidebar_label: SetObjectMoveSpeed
description: Set the move speed of an object.
tags: ["object"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Set the move speed of an object.

| Name        | Description                                               |
|-------------|-----------------------------------------------------------|
| objectid    | The ID of the object to set the move speed of.            |
| Float:speed | The speed at which to move the object (units per second). |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist.

## Examples

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

SetObjectMoveSpeed(objectid, 1.5);
// Move speed changed from 0.8 to 1.5
```

## Related Functions

- [MoveObject](MoveObject): Move an object to a new position with a set speed.
- [GetObjectMoveSpeed](GetObjectMoveSpeed): Get the move speed of an object.
- [SetPlayerObjectMoveSpeed](SetPlayerObjectMoveSpeed): Set the move speed of a player-object.
