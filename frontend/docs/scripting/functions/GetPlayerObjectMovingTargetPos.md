---
title: GetPlayerObjectMovingTargetPos
description: Get the move target position of a player-object.
tags: ["player", "object", "playerobject"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the move target position of a player-object.

| Name           | Description                                                                     |
|----------------|---------------------------------------------------------------------------------|
| playerid       | The ID of the player.                                                           |
| objectid       | The ID of the player-object to get the move target position of.                 |
| &Float:targetX | A float variable in which to store the targetX coordinate, passed by reference. |
| &Float:targetY | A float variable in which to store the targetY coordinate, passed by reference. |
| &Float:targetZ | A float variable in which to store the targetZ coordinate, passed by reference. |

## Returns

`true` - The function was executed successfully.

`false` - The function failed to execute. The object specified does not exist.

## Examples

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

new 
    Float:targetX,
    Float:targetY,
    Float:targetZ;

GetPlayerObjectMovingTargetPos(playerid, playerobjectid, targetX, targetY, targetZ);
// targetX = 1003.3915
// targetY = -643.3342
// targetZ = 114.5122
```

## Related Functions

- [GetPlayerObjectMovingTargetRot](GetPlayerObjectMovingTargetRot): Get the move target rotation of a player-object.
- [GetObjectMovingTargetPos](GetObjectMovingTargetPos): Get the move target position of an object.
