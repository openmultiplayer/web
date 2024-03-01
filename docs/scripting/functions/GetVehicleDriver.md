---
title: GetVehicleDriver
description: Get the playerid of the person driving the vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the playerid of the person driving the vehicle. 

## Parameters

| Name      | Description                                 |
|-----------|---------------------------------------------|
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

- [GetVehicleLastDriver](GetVehicleLastDriver): Get the last driver of a vehicle.
