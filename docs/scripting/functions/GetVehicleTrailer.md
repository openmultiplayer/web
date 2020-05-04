---
id: GetVehicleTrailer
title: GetVehicleTrailer
description: Get the ID of the trailer attached to a vehicle.
tags: ['vehicle']
---

<TagLinks />

## Description

Get the ID of the trailer attached to a vehicle.


| Name | Description |
|------|-------------|
|vehicleid | The ID of the vehicle to get the trailer of.|


## Returns

The vehicle ID of the trailer or 0 if no trailer is attached.


## Examples


```c
new trailerid = GetVehicleTrailer(vehicleid);
DetachTrailerFromVehicle(trailerid);
```


## Notes

:::warning

This function does not work for trains.

:::


## Related Functions


-  AttachTrailerToVehicle: Attach a trailer to a vehicle.
-  DetachTrailerFromVehicle: Detach a trailer from a vehicle.
-  IsTrailerAttachedToVehicle: Check if a trailer is attached to a vehicle.