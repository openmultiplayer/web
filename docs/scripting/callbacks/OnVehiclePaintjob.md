---
id: OnVehiclePaintjob
title: OnVehiclePaintjob
description: Called when a player previews a vehicle paintjob inside a mod shop.
tags: ["vehicle"]
---

## Description

Called when a player previews a vehicle paintjob inside a mod shop. Watch out, this callback is not called when the player buys the paintjob.

| Name       | Description                                                      |
| ---------- | ---------------------------------------------------------------- |
| playerid   | The ID of the player that changed the paintjob of their vehicle. |
| vehicleid  | The ID of the vehicle that had its paintjob changed.             |
| paintjobid | The ID of the new paintjob.                                      |

## Returns

It is always called first in gamemode so returning 0 there blocks other filterscripts from seeing it.

## Examples

```c
public OnVehiclePaintjob(playerid, vehicleid, paintjobid)
{
    new string[128];
    format(string, sizeof(string), "You have changed your vehicle's paintjob to %d!", paintjobid);
    SendClientMessage(playerid, 0x33AA33AA, string);
    return 1;
}
```

## Notes

:::tip

This callback is not called by ChangeVehiclePaintjob.
You might use OnVehicleChangePaintjob from vSync in order to know when the player buys the paintjob.

:::

## Related Functions

- [ChangeVehiclePaintjob](../functions/ChangeVehiclePaintjob.md): Change the paintjob on a vehicle.
- [ChangeVehicleColor](../functions/ChangeVehicleColor.md): Set the color of a vehicle.
- [OnVehicleRespray](../callbacks/OnVehicleRespray.md): Called when a vehicle is resprayed.
- [OnVehicleMod](../callbacks/OnVehicleMod.md): Called when a vehicle is modded.
