---
title: "OnVehiclePaintjob | open.mp"
description: "This callback is called when a player previews a vehicle paintjob inside a mod shop."
canonical: https://open.mp/docs/scripting/callbacks/OnVehiclePaintjob
language: en
---

# OnVehiclePaintjob

## Description

This callback is called when a player previews a vehicle paintjob inside a mod shop. Watch out, this callback is not called when the player buys the paintjob.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that changed the paintjob of their vehicle. |
| vehicleid | The ID of the vehicle that had its paintjob changed. |
| paintjobid | The ID of the new [paintjob](https://open.mp/docs/scripting/resources/paintjobs). |

## Returns

It is always called first in gamemode so returning 0 there blocks other filterscripts from processing it.

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

note

-   This callback is not called by [ChangeVehiclePaintjob](https://open.mp/docs/scripting/functions/ChangeVehiclePaintjob).
-   You might use OnVehicleChangePaintjob from [vSync](https://github.com/Vasily-X/vSync) in order to know when the player **buys** the paintjob.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnVehicleRespray](https://open.mp/docs/scripting/callbacks/OnVehicleRespray): This callback is called when a vehicle is resprayed.
-   [OnVehicleMod](https://open.mp/docs/scripting/callbacks/OnVehicleMod): This callback is called when a vehicle is modded.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [ChangeVehiclePaintjob](https://open.mp/docs/scripting/functions/ChangeVehiclePaintjob): Change the paintjob on a vehicle.
-   [ChangeVehicleColor](https://open.mp/docs/scripting/functions/ChangeVehicleColor): Set the color of a vehicle.
