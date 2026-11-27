---
title: "GetPlayerTrainSpeed | open.mp"
description: "Gets the speed of the player's train."
canonical: https://open.mp/docs/scripting/functions/GetPlayerTrainSpeed
language: en
---

# GetPlayerTrainSpeed

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the speed of the player's train.

## Parameters

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |

## Examples

```c
new Float:speed = GetPlayerTrainSpeed(playerid);
SendClientMessage(playerid, 0xFFFF00FF, "The speed of your train: %f", speed);
```

## Related Functions

-   [GetVehicleTrainSpeed](https://open.mp/docs/scripting/functions/GetVehicleTrainSpeed): Gets the speed of the train.
