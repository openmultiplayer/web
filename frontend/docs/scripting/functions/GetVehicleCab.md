---
title: GetVehicleCab
sidebar_label: GetVehicleCab
description: Get the ID of the cab attached to a vehicle.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the ID of the cab attached to a vehicle.

| Name      | Description                              |
| --------- | ---------------------------------------- |
| vehicleid | The ID of the vehicle to get the cab of. |

## Returns

The vehicle ID of the cab or **0** if no cab is attached.

## Examples

```c
new cabId = GetVehicleCab(vehicleid);
```

## Related Functions

- [GetVehicleTrailer](GetVehicleTrailer): Get the ID of the trailer attached to a vehicle.
