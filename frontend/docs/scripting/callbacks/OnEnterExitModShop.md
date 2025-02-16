---
title: OnEnterExitModShop
sidebar_label: OnEnterExitModShop
description: This callback is called when a player enters or exits a mod shop.
tags: ["player"]
---

## Description

This callback is called when a player enters or exits a mod shop.

| Name       | Description                                                                  |
| ---------- | ---------------------------------------------------------------------------- |
| playerid   | The ID of the player that entered or exited the modshop                      |
| enterexit  | 1 if the player entered or 0 if they exited                                  |
| interiorid | The interior ID of the modshop that the player is entering (or 0 if exiting) |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // If enterexit is 0, this means they are exiting
    {
        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Notes

:::warning

Known Bug(s):

- Players collide when they get into the same mod shop.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnVehicleMod](OnVehicleMod): This callback is called when a vehicle is modded.
- [OnVehicleRespray](OnVehicleRespray): This callback is called when a player exits a mod shop, even if the colors weren't changed.
- [OnVehiclePaintjob](OnVehiclePaintjob): This callback is called when a player previews a vehicle paintjob inside a mod shop.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [IsPlayerInModShop](../functions/IsPlayerInModShop): Check if the player is in the mod shop.
- [AddVehicleComponent](../functions/AddVehicleComponent): Add a component to a vehicle.
