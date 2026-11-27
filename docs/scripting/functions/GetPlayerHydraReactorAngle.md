---
title: "GetPlayerHydraReactorAngle | open.mp"
description: "Gets the hydra reactor angle of the player's vehicle."
canonical: https://open.mp/docs/scripting/functions/GetPlayerHydraReactorAngle
language: en
---

# GetPlayerHydraReactorAngle

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the hydra reactor angle of the player's vehicle.

## Parameters

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |

## Examples

```c
new reactorAngle = GetPlayerHydraReactorAngle(playerid);
```

## Notes

note

The default value is 5000 if the angle hasn’t changed, and 0 if it is fully up. Otherwise, it seems to be returning random values.

## Related Functions

-   [GetVehicleHydraReactorAngle](https://open.mp/docs/scripting/functions/GetVehicleHydraReactorAngle): Gets the hydra reactor angle of the vehicle.
