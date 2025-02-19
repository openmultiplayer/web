---
title: OnVehicleMod
sidebar_label: OnVehicleMod
description: This callback is called when a vehicle is modded.
tags: ["vehicle"]
---

## Description

This callback is called when a vehicle is modded.

| Name        | Description                                             |
| ----------- | ------------------------------------------------------- |
| playerid    | The ID of the driver of the vehicle.                    |
| vehicleid   | The ID of the vehicle which is modded.                  |
| componentid | The ID of the component which was added to the vehicle. |

## Returns

It is always called first in gamemode so returning 0 there also blocks other filterscripts from processing it.

## Examples

```c
public OnVehicleMod(playerid, vehicleid, componentid)
{
    printf("Vehicle %d was modded by ID %d with the componentid %d", vehicleid, playerid, componentid);

    if (GetPlayerInterior(playerid) == 0)
    {
        BanEx(playerid, "Tuning Hacks"); // Anti-tuning hacks script
        return 0; // Prevents the bad modification from being synced to other players
        // Tested and it works even on servers wich allow you to mod your vehicle using commands, menus, dialogs, etc..
    }
    return 1;
}
```

## Notes

:::tip

This callback is NOT called by AddVehicleComponent.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

- [OnEnterExitModShop](OnEnterExitModShop): This callback is called when a vehicle enters or exits a mod shop.
- [OnVehiclePaintjob](OnVehiclePaintjob): This callback is called when a vehicle's paintjob is changed.
- [OnVehicleRespray](OnVehicleRespray): This callback is called when a vehicle is resprayed.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [AddVehicleComponent](../functions/AddVehicleComponent): Add a component to a vehicle.
