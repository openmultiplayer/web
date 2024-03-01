---
title: OnTrailerUpdate
description: This callback is called when a player sent a trailer update.
tags: []
---

## Description

This callback is called when a player sent a trailer update.

| Name      | Description                                    |
| --------- | ---------------------------------------------- |
| playerid  | The ID of the player who sent a trailer update |
| vehicleid | The Trailer being updated                      |

## Returns

0 - Cancels any trailer updates from being sent to other players. Update is still sent to the updating player.

1 - Processes the trailer update as normal and synchronizes it between all players.

It is always called first in filterscripts.

## Examples

```c
public OnTrailerUpdate(playerid, vehicleid)
{
    DetachTrailerFromVehicle(GetPlayerVehicleID(playerid));
    return 0;
}
```

## Notes

:::warning

This callback is called very frequently per second per trailer. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback.

:::

## Related Functions

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnUnoccupiedVehicleUpdate](OnUnoccupiedVehicleUpdate): This callback is called when a driver-less vehicle's position is synced by a client. 

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [GetVehicleTrailer](../functions/GetVehicleTrailer): Check what trailer a vehicle is pulling.
- [IsTrailerAttachedToVehicle](../functions/IsTrailerAttachedToVehicle): Check if a trailer is attached to a vehicle.
- [AttachTrailerToVehicle](../functions/AttachTrailerToVehicle): Attach a trailer to a vehicle.
- [DetachTrailerFromVehicle](../functions/DetachTrailerFromVehicle): Detach a trailer from a vehicle.
