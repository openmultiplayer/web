---
title: "GetPlayerObjectMoveSpeed | open.mp"
description: "Get the move speed of a player-object."
canonical: https://open.mp/docs/scripting/functions/GetPlayerObjectMoveSpeed
language: en
---

# GetPlayerObjectMoveSpeed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the move speed of a player-object.

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |
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

-   [MovePlayerObject](https://open.mp/docs/scripting/functions/MovePlayerObject): Move a player object to a new position with a set speed.
-   [SetPlayerObjectMoveSpeed](https://open.mp/docs/scripting/functions/SetPlayerObjectMoveSpeed): Set the move speed of a player-object.
-   [GetObjectMoveSpeed](https://open.mp/docs/scripting/functions/GetObjectMoveSpeed): Get the move speed of an object.
