---
title: "HideVehicle | open.mp"
description: "Hides a vehicle from the game."
canonical: https://open.mp/docs/scripting/functions/HideVehicle
language: en
---

# HideVehicle

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

warning

This function has not yet been implemented.

## Description

Hides a vehicle from the game.

## Parametes

| Name | Description |
| --- | --- |
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

-   [ShowVehicle](https://open.mp/docs/scripting/functions/ShowVehicle): Shows the hidden vehicle.
-   [IsVehicleHidden](https://open.mp/docs/scripting/functions/IsVehicleHidden): Checks if a vehicle is hidden.
