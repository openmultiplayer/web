---
title: HasVehicleBeenOccupied
sidebar_label: HasVehicleBeenOccupied
description: Check if a vehicle is occupied.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Check if a vehicle is occupied.

## Parameters

| Name      | Description            |
|-----------|------------------------|
| vehicleid | The ID of the vehicle. |

## Return Values

**true** - Vehicle is occupied.

**false** - Vehicle is not occupied.

## Examples

```c
if (HasVehicleBeenOccupied(vehicleid))
{
    // Vehicle is occupied
}
else
{
    // Vehicle is not occupied
}
```

## Related Functions

- [SetVehicleBeenOccupied](SetVehicleBeenOccupied): Sets the vehicle's occupancy.
