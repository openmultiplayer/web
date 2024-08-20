---
title: GetVehicleSpawnInfo
description: Gets the vehicle spawn location and colours.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the vehicle spawn location and colours.

## Parameters

| Name          | Description                                                                    |
|---------------|--------------------------------------------------------------------------------|
| vehicleid     | The ID of the vehicle.                                                         |
| &Float:spawnX | A float variable in which to store the spawnX coordinate, passed by reference. |
| &Float:spawnY | A float variable in which to store the spawnY coordinate, passed by reference. |
| &Float:spawnZ | A float variable in which to store the spawnZ coordinate, passed by reference. |
| &Float:angle  | A float variable in which to store the angle coordinate, passed by reference.  |
| &colour1      | A variable in which to store the colour1 value, passed by reference.           |
| &colour2      | A variable in which to store the colour2 value, passed by reference.           |

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 6, 0, 100);

    new 
        Float:spawnX,
        Float:spawnY,
        Float:spawnZ,
        Float:angle,
        colour1,
        colour2;

    GetVehicleSpawnInfo(vehicleid, spawnX, spawnY, spawnZ, angle, colour1, colour2);
    return 1;
}
```

## Related Functions

- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): Adjusts vehicle model, spawn location, colours, respawn delay and interior.
