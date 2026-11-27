---
title: "GetVehiclePaintjob | open.mp"
description: "Gets the vehicle's paintjob id."
canonical: https://open.mp/docs/scripting/functions/GetVehiclePaintjob
language: en
---

# GetVehiclePaintjob

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the vehicle's paintjob id.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Return Values

Returns the [paintjob id](https://open.mp/docs/scripting/resources/paintjobs).

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);
    ChangeVehiclePaintjob(vehicleid, 2);

    new paintjob = GetVehiclePaintjob(vehicleid);
    // paintjob = 2
    return 1;
}
```

## Related Functions

-   [ChangeVehiclePaintjob](https://open.mp/docs/scripting/functions/ChangeVehiclePaintjob): Change a vehicle's paintjob
