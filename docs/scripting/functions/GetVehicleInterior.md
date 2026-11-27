---
title: "GetVehicleInterior | open.mp"
description: "Get the interior id of a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleInterior
language: en
---

# GetVehicleInterior

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the interior id of a vehicle.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Return Values

Returns vehicle interior id.

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    LinkVehicleToInterior(vehicleid, 15);

    new interiorid = GetVehicleInterior(vehicleid);
    // interiorid = 15
    return 1;
}
```

## Related Functions

-   [LinkVehicleToInterior](https://open.mp/docs/scripting/functions/LinkVehicleToInterior): Links a vehicle to an interior.
