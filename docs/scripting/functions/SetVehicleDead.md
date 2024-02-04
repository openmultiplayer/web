---
title: SetVehicleDead
description: Sets the vehicle to dead.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

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
