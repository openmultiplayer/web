---
title: GetPlayerSirenState
sidebar_label: GetPlayerSirenState
description: Gets the siren state of the player's vehicle.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the siren state of the player's vehicle.

## Parameters

| Name     | Description           |
| -------- | --------------------- |
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

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): Turn the siren for a vehicle on or off.
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): Turn the siren for a vehicle on or off.
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): Checks if a vehicle siren is on or off.
- [GetVehicleSirenState](GetVehicleSirenState): Gets the siren state of the vehicle.
