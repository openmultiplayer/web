---
title: GetVehicleTower
sidebar_label: GetVehicleTower
description: Get the ID of the cab attached to a vehicle.
tags: ["vehicle"]
---

:::warning

This function is deprecated, See [GetVehicleCab](GetVehicleCab).

:::

## Description

Get the ID of the cab attached to a vehicle.

| Name      | Description                                  |
| --------- | -------------------------------------------- |
| vehicleid | The ID of the vehicle to get the cab of.     |

## Returns

The vehicle ID of the cab or **0** if no cab is attached.

## Examples

```c
new cabId = GetVehicleTower(vehicleid);
```

## Related Functions

- [GetVehicleTrailer](GetVehicleTrailer): Get the ID of the trailer attached to a vehicle.
