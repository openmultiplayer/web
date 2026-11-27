---
title: "GetPlayerLandingGearState | open.mp"
description: "Gets the landing gear state of the current player's vehicle."
canonical: https://open.mp/docs/scripting/functions/GetPlayerLandingGearState
language: en
---

# GetPlayerLandingGearState

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Gets the [landing gear state](https://open.mp/docs/scripting/resources/landinggearstate) of the current player's vehicle.

## Parameters

| Name | Description |
| --- | --- |
| playerid | The ID of the player. |

## Examples

```c
new LANDING_GEAR_STATE:landingGearState = GetPlayerLandingGearState(playerid);
```

## Related Functions

-   [GetVehicleLandingGearState](https://open.mp/docs/scripting/functions/GetVehicleLandingGearState): Gets the current vehicle landing gear state from the latest driver.

## Related Resources

-   [Vehicle Landing Gear States](https://open.mp/docs/scripting/resources/landinggearstate)
