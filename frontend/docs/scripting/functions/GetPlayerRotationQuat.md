---
title: GetPlayerRotationQuat
sidebar_label: GetPlayerRotationQuat
description: Returns a player's rotation on all axes as a quaternion.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Returns a player's rotation on all axes as a quaternion.

| Name     | Description                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| playerid | The ID of the player to get the rotation of.                                         |
| &Float:w | A float variable in which to store the first quaternion angle, passed by reference.  |
| &Float:x | A float variable in which to store the second quaternion angle, passed by reference. |
| &Float:y | A float variable in which to store the third quaternion angle, passed by reference.  |
| &Float:z | A float variable in which to store the fourth quaternion angle, passed by reference. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the player specified does not exist.

The player's rotation is stored in the specified variables.

## Examples

```c
new
    Float:w,
    Float:x,
    Float:y,
    Float:z;

GetPlayerRotationQuat(playerid, w, x, y, z);
```

## Notes

:::tip

There is no 'set' variation of this function; you can not SET a player's rotation ( apart from the facing angle (Z rotation) ).

:::

## Related Functions

- [SetPlayerFacingAngle](SetPlayerFacingAngle): Set a player's facing angle (Z rotation).
- [GetPlayerFacingAngle](GetPlayerFacingAngle): Check where a player is facing.
- [GetVehicleRotationQuat](GetVehicleRotationQuat): Get the quaternion rotation of a vehicle.
