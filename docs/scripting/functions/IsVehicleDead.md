---
title: "IsVehicleDead | open.mp"
description: "Check if a vehicle is dead."
canonical: https://open.mp/docs/scripting/functions/IsVehicleDead
language: en
---

# IsVehicleDead

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Check if a vehicle is dead.

## Parameters

| Name | Description |
| --- | --- |
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

-   [SetVehicleDead](https://open.mp/docs/scripting/functions/SetVehicleDead): Sets the vehicle to dead.
