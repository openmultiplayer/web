---
title: GetVehicleDriver
description: Get the playerid of the person driving the vehicle.
---

:::warning

This function requires the Open Multiplayer server software. You can get that [here](https://github.com/openmultiplayer/open.mp)

This function requires `omp-stdlib` provided by the Open Multiplayer server software. You can get that [here](https://github.com/openmultiplayer/omp-stdlib)

:::

## Description

Get the playerid of the person driving the vehicle. 


| Name          | Description                                                                  |
| ------------- | ---------------------------------------------------------------------------- |
| vehicleid     | The ID of the vehicle to get the driver of.                                  |

## Returns

`playerid` - The playerid of the person driving. 

`INVALID_VEHICLE_ID` - The vehicle does not exist.

`INVALID_PLAYER_ID` - The vehicle has no driver. 

## Examples

```c
#include <a_samp>
#include <omp>

public OnPlayerExitVehicle(playerid, vehicleid)
{
    new driverid = GetVehicleDriver(vehicleid);
    if(driverid != INVALID_PLAYER_ID)
    {
        SendClientMessage(driverid, -1, "Someone is exiting your vehicle.");
    }
    return 1;
}
```
