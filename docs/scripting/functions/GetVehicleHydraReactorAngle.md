---
title: "GetVehicleHydraReactorAngle | open.mp"
description: "Gets the hydra reactor angle of the vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleHydraReactorAngle
language: en
---

# GetVehicleHydraReactorAngle

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the hydra reactor angle of the vehicle.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Examples

```c
new reactorAngle = GetVehicleHydraReactorAngle(vehicleid);
```

## Notes

note

The default value is 5000 if the angle hasn’t changed, and 0 if it is fully up. Otherwise, it seems to be returning random values.

## Related Functions

-   [GetPlayerHydraReactorAngle](https://open.mp/docs/scripting/functions/GetPlayerHydraReactorAngle): Gets the reactor angle of the player's hydra.
