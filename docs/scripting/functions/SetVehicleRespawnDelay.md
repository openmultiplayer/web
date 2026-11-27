---
title: "SetVehicleRespawnDelay | open.mp"
description: "Set the respawn delay of a vehicle."
canonical: https://open.mp/docs/scripting/functions/SetVehicleRespawnDelay
language: en
---

# SetVehicleRespawnDelay

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Set the respawn delay of a vehicle.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |
| respawnDelay | The respawn delay (in seconds) to set. |

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    SetVehicleRespawnDelay(vehicleid, 120);
    return 1;
}
```

## Related Functions

-   [GetVehicleRespawnDelay](https://open.mp/docs/scripting/functions/GetVehicleRespawnDelay): Get the respawn delay of a vehicle.
