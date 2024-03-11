---
title: SetVehicleParamsCarDoors
description: Allows you to open and close the doors of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Allows you to open and close the doors of a vehicle.

| Name            | Description                                                             |
| --------------- | ----------------------------------------------------------------------- |
| vehicleid       | The ID of the vehicle to set the door state of                          |
| bool:frontLeft  | The state of the driver's door. 1 to open, 0 to close.                  |
| bool:frontRight | The state of the passenger door. 1 to open, 0 to close.                 |
| bool:rearLeft   | The state of the rear left door (if available). 1 to open, 0 to close.  |
| bool:rearRight  | The state of the rear right door (if available). 1 to open, 0 to close. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the vehicle does not exist.

## Related Functions

- [GetVehicleParamsCarDoors](GetVehicleParamsCarDoors): Retrive the current state of a vehicle's doors.
- [SetVehicleParamsCarWindows](SetVehicleParamsCarWindows): Open and close the windows of a vehicle.
- [GetVehicleParamsCarWindows](GetVehicleParamsCarWindows): Retrive the current state of a vehicle's windows
