---
title: IsVehicleDead
sidebar_label: IsVehicleDead
description: Check if a vehicle is dead.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Check if a vehicle is dead.

## Parameters

| Name      | Description            |
|-----------|------------------------|
| vehicleid | The ID of the vehicle. |

## Return Values

**true** - Vehicle is dead.

**false** - Vehicle is not dead.

## Examples

```c
if (IsVehicleDead(vehicleid))
{
    // Vehicle is dead
}
else
{
    // Vehicle is not dead
}
```

## Related Functions

- [SetVehicleDead](SetVehicleDead): Sets the vehicle to dead.
