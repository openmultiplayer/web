---
title: GetPlayerObjectMoveSpeed
sidebar_label: GetPlayerObjectMoveSpeed
description: Get the move speed of a player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the move speed of a player-object.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player.                                 |
| objectid | The ID of the player-object to get the move speed of. |

## Returns

Returns the move speed as float.

## Examples

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

new Float:moveSpeed = GetPlayerObjectMoveSpeed(playerid, playerobjectid);
// moveSpeed = 0.8
```

## Related Functions

- [MovePlayerObject](MovePlayerObject): Move a player object to a new position with a set speed.
- [SetPlayerObjectMoveSpeed](SetPlayerObjectMoveSpeed): Set the move speed of a player-object.
- [GetObjectMoveSpeed](GetObjectMoveSpeed): Get the move speed of an object.
