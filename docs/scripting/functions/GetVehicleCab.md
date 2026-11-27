---
title: "GetVehicleCab | open.mp"
description: "Get the ID of the cab attached to a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleCab
language: en
---

# GetVehicleCab

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the ID of the cab attached to a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the cab of. |

## Returns

The vehicle ID of the cab or **0** if no cab is attached.

## Examples

```c
new cabId = GetVehicleCab(vehicleid);
```

## Related Functions

-   [GetVehicleTrailer](https://open.mp/docs/scripting/functions/GetVehicleTrailer): Get the ID of the trailer attached to a vehicle.
