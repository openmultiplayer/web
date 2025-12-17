---
title: GetPlayerLandingGearState
sidebar_label: GetPlayerLandingGearState
description: Gets the landing gear state of the current player's vehicle.
tags: ["player", "vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the [landing gear state](../resources/landinggearstate) of the current player's vehicle.

## Parameters

| Name     | Description           |
| -------- | --------------------- |
| playerid | The ID of the player. |

## Examples

```c
new LANDING_GEAR_STATE:state = GetPlayerLandingGearState(playerid);
```

## Related Functions

- [GetVehicleLandingGearState](GetVehicleLandingGearState): Gets the current vehicle landing gear state from the latest driver.

## Related Resources

- [Vehicle Landing Gear States](../resources/landinggearstate)
