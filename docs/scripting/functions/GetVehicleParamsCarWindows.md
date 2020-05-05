---
id: GetVehicleParamsCarWindows
title: GetVehicleParamsCarWindows
description: Allows you to retrieve the current state of a vehicle's windows.
tags: ['vehicle']
---

:::warning

This function was added in SA-MP 0.3.7  and will not work in earlier versions!

:::

## Description

Allows you to retrieve the current state of a vehicle's windows


| Name | Description |
|------|-------------|
|vehicleid | The ID of the vehicle|
|&driver | The integer to save the state of the drivers window to.|
|&passenger | The integer to save the state of the passengers window to.|
|&backleft | The integer to save the state of the rear left window to (if available).|
|&backright | The integer to save the state of the rear right window to (if available).|


## Returns

 The vehicle's windows state is stored in the specified variables.


## Notes

:::tip


The values returned in each variable are as follows:

 -1: Window state not set (generally closed, unless set explicitly to -1)
 0: Open
 1: Closed



:::


## Related Functions


-  SetVehicleParamsCarWindows: Open and close the windows of a vehicle.
-  GetVehicleParamsCarDoors: Retrive the current state of a vehicle's doors.
-  SetVehicleParamsCarDoors: Open and close the doors of a vehicle.