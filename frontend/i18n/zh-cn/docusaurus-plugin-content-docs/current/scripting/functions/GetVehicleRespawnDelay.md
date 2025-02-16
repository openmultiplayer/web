---
title: GetVehicleRespawnDelay
sidebar_label: GetVehicleRespawnDelay
description: Get the respawn delay of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the respawn delay of a vehicle.

## Parameters

| Name      | Description            |
|-----------|------------------------|
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

- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): Set the respawn delay of a vehicle.
