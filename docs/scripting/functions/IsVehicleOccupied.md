---
title: "IsVehicleOccupied | open.mp"
description: "Check if a vehicle is occupied."
canonical: https://open.mp/docs/scripting/functions/IsVehicleOccupied
language: en
---

# IsVehicleOccupied

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Check if a vehicle is occupied.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Return Values

**true** - Vehicle is occupied.

**false** - Vehicle is not occupied.

## Examples

```c
if (IsVehicleOccupied(vehicleid))
{
    // Vehicle is occupied
}
else
{
    // Vehicle is not occupied
}
```

## Related Functions

-   [SetVehicleBeenOccupied](https://open.mp/docs/scripting/functions/SetVehicleBeenOccupied): Sets the vehicle's occupancy.
