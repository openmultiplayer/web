---
title: GetVehicleHydraReactorAngle
sidebar_label: GetVehicleHydraReactorAngle
description: Gets the hydra reactor angle of the vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the hydra reactor angle of the vehicle.

## Parameters

| Name      | Description            |
| --------- | ---------------------- |
| vehicleid | The ID of the vehicle. |

## Examples

```c
new reactorAngle = GetVehicleHydraReactorAngle(vehicleid);
```

## Notes

:::tip

The default value is 5000 if the angle hasn’t changed, and 0 if it is fully up. Otherwise, it seems to be returning random values.

:::

## Related Functions

- [GetPlayerHydraReactorAngle](GetPlayerHydraReactorAngle): Gets the reactor angle of the player's hydra.
