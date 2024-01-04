---
title: HideVehicle
description: Hides a vehicle from the game.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Hides a vehicle from the game.

## Parametes

| Name      | Description                    |
|-----------|--------------------------------|
| vehicleid | The ID of the vehicle to hide. |

## Examples

```c
public OnGameModeInit()
{
    new vehicleid = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);
    HideVehicle(vehicleid);
    return 1;
}
```

## Related Functions

- [ShowVehicle](ShowVehicle): Shows the hidden vehicle.
- [IsVehicleHidden](IsVehicleHidden): Checks if a vehicle is hidden.
