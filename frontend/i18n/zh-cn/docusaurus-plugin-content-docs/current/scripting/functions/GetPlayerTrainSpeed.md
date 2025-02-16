---
title: GetPlayerTrainSpeed
sidebar_label: GetPlayerTrainSpeed
description: Gets the speed of the player's train.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the speed of the player's train.

## Parameters

| Name     | Description           |
|----------|-----------------------|
| playerid | The ID of the player. |

## Examples

```c
new Float:speed = GetPlayerTrainSpeed(playerid);
SendClientMessage(playerid, 0xFFFF00FF, "The speed of your train: %f", speed);
```

## Related Functions

- [GetVehicleTrainSpeed](GetVehicleTrainSpeed): Gets the speed of the train.
