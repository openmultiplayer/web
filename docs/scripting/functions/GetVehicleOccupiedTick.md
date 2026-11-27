---
title: "GetVehicleOccupiedTick | open.mp"
description: "Get the occupied tick of a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleOccupiedTick
language: en
---

# GetVehicleOccupiedTick

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the occupied tick of a vehicle.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Return Values

Returns occupied tick in milliseconds.

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new occupiedTick = GetVehicleOccupiedTick(vehicleid);
    printf("Vehicle ID %d occupied tick: %d ms", vehicleid, occupiedTick);
    return 1;
}
```

## Related Functions

-   [SetVehicleOccupiedTick](https://open.mp/docs/scripting/functions/SetVehicleOccupiedTick): Set the occupied tick of a vehicle.
