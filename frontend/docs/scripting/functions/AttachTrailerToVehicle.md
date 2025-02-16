---
title: AttachTrailerToVehicle
sidebar_label: AttachTrailerToVehicle
description: Attach a vehicle to another vehicle as a trailer.
tags: ["vehicle"]
---

## Description

Attach a vehicle to another vehicle as a trailer.

| Name      | Description                                       |
| --------- | ------------------------------------------------- |
| trailerid | The ID of the vehicle that will be pulled.        |
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

:::warning

This will only work if both vehicles are streamed in for a player (check [IsVehicleStreamedIn](IsVehicleStreamedIn)).

:::

## Related Functions

- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Detach a trailer from a vehicle.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
- [GetVehicleTrailer](GetVehicleTrailer): Check what trailer a vehicle is pulling.
