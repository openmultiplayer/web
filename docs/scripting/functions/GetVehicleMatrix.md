---
title: GetVehicleMatrix
description: Gets the actual rotation matrix of the vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the actual rotation matrix of the vehicle.

## Parameters

| Name          | Description                                                                    |
|---------------|--------------------------------------------------------------------------------|
| vehicleid     | The ID of the vehicle.                                                         |
| &Float:rightX | A float variable in which to store the rightX coordinate, passed by reference. |
| &Float:rightY | A float variable in which to store the rightY coordinate, passed by reference. |
| &Float:rightZ | A float variable in which to store the rightZ coordinate, passed by reference. |
| &Float:upX    | A float variable in which to store the upX coordinate, passed by reference.    |
| &Float:upY    | A float variable in which to store the upY coordinate, passed by reference.    |
| &Float:upZ    | A float variable in which to store the upZ coordinate, passed by reference.    |
| &Float:atX    | A float variable in which to store the atX coordinate, passed by reference.    |
| &Float:atY    | A float variable in which to store the atY coordinate, passed by reference.    |
| &Float:atZ    | A float variable in which to store the atZ coordinate, passed by reference.    |

## Examples

```c
new 
    Float:rightX,
    Float:rightY,
    Float:rightZ,
    Float:upX,
    Float:upY,
    Float:upZ,
    Float:atX,
    Float:atY,
    Float:atZ;

GetVehicleMatrix(vehicleid, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
```

## Related Functions

- [GetVehicleRotationQuat](GetVehicleRotationQuat): Returns a vehicle's rotation on all axes as a quaternion.
