---
title: GetVehicleColours
sidebar_label: GetVehicleColours
description: Gets the vehicle colours.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the vehicle colours.

## Parameters

| Name      | Description                                                          |
| --------- | -------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle.                                               |
| &colour1  | A variable in which to store the colour1 value, passed by reference. |
| &colour2  | A variable in which to store the colour2 value, passed by reference. |

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    new
        colour1,
        colour2;

    GetVehicleColours(vehicleid, colour1, colour2);
    // colour1 = 6
    // colour2 = 0
    return 1;
}
```

## Related Functions

- [ChangeVehicleColours](ChangeVehicleColours): Change a vehicle's primary and secondary colors.

## Related Resources

- [Vehicle Colour IDs](../resources/vehiclecolorid)
