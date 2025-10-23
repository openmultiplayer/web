---
title: GetVehicleRotation
sidebar_label: GetVehicleRotation
description: Returns a vehicle's rotation as euler.
tags: ["vehicle"]
---

## Description

Returns a vehicle's rotation as euler.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle to get the rotation of.                             |
| &Float:x  | A float variable in which to store the X axis angle, passed by reference. |
| &Float:y  | A float variable in which to store the Y axis angle, passed by reference. |
| &Float:z  | A float variable in which to store the Z asix angle, passed by reference. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the vehicle specified does not exist.

The vehicle's rotation is stored in the specified variables.

## Examples

```c
new
    Float:x,
    Float:y,
    Float:z;

GetVehicleRotation(vehicleid, x, y, z);
```

## Notes

:::tip

- There is no 'set' variation of this function; you can not SET a vehicle's rotation (apart from the Z angle)
- This function may return incorrect values for unoccupied vehicles. The reason is that the third row of the vehicle's internal rotation matrix gets corrupted if it gets updated while unoccupied.

:::

## Related Functions

- [GetVehicleZAngle](GetVehicleZAngle): Check the current angle of a vehicle.
- [GetVehicleRotationQuat](GetVehicleRotationQuat): Get the rotation of a vehicle on all axes as a quaternion.
- [GetVehicleMatrix](GetVehicleMatrix): Gets the actual rotation matrix of the vehicle.
