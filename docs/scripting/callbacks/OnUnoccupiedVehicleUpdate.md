---
title: OnUnoccupiedVehicleUpdate
description: This callback is called when a player's client updates/syncs the position of a vehicle they're not driving.
tags: ["vehicle"]
---

## Description

This callback is called when a player's client updates/syncs the position of a vehicle they're not driving. This can happen outside of the vehicle or when the player is a passenger of a vehicle that has no driver.

| Name           | Description                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| vehicleid      | The ID of the vehicle that's position was updated.                                                                                                               |
| playerid       | The ID of the player that sent a vehicle position sync update.                                                                                                   |
| passenger_seat | The ID of the seat if the player is a passenger. 0=not in vehicle, 1=front passenger, 2=backleft 3=backright 4+ is for coach/bus etc. with many passenger seats. |
| Float:new_x    | The new X coordinate of the vehicle.                                                                                                                             |
| Float:new_y    | The new Y coordinate of the vehicle.                                                                                                                             |
| Float:new_z    | The new Z coordinate of the vehicle.                                                                                                                             |
| Float:vel_x    | The new X velocity of the vehicle.                                                                                                                               |
| Float:vel_y    | The new Y velocity of the vehicle.                                                                                                                               |
| Float:vel_z    | The new Z velocity of the vehicle.                                                                                                                               |

## Returns

It is always called first in filterscripts so returning 0 there also blocks other scripts from processing it.

## Examples

```c
public OnUnoccupiedVehicleUpdate(vehicleid, playerid, passenger_seat, Float:new_x, Float:new_y, Float:new_z, Float:vel_x, Float:vel_y, Float:vel_z)
{
    // Check if it moved far
    if (GetVehicleDistanceFromPoint(vehicleid, new_x, new_y, new_z) > 50.0)
    {
        // Reject the update
        return 0;
    }

    return 1;
}
```

## Notes

:::warning

- This callback is called very frequently per second per unoccupied vehicle. You should refrain from implementing intensive calculations or intensive file writing/reading operations in this callback. 
- [GetVehiclePos](../functions/GetVehiclePos) will return the old coordinates of the vehicle before this update.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnTrailerUpdate](OnTrailerUpdate): Called when a trailer's position is synced by a client.
