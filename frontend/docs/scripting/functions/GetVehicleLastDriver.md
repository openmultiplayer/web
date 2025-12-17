---
title: GetVehicleLastDriver
sidebar_label: GetVehicleLastDriver
description: Get the last driver of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the last driver of a vehicle.

## Parameters

| Name      | Description            |
| --------- | ---------------------- |
| vehicleid | The ID of the vehicle. |

## Return Values

Returns the last driver ID (player ID).

`INVALID_PLAYER_ID` - The vehicle has no last driver.

## Examples

```c
new g_Vehicle;

public OnGameModeInit()
{
    g_Vehicle = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);
}

public OnGameModeExit()
{
    new lastDriver = GetVehicleLastDriver(g_Vehicle);
    if (lastDriver != INVALID_PLAYER_ID)
    {
        printf("Vehicle ID %d last driver: %d", g_Vehicle, lastDriver);
    }
    else
    {
        printf("Vehicle ID %d has no last driver.", g_Vehicle);
    }
}
```

## Related Functions

- [GetVehicleDriver](GetVehicleDriver): Get the playerid of the person driving the vehicle.
