---
title: "SetVehicleParamsSirenState | open.mp"
description: "Turn the siren for a vehicle on or off."
canonical: https://open.mp/docs/scripting/functions/SetVehicleParamsSirenState
language: en
---

# SetVehicleParamsSirenState

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Turn the siren for a vehicle on or off.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |
| bool:enabled | **true**: On - **false**: Off |

## Examples

```c
SetVehicleParamsSirenState(vehicleid, true);
```

## Related Functions

-   [GetVehicleParamsSirenState](https://open.mp/docs/scripting/functions/GetVehicleParamsSirenState): Returns a vehicle's siren state (on/off).
-   [GetVehicleSirenState](https://open.mp/docs/scripting/functions/GetVehicleSirenState): Gets the siren state of the vehicle.
-   [GetPlayerSirenState](https://open.mp/docs/scripting/functions/GetPlayerSirenState): Gets the siren state of the player's vehicle.
