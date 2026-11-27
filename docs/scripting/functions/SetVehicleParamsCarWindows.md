---
title: "SetVehicleParamsCarWindows | open.mp"
description: "Allows you to open and close the windows of a vehicle."
canonical: https://open.mp/docs/scripting/functions/SetVehicleParamsCarWindows
language: en
---

# SetVehicleParamsCarWindows

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Allows you to open and close the windows of a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to set the window state of |
| frontLeft | The state of the driver's window. **0** to open, **1** to close. |
| frontRight | The state of the passenger window. **0** to open, **1** to close. |
| rearLeft | The state of the rear left window (if available). **0** to open, **1** to close. |
| rearRight | The state of the rear right window (if available). **0** to open, **1** to close. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the vehicle does not exist.

## Related Functions

-   [SetVehicleParamsCarDoors](https://open.mp/docs/scripting/functions/SetVehicleParamsCarDoors): Open and close the doors of a vehicle.
-   [GetVehicleParamsCarDoors](https://open.mp/docs/scripting/functions/GetVehicleParamsCarDoors): Retrive the current state of a vehicle's doors.
-   [GetVehicleParamsCarWindows](https://open.mp/docs/scripting/functions/GetVehicleParamsCarWindows): Retrive the current state of a vehicle's windows
