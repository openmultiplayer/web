---
title: "AttachTrailerToVehicle | open.mp"
description: "Attach a vehicle to another vehicle as a trailer."
canonical: https://open.mp/docs/scripting/functions/AttachTrailerToVehicle
language: en
---

# AttachTrailerToVehicle

## Description

Attach a vehicle to another vehicle as a trailer.

| Name | Description |
| --- | --- |
| trailerid | The ID of the vehicle that will be pulled. |
| vehicleid | The ID of the vehicle that will pull the trailer. |

## Returns

This function always returns **true**, even if neither of the vehicle IDs passed are valid.

## Examples

```c
new vehicleId = CreateVehicle(403, 657.8788, 1721.9125, 7.7199, 41.0000, -1, -1, 100);
new trailerId = CreateVehicle(435, 651.8154, 1716.3301, 7.7700, 41.0000, -1, -1, 100);

AttachTrailerToVehicle(trailerId, vehicleId);
```

## Notes

warning

This will only work if both vehicles are streamed in for a player (check [IsVehicleStreamedIn](https://open.mp/docs/scripting/functions/IsVehicleStreamedIn)).

## Related Functions

-   [DetachTrailerFromVehicle](https://open.mp/docs/scripting/functions/DetachTrailerFromVehicle): Detach a trailer from a vehicle.
-   [IsTrailerAttachedToVehicle](https://open.mp/docs/scripting/functions/IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
-   [GetVehicleTrailer](https://open.mp/docs/scripting/functions/GetVehicleTrailer): Check what trailer a vehicle is pulling.
