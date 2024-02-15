---
title: GetVehicleTower
description: Get the ID of the trailer attached to a vehicle.
tags: ["vehicle"]
---

:::warning

This function is deprecated, See [GetVehicleCab](GetVehicleCab).

:::

## Description

Get the ID of the trailer attached to a vehicle.

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| vehicleid | The ID of the vehicle to get the trailer of. |

## Returns

The vehicle ID of the trailer or 0 if no trailer is attached.

## Examples

```c
new
	trailerId = GetVehicleTower(vehicleid);
DetachTrailerFromVehicle(trailerId);
```

## Notes

:::warning

This function does not work for trains.

:::

## Related Functions

- [AttachTrailerToVehicle](AttachTrailerToVehicle): Attach a trailer to a vehicle.
- [DetachTrailerFromVehicle](DetachTrailerFromVehicle): Detach a trailer from a vehicle.
- [IsTrailerAttachedToVehicle](IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
