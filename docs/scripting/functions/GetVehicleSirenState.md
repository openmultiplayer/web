---
title: "GetVehicleSirenState | open.mp"
description: "Gets the siren state of the vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleSirenState
language: en
---

# GetVehicleSirenState

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the siren state of the vehicle.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Return Values

Returns the vehicle siren state.

## Examples

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new bool:sirenState = GetVehicleSirenState(vehicleid);

    SendClientMessage(playerid, 0xFFFF00FF, "Vehicle siren state: %s", sirenState ? "On" : "Off");
    return 1;
}
```

## Related Functions

-   [SetVehicleParamsSirenState](https://open.mp/docs/scripting/functions/SetVehicleParamsSirenState): Turn the siren for a vehicle on or off.
-   [ToggleVehicleSirenEnabled](https://open.mp/docs/scripting/functions/ToggleVehicleSirenEnabled): Turn the siren for a vehicle on or off.
-   [IsVehicleSirenEnabled](https://open.mp/docs/scripting/functions/IsVehicleSirenEnabled): Checks if a vehicle siren is on or off.
-   [GetPlayerSirenState](https://open.mp/docs/scripting/functions/GetPlayerSirenState): Gets the siren state of the player's vehicle.
