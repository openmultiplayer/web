---
id: OnEnterExitModShop
title: OnEnterExitModShop
description: This callback is called when a player enters or exits a mod shop.
tags: []
---

:::warning

This callback was added in SA-MP 0.3a and will not work in earlier versions!

:::

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
    if(enterexit == 0) // If enterexit is 0, this means they are exiting
    {
        SendClientMessage(playerid, COLOR_WHITE, "Nice car! You have been taxed $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Notes

:::warning

Known Bug(s): Players collide when they get into the same mod shop.

:::

## Related Functions

- [AddVehicleComponent](../functions/AddVehicleComponent.md): Add a component to a vehicle.
