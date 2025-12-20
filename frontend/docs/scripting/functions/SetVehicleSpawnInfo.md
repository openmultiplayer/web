---
title: SetVehicleSpawnInfo
sidebar_label: SetVehicleSpawnInfo
description: Adjusts vehicle model, spawn location, colours, respawn delay and interior.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Adjusts vehicle model, spawn location, colours, respawn delay and interior.

## Parameters

| Name              | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| vehicleid         | The ID of the vehicle.                                      |
| modelid           | [Vehicle model](../resources/vehicleid) id to set.          |
| Float:spawnX      | The X coordinate to set.                                    |
| Float:spawnY      | The Y coordinate to set.                                    |
| Float:spawnZ      | The Z coordinate to set.                                    |
| Float:angle       | The angle to set.                                           |
| colour1           | The [vehicle colour](../resources/vehiclecolorid) 1 to set. |
| colour2           | The [vehicle colour](../resources/vehiclecolorid) 2 to set. |
| respawnDelay = -2 | The vehicle respawn delay to set.                           |
| interior = -2     | The interior id to set.                                     |

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    SetVehicleSpawnInfo(vehicleid, 522, 2096.0417, -1314.1062, 24.0078, 0.0000, 1, 7);
    return 1;
}
```

## Related Functions

- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): Gets the vehicle spawn location and colours.
