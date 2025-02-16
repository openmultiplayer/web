---
title: SetPlayerObjectMoveSpeed
sidebar_label: SetPlayerObjectMoveSpeed
description: Set the move speed of a player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Set the move speed of a player-object.

| Name        | Description                                               |
|-------------|-----------------------------------------------------------|
| playerid    | The ID of the player.                                     |
| objectid    | The ID of the player-object to set the move speed of.     |
| Float:speed | The speed at which to move the object (units per second). |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist.

## Examples

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

SetPlayerObjectMoveSpeed(playerid, playerobjectid, 1.5);
// Move speed changed from 0.8 to 1.5
```

## Related Functions

- [MovePlayerObject](MovePlayerObject): Move a player object to a new position with a set speed.
- [GetPlayerObjectMoveSpeed](GetPlayerObjectMoveSpeed): Get the move speed of a player-object.
- [SetObjectMoveSpeed](SetObjectMoveSpeed): Set the move speed of an object.
