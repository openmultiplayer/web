---
title: "ShowVehicle | open.mp"
description: "Shows the hidden vehicle."
canonical: https://open.mp/docs/scripting/functions/ShowVehicle
language: en
---

# ShowVehicle

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

warning

This function has not yet been implemented.

## Description

Shows the hidden vehicle.

## Parametes

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to show. |

## Examples

```c
new g_Vehicle;

public OnGameModeInit()
{
    g_Vehicle = CreateVehicle(536, 2496.5034, 5.6658, 27.2247, 180.0000, -1, -1, 60);
    HideVehicle(g_Vehicle);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/showvehicle", true))
    {
        if (IsVehicleHidden(g_Vehicle))
        {
            ShowVehicle(g_Vehicle);
        }
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [HideVehicle](https://open.mp/docs/scripting/functions/HideVehicle): Hides a vehicle from the game.
-   [IsVehicleHidden](https://open.mp/docs/scripting/functions/IsVehicleHidden): Checks if a vehicle is hidden.
