---
title: "GetVehicleTrainSpeed | open.mp"
description: "Gets the speed of the train."
canonical: https://open.mp/docs/scripting/functions/GetVehicleTrainSpeed
language: en
---

# GetVehicleTrainSpeed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the speed of the train.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Examples

```c
new vehicleid = GetPlayerVehicleID(playerid);

new Float:speed = GetVehicleTrainSpeed(vehicleid);
```

## Related Functions

-   [GetPlayerTrainSpeed](https://open.mp/docs/scripting/functions/GetPlayerTrainSpeed): Gets the speed of the player's train.
