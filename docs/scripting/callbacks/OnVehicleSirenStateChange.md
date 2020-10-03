---
id: OnVehicleSirenStateChange
title: OnVehicleSirenStateChange
description: This callback is called when a vehicle's siren is toggled.
tags: ["vehicle"]
---

:::warning

This callback was added in SA-MP 0.3.7 and will not work in earlier versions!

:::

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
    if(newstate) GameTextForPlayer(playerid, "~W~Siren ~G~on", 1000, 3);
    else GameTextForPlayer(playerid, "~W~Siren ~r~off", 1000, 3);
    return 1;
}
```

## Notes

:::tip

This callback is only called when a vehicle's siren is toggled on or off, NOT when the alternate siren is in use (holding horn).

:::

## Related Functions

- [GetVehicleParamsSirenState](../functions/GetVehicleParamsSirenState.md): Check whether a vehicle's siren is on or off.
