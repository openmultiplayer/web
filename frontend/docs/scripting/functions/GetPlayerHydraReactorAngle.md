---
title: GetPlayerHydraReactorAngle
sidebar_label: GetPlayerHydraReactorAngle
description: Gets the hydra reactor angle of the player's vehicle.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the hydra reactor angle of the player's vehicle.

## Parameters

| Name     | Description           |
| -------- | --------------------- |
| playerid | The ID of the player. |

## Examples

```c
new reactorAngle = GetPlayerHydraReactorAngle(playerid);
```

## Notes

:::tip

The default value is 5000 if the angle hasn’t changed, and 0 if it is fully up. Otherwise, it seems to be returning random values.

:::

## Related Functions

- [GetVehicleHydraReactorAngle](GetVehicleHydraReactorAngle): Gets the hydra reactor angle of the vehicle.
