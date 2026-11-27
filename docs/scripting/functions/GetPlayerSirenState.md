---
title: "GetPlayerSirenState | open.mp"
description: "Gets the siren state of the player's vehicle."
canonical: https://open.mp/docs/scripting/functions/GetPlayerSirenState
language: en
---

# GetPlayerSirenState

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the siren state of the player's vehicle.

## Parameters

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |

## Return Values

Returns the vehicle siren state.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/siren", true))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new bool:sirenState = GetPlayerSirenState(playerid);

        SendClientMessage(playerid, 0xFFFF00FF, "Vehicle siren state: %s", sirenState ? "On" : "Off");
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [SetVehicleParamsSirenState](https://open.mp/docs/scripting/functions/SetVehicleParamsSirenState): Turn the siren for a vehicle on or off.
-   [ToggleVehicleSirenEnabled](https://open.mp/docs/scripting/functions/ToggleVehicleSirenEnabled): Turn the siren for a vehicle on or off.
-   [IsVehicleSirenEnabled](https://open.mp/docs/scripting/functions/IsVehicleSirenEnabled): Checks if a vehicle siren is on or off.
-   [GetVehicleSirenState](https://open.mp/docs/scripting/functions/GetVehicleSirenState): Gets the siren state of the vehicle.
