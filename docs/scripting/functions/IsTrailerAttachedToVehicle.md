---
title: "IsTrailerAttachedToVehicle | open.mp"
description: "Checks if a vehicle has a trailer attached to it."
canonical: https://open.mp/docs/scripting/functions/IsTrailerAttachedToVehicle
language: en
---

# IsTrailerAttachedToVehicle

## Description

Checks if a vehicle has a trailer attached to it. Use [GetVehicleTrailer](https://open.mp/docs/scripting/functions/GetVehicleTrailer) to get the vehicle ID of the trailer (if any).

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to check for trailers. |

## Returns

**true** - The vehicle has a trailer attached.

**false** - The vehicle does not have a trailer attached.

## Examples

```c
if (IsTrailerAttachedToVehicle(vehicleid))
{
    printf("Vehicle %i has a trailer!", vehicleid);
}
```

## Related Functions

-   [GetVehicleTrailer](https://open.mp/docs/scripting/functions/GetVehicleTrailer): Check what trailer a vehicle is pulling.
-   [AttachTrailerToVehicle](https://open.mp/docs/scripting/functions/AttachTrailerToVehicle): Attach a trailer to a vehicle.
-   [DetachTrailerFromVehicle](https://open.mp/docs/scripting/functions/DetachTrailerFromVehicle): Detach a trailer from a vehicle.
