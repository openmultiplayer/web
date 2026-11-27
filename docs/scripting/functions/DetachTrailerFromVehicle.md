---
title: "DetachTrailerFromVehicle | open.mp"
description: "Detach the connection between a vehicle and its trailer, if any."
canonical: https://open.mp/docs/scripting/functions/DetachTrailerFromVehicle
language: en
---

# DetachTrailerFromVehicle

## Description

Detach the connection between a vehicle and its trailer, if any.

| Name | Description |
| --- | --- |
| vehicleid | ID of the pulling vehicle. |

## Returns

This function does not return any specific values.

## Examples

```c
DetachTrailerFromVehicle(vehicleid);
```

## Related Functions

-   [AttachTrailerToVehicle](https://open.mp/docs/scripting/functions/AttachTrailerToVehicle): Attach a trailer to a vehicle.
-   [IsTrailerAttachedToVehicle](https://open.mp/docs/scripting/functions/IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
-   [GetVehicleTrailer](https://open.mp/docs/scripting/functions/GetVehicleTrailer): Check what trailer a vehicle is pulling.
