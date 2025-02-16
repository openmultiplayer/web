---
title: GetVehicleOccupiedTick
sidebar_label: GetVehicleOccupiedTick
description: Get the occupied tick of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the occupied tick of a vehicle.

## Parameters

| Name      | Description            |
|-----------|------------------------|
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

- [SetVehicleOccupiedTick](SetVehicleOccupiedTick): Set the occupied tick of a vehicle.
