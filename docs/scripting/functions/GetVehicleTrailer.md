---
title: "GetVehicleTrailer | open.mp"
description: "Get the ID of the trailer attached to a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleTrailer
language: en
---

# GetVehicleTrailer

## Description

Get the ID of the trailer attached to a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the trailer of. |

## Returns

The vehicle ID of the trailer or 0 if no trailer is attached.

## Examples

```c
new
	trailerId = GetVehicleTrailer(vehicleid);
DetachTrailerFromVehicle(trailerId);
```

## Notes

warning

This function does not work for trains.

## Related Functions

-   [AttachTrailerToVehicle](https://open.mp/docs/scripting/functions/AttachTrailerToVehicle): Attach a trailer to a vehicle.
-   [DetachTrailerFromVehicle](https://open.mp/docs/scripting/functions/DetachTrailerFromVehicle): Detach a trailer from a vehicle.
-   [IsTrailerAttachedToVehicle](https://open.mp/docs/scripting/functions/IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
