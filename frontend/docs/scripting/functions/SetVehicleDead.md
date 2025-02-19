---
title: SetVehicleDead
sidebar_label: SetVehicleDead
description: Sets the vehicle to dead.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

This function has not yet been implemented.

:::

## Description

Sets the vehicle to dead.

## Parameters

| Name      | Description                          |
|-----------|--------------------------------------|
| vehicleid | The ID of the vehicle.               |
| bool:dead | **true**: dead - **false**: not dead |

## Examples

```c
SetVehicleDead(vehicleid, true);
```

## Related Functions

- [IsVehicleDead](IsVehicleDead): Check if a vehicle is dead.
