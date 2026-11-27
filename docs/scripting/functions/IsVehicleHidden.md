---
title: "IsVehicleHidden | open.mp"
description: "Checks if a vehicle is hidden."
canonical: https://open.mp/docs/scripting/functions/IsVehicleHidden
language: en
---

# IsVehicleHidden

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

warning

This function has not yet been implemented.

## Description

Checks if a vehicle is hidden.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to check. |

## Return Values

**true** - Vehicle is hidden.

**false** - Vehicle is not hidden.

## Examples

```c
if (IsVehicleHidden(vehicleid))
{
    // Vehicle is hidden
}
else
{
    // Vehicle is not hidden
}
```

## Related Functions

-   [HideVehicle](https://open.mp/docs/scripting/functions/HideVehicle): Hides a vehicle from the game.
-   [ShowVehicle](https://open.mp/docs/scripting/functions/ShowVehicle): Shows the hidden vehicle.
