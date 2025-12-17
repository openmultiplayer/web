---
title: SetVehicleRespawnTick
sidebar_label: SetVehicleRespawnTick
description: Set the respawn tick of a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

This function has not yet been implemented.

:::

## Description

Set the respawn tick of a vehicle.

## Parameters

| Name      | Description            |
| --------- | ---------------------- |
| vehicleid | The ID of the vehicle. |
| ticks     | The ticks to set.      |

## Return Values

**true** - Function executed successfully.

**false** - Function failed to execute.

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(560, 2096.1917, -1328.5150, 25.1059, 0.0000, 1, 8, 60);

    SetVehicleRespawnTick(vehicleid, 300);
    return 1;
}
```

## Related Functions

- [GetVehicleRespawnTick](GetVehicleRespawnTick): Get the respawn tick of a vehicle.
