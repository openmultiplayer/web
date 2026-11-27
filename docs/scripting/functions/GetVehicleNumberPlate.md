---
title: "GetVehicleNumberPlate | open.mp"
description: "Get the number plate of a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleNumberPlate
language: en
---

# GetVehicleNumberPlate

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the number plate of a vehicle.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |
| plate\[\] | An array into which to store the name, passed by reference. |
| len = sizeof (plate) | The length of the plate that should be stored. |

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

-   [SetVehicleNumberPlate](https://open.mp/docs/scripting/functions/SetVehicleNumberPlate): Set a vehicle numberplate.
