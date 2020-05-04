---
id: SetVehicleParamsCarWindows
title: SetVehicleParamsCarWindows
description: Allows you to open and close the windows of a vehicle.
tags: ["vehicle"]
---

<TagLinks />

:::warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

## Description

Allows you to open and close the windows of a vehicle.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle to set the window state of                          |
| driver    | The state of the driver's window. 0 to open, 1 to close.                  |
| passenger | The state of the passenger window. 0 to open, 1 to close.                 |
| backleft  | The state of the rear left window (if available). 0 to open, 1 to close.  |
| backright | The state of the rear right window (if available). 0 to open, 1 to close. |

## Returns

[edit]

## Related Functions

- SetVehicleParamsCarDoors: Open and close the doors of a vehicle.
- GetVehicleParamsCarDoors: Retrive the current state of a vehicle's doors.
- GetVehicleParamsCarWindows: Retrive the current state of a vehicle's windows
