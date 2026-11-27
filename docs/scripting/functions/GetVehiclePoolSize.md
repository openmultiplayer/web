---
title: "GetVehiclePoolSize | open.mp"
description: "Gets the highest vehicleid currently in use on the server."
canonical: https://open.mp/docs/scripting/functions/GetVehiclePoolSize
language: en
---

# GetVehiclePoolSize

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Gets the highest vehicleid currently in use on the server. Note that in SA:MP this function is broken and will return `0` even when there are no vehicles. open.mp correct this to return `-1`, but also deprecate the function in favour of `MAX_VEHICLES` or `foreach`.

## Examples

```c
RepairAllVehicles()
{
    // vehicleids start at 1
    for (new i = 1, j = GetVehiclePoolSize(); i <= j; i++)
    {
        RepairVehicle(i);
    }
}
```

## Related Functions

-   [GetPlayerPoolSize](https://open.mp/docs/scripting/functions/GetPlayerPoolSize): Gets the highest playerid connected to the server.
