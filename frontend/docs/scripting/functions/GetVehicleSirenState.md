---
title: GetVehicleSirenState
sidebar_label: GetVehicleSirenState
description: Gets the siren state of the vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the siren state of the vehicle.

## Parameters

| Name      | Description            |
|-----------|------------------------|
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

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): Turn the siren for a vehicle on or off.
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): Turn the siren for a vehicle on or off.
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): Checks if a vehicle siren is on or off.
- [GetPlayerSirenState](GetPlayerSirenState): Gets the siren state of the player's vehicle.
