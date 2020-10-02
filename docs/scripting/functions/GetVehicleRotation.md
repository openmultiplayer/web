---
id: GetVehicleRotation
title: GetVehicleRotation
description: Get the rotation of a vehicle on the XYZ axis.
tags: []
---

## Description

Get the rotation of a vehicle on the XYZ axis.  

## Parameters

|Name       |Description
|-          | -
| vehicleid | The ID of the vehicle to get the rotation of.
| Float:rx  | The variable to store the X (pitch) rotation, passed by reference.
| Float:ry  | The variable to store the Y (roll) rotation, passed by reference.
| Float:rz  | The variable to store the Z (yaw) rotation, passed by reference.

## Return Values

This function does not return any specific values.  

:::warning

* There is no 'set' variation of this function; you can not SET a vehicle's rotation (apart from the [Z angle](https://www.open.mp/docs/scripting/functions/SetVehicleZAngle "SetVehicleZAngle"))
* To use this function you must define it.
* This function works accurately only on occupied vehicles. The reason is that [GetVehicleRotationQuat](https://www.open.mp/docs/scripting/functions/GetVehicleRotationQuat "GetVehicleRotationQuat") starts returning an invalid quaternion after an unoccupied vehicle's position has been updated by a player.

:::
  
## Example Usage

```c
//GetVehicleRotation Created by IllidanS4
stock GetVehicleRotation(vehicleid,&Float:rx,&Float:ry,&Float:rz){
    new Float:qw,Float:qx,Float:qy,Float:qz;
    GetVehicleRotationQuat(vehicleid,qw,qx,qy,qz);
    rx = asin(2*qy*qz-2*qx*qw);
    ry = -atan2(qx*qz+qy*qw,0.5-qx*qx-qy*qy);
    rz = -atan2(qx*qy+qz*qw,0.5-qx*qx-qz*qz);
}
```

## Related Functions

* [GetVehicleZAngle](../functions/GetVehicleZAngle "GetVehicleZAngle"): Check the current angle of a vehicle.
* [GetVehicleRotationQuat](../functions/GetVehicleRotationQuat "GetVehicleRotationQuat"): Get the quaternion rotation of a vehicle.
