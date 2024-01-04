---
title: SetVehicleParamsSirenState
description: Turn the siren for a vehicle on or off.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Turn the siren for a vehicle on or off.

## Parameters

| Name         | Description                   |
|--------------|-------------------------------|
| vehicleid    | The ID of the vehicle.        |
| bool:enabled | **true**: On - **false**: Off |

## Examples

```c
SetVehicleParamsSirenState(vehicleid, true);
```

## Related Functions

- [GetVehicleSirenState](GetVehicleSirenState): Gets the siren state of the vehicle.
- [GetPlayerSirenState](GetPlayerSirenState): Gets the siren state of the player's vehicle.
