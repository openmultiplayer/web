---
title: "GetVehicleRotationQuat | open.mp"
description: "Returns a vehicle's rotation on all axes as a quaternion."
canonical: https://open.mp/docs/scripting/functions/GetVehicleRotationQuat
language: en
---

# GetVehicleRotationQuat

## Description

Returns a vehicle's rotation on all axes as a [quaternion](https://en.wikipedia.org/wiki/Quaternions_and_spatial_rotation).

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the rotation of. |
| &Float:w | A float variable in which to store the first quaternion angle, passed by reference. |
| &Float:x | A float variable in which to store the second quaternion angle, passed by reference. |
| &Float:y | A float variable in which to store the third quaternion angle, passed by reference. |
| &Float:z | A float variable in which to store the fourth quaternion angle, passed by reference. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the vehicle specified does not exist.

The vehicle's rotation is stored in the specified variables.

## Examples

```c
new
    Float:w,
    Float:x,
    Float:y,
    Float:z;

GetVehicleRotationQuat(vehicleid, w, x, y, z);
```

## Notes

note

There is no 'set' variation of this function; you can not SET a vehicle's rotation (apart from the [Z angle](https://open.mp/docs/scripting/functions/SetVehicleZAngle))

warning

This function may return incorrect values for unoccupied vehicles. The reason is that the third row of the vehicle's internal rotation matrix gets corrupted if it gets updated while unoccupied.

## Related Functions

-   [GetVehicleZAngle](https://open.mp/docs/scripting/functions/GetVehicleZAngle): Check the current angle of a vehicle.
-   [GetVehicleRotation](https://open.mp/docs/scripting/functions/GetVehicleRotation): Get the rotation of a vehicle on the XYZ axis.
-   [GetVehicleMatrix](https://open.mp/docs/scripting/functions/GetVehicleMatrix): Gets the actual rotation matrix of the vehicle.
