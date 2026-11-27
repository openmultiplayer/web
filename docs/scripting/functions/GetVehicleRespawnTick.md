---
title: "GetVehicleRespawnTick | open.mp"
description: "Get the respawn tick of a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleRespawnTick
language: en
---

# GetVehicleRespawnTick

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the respawn tick of a vehicle.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Return Values

Returns respawn tick in milliseconds.

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    new respawnTick = GetVehicleRespawnTick(vehicleid);
    printf("Vehicle ID %d respawn tick: %d ms", vehicleid, respawnTick);
    return 1;
}
```

## Related Functions

-   [SetVehicleRespawnTick](https://open.mp/docs/scripting/functions/SetVehicleRespawnTick): Set the respawn tick of a vehicle.
