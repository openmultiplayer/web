---
title: GetVehicleTrainSpeed
sidebar_label: GetVehicleTrainSpeed
description: Gets the speed of the train.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the speed of the train.

## Parameters

| Name      | Description            |
| --------- | ---------------------- |
| vehicleid | The ID of the vehicle. |

## Examples

```c
new vehicleid = GetPlayerVehicleID(playerid);

new Float:speed = GetVehicleTrainSpeed(vehicleid);
```

## Related Functions

- [GetPlayerTrainSpeed](GetPlayerTrainSpeed): Gets the speed of the player's train.
