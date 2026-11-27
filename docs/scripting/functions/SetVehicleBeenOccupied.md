---
title: "SetVehicleBeenOccupied | open.mp"
description: "Sets the vehicle's occupancy."
canonical: https://open.mp/docs/scripting/functions/SetVehicleBeenOccupied
language: en
---

# SetVehicleBeenOccupied

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

warning

This function has not yet been implemented.

## Description

Sets the vehicle's occupancy.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |
| bool:occupied | **true**: occupied - **false**: not occupied |

## Examples

```c
SetVehicleBeenOccupied(vehicleid, true);
```

## Related Functions

-   [HasVehicleBeenOccupied](https://open.mp/docs/scripting/functions/HasVehicleBeenOccupied): Check if a vehicle is occupied.
