---
title: "GetVehicleRespawnDelay | open.mp"
description: "Get the respawn delay of a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleRespawnDelay
language: en
---

# GetVehicleRespawnDelay

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the respawn delay of a vehicle.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new respawnDelay = GetVehicleRespawnDelay(vehicleid);
    // respawnDelay = 60
    return 1;
}
```

## Related Functions

-   [SetVehicleRespawnDelay](https://open.mp/docs/scripting/functions/SetVehicleRespawnDelay): Set the respawn delay of a vehicle.
