---
title: GetVehiclePaintjob
description: Gets the vehicle's paintjob id.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the vehicle's paintjob id.

## Parameters

| Name      | Description            |
|-----------|------------------------|
| vehicleid | The ID of the vehicle. |

## Return Values

Returns the [paintjob id](../resources/paintjobs).

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

- [ChangeVehiclePaintjob](ChangeVehiclePaintjob): Change a vehicle's paintjob
