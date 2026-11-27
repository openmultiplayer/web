---
title: "GetVehicleLandingGearState | open.mp"
description: "Gets the current vehicle landing gear state from the latest driver."
canonical: https://open.mp/docs/scripting/functions/GetVehicleLandingGearState
language: en
---

# GetVehicleLandingGearState

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the current vehicle [landing gear state](https://open.mp/docs/scripting/resources/landinggearstate) from the latest driver.

## Parameters

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle. |

## Examples

```c
new LANDING_GEAR_STATE:landingGearState = GetVehicleLandingGearState(vehicleid);
```

## Related Functions

-   [GetPlayerLandingGearState](https://open.mp/docs/scripting/functions/GetPlayerLandingGearState): Gets the landing gear state of the current player's vehicle.

## Related Resources

-   [Vehicle Landing Gear States](https://open.mp/docs/scripting/resources/landinggearstate)
