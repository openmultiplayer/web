---
title: GetVehicleRespawnTick
description: Get the respawn tick of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the respawn tick of a vehicle.

## Parameters

| Name      | Description            |
|-----------|------------------------|
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

- [SetVehicleRespawnTick](SetVehicleRespawnTick): Set the respawn tick of a vehicle.
