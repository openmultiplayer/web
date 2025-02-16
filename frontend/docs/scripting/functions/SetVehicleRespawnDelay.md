---
title: SetVehicleRespawnDelay
sidebar_label: SetVehicleRespawnDelay
description: Set the respawn delay of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Set the respawn delay of a vehicle.

## Parameters

| Name         | Description                            |
|--------------|----------------------------------------|
| vehicleid    | The ID of the vehicle.                 |
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

- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): Get the respawn delay of a vehicle.
