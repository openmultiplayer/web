---
title: "GetVehicleDriver | open.mp"
description: "Get the playerid of the person driving the vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleDriver
language: en
---

# GetVehicleDriver

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the playerid of the person driving the vehicle.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the driver of. |

## Returns

Returns the driver ID (player ID).

`INVALID_PLAYER_ID` - The vehicle has no driver.

## Examples

```c
public OnPlayerExitVehicle(playerid, vehicleid)
{
    new driverid = GetVehicleDriver(vehicleid);
    if (driverid != INVALID_PLAYER_ID)
    {
        SendClientMessage(driverid, -1, "Someone is exiting your vehicle.");
    }
    return 1;
}
```

## Related Functions

-   [GetVehicleLastDriver](https://open.mp/docs/scripting/functions/GetVehicleLastDriver): Get the last driver of a vehicle.
