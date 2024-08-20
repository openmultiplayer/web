---
title: GetVehiclePoolSize
description: Gets the highest vehicleid currently in use on the server.
tags: ["vehicle"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Gets the highest vehicleid currently in use on the server.  Note that in SA:MP this function is broken and will return `0` even when there are no vehicles.  fixes.inc and open.mp correct this to return `-1`, but also deprecate the function in favour of `MAX_VEHICLES` or `foreach`.

## Examples

```c
RepairAllVehicles()
{
    // vehicleids start at 1
    for(new i = 1, j = GetVehiclePoolSize(); i <= j; i++)
    {
        RepairVehicle(i);
    }
}
```

## Related Functions

- [GetPlayerPoolSize](GetPlayerPoolSize): Gets the highest playerid connected to the server.
