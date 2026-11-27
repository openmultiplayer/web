---
title: "SetVehicleParamsCarDoors | open.mp"
description: "Allows you to open and close the doors of a vehicle."
canonical: https://open.mp/docs/scripting/functions/SetVehicleParamsCarDoors
language: en
---

# SetVehicleParamsCarDoors

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Allows you to open and close the doors of a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to set the door state of |
| frontLeft | The state of the driver's door. **1** to open, **0** to close. |
| frontRight | The state of the passenger door. **1** to open, **0** to close. |
| rearLeft | The state of the rear left door (if available). **1** to open, **0** to close. |
| rearRight | The state of the rear right door (if available). **1** to open, **0** to close. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the vehicle does not exist.

## Related Functions

-   [GetVehicleParamsCarDoors](https://open.mp/docs/scripting/functions/GetVehicleParamsCarDoors): Retrive the current state of a vehicle's doors.
-   [SetVehicleParamsCarWindows](https://open.mp/docs/scripting/functions/SetVehicleParamsCarWindows): Open and close the windows of a vehicle.
-   [GetVehicleParamsCarWindows](https://open.mp/docs/scripting/functions/GetVehicleParamsCarWindows): Retrive the current state of a vehicle's windows
