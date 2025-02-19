---
title: OnVehicleDeath
sidebar_label: OnVehicleDeath
description: This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.
tags: ["vehicle"]
---

## Description

This callback is called when a vehicle is destroyed - either by exploding or becoming submerged in water.

| Name      | Description                                                                                                                                                     |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle that was destroyed.                                                                                                                       |
| killerid  | The ID of the player that reported (synced) the vehicle's destruction (name is misleading). Generally the driver or a passenger (if any) or the closest player. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnVehicleDeath(vehicleid, killerid)
{
    new string[64];
    format(string, sizeof(string), "Vehicle %i was destroyed. Reported by player %i.", vehicleid, killerid);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

- This callback will also be called when a vehicle enters water, but the vehicle can be saved from destruction by teleportation or driving out (if only partially submerged).
- The callback won't be called a second time, and the vehicle may disappear when the driver exits, or after a short time.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnVehicleSpawn](OnVehicleSpawn): This callback is called when a vehicle respawns. 

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [SetVehicleHealth](../functions/SetVehicleHealth): Set the health of a vehicle.
