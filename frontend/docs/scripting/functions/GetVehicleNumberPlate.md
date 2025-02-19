---
title: GetVehicleNumberPlate
sidebar_label: GetVehicleNumberPlate
description: Get the number plate of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the number plate of a vehicle.

## Parameters

| Name                 | Description                                                 |
|----------------------|-------------------------------------------------------------|
| vehicleid            | The ID of the vehicle.                                      |
| plate[]              | An array into which to store the name, passed by reference. |
| len = sizeof (plate) | The length of the plate that should be stored.              |

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    SetVehicleNumberPlate(vehicleid, "ABCD 123");

    new numberPlate[16];
    GetVehicleNumberPlate(vehicleid, numberPlate);
    // numberPlate = "ABCD 123"
    return 1;
}
```

## Related Functions

- [SetVehicleNumberPlate](SetVehicleNumberPlate): Set a vehicle numberplate.
