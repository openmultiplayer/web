---
title: OnVehicleRespray
description: This callback is called when a player exits a mod shop, even if the colors weren't changed.
tags: ["vehicle"]
---

## Description

This callback is called when a player exits a mod shop, even if the colors weren't changed. Watch out, the name is ambiguous, Pay 'n' Spray shops don't call this callback.

| Name      | Description                                                  |
| --------- | ------------------------------------------------------------ |
| playerid  | The ID of the player that is driving the vehicle.            |
| vehicleid | The ID of the vehicle that was resprayed.                    |
| color1    | The color that the vehicle's primary color was changed to.   |
| color2    | The color that the vehicle's secondary color was changed to. |

## Returns

It is always called first in gamemode so returning 0 there also blocks other filterscripts from seeing it.

## Examples

```c
public OnVehicleRespray(playerid, vehicleid, color1, color2)
{
    new string[48];
    format(string, sizeof(string), "You resprayed vehicle %d to colors %d and %d!", vehicleid, color1, color2);
    SendClientMessage(playerid, COLOR_GREEN, string);
    return 1;
}
```

## Notes

:::tip

This callback is not called by [ChangeVehicleColor](../functions/ChangeVehicleColor). Misleadingly, this callback is not called for pay 'n' spray (only modshops).

Fix here: https://pastebin.com/G81da7N1

:::

:::warning

Known Bug(s): previewing a component inside a mod shop might call this callback.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnVehiclePaintjob](OnVehiclePaintjob): This callback is called when a vehicle's paintjob is changed.
- [OnVehicleMod](OnVehicleMod): This callback is called when a vehicle is modded.
- [OnEnterExitModShop](OnEnterExitModShop): This callback is called when a vehicle enters or exits a mod shop.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [ChangeVehicleColor](../functions/ChangeVehicleColor): Set the color of a vehicle.
- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob): Change the paintjob on a vehicle.
