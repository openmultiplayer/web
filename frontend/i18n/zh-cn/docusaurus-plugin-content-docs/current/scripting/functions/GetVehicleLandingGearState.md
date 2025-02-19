---
title: GetVehicleLandingGearState
sidebar_label: GetVehicleLandingGearState
description: Gets the current vehicle landing gear state from the latest driver.
tags: ["vehicle"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Gets the current vehicle [landing gear state](../resources/landinggearstate) from the latest driver.

## Parameters

| Name      | Description            |
|-----------|------------------------|
| vehicleid | The ID of the vehicle. |

## Examples

```c
new LANDING_GEAR_STATE:state = GetVehicleLandingGearState(vehicleid);
```

## Related Functions

- [GetPlayerLandingGearState](GetPlayerLandingGearState): Gets the landing gear state of the current player's vehicle.

## Related Resources

- [Vehicle Landing Gear States](../resources/landinggearstate)
