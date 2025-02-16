---
title: SetVehicleBeenOccupied
description: Sets the vehicle's occupancy.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

:::warning

This function has not yet been implemented.

:::

## Description

Sets the vehicle's occupancy.

## Parameters

| Name          | Description                          |
|---------------|--------------------------------------|
| vehicleid     | The ID of the vehicle.               |
| bool:occupied | **true**: occupied - **false**: not occupied |

## Examples

```c
SetVehicleBeenOccupied(vehicleid, true);
```

## Related Functions

- [HasVehicleBeenOccupied](HasVehicleBeenOccupied): Check if a vehicle is occupied.
