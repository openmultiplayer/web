---
title: OnVehicleSirenStateChange
description: This callback is called when a vehicle's siren is toggled.
tags: ["vehicle"]
---

<VersionWarn name='callback' version='SA-MP 0.3.7' />

## Description

This callback is called when a vehicle's siren is toggled.

| Name      | Description                                               |
| --------- | --------------------------------------------------------- |
| playerid  | The ID of the player that toggled the siren (driver).     |
| vehicleid | The ID of the vehicle of which the siren was toggled for. |
| newstate  | 0 if siren was turned off, 1 if siren was turned on.      |

## Returns

1 - Will prevent gamemode from receiving this callback.

0 - Indicates that this callback will be passed to the gamemode.

It is always called first in filterscripts.

## Examples

```c
public OnVehicleSirenStateChange(playerid, vehicleid, newstate)
{
    if (newstate)
    {
        GameTextForPlayer(playerid, "~W~Siren ~G~on", 1000, 3);
    }
    else
    {
        GameTextForPlayer(playerid, "~W~Siren ~r~off", 1000, 3);
    }
    return 1;
}
```

## Notes

:::tip

This callback is only called when a vehicle's siren is toggled on or off, NOT when the alternate siren is in use (holding horn).

:::

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState): Check whether a vehicle's siren is on or off.
