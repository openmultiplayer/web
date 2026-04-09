---
title: PutPlayerInVehicle
sidebar_label: PutPlayerInVehicle
description: Puts a player in a vehicle.
tags: ["player", "vehicle"]
---

## Description

Puts a player in a vehicle.

| Name      | Description                                 |
| --------- | ------------------------------------------- |
| playerid  | The ID of the player to put in a vehicle.   |
| vehicleid | The ID of the vehicle to put the player in. |
| seatid    | The ID of the seat to put the player in.    |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. The player or vehicle doesn't exist.

## Examples

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassanger)
{
    PutPlayerInVehicle(playerid, vehicleid, 0);
    return 1;
}

```

| ID  | Seat                         |
| --- | ---------------------------- |
| 0   | Driver                       |
| 1   | Front passenger              |
| 2   | Back-left passenger          |
| 3   | Back-right passenger         |
| 4+  | Passenger seats (coach etc.) |

## Notes

:::tip

You can use [GetPlayerVehicleSeat](GetPlayerVehicleSeat) in a loop to check if a seat is occupied by any players.

:::

:::warning

- If the seat is invalid or already taken, the client will crash when they EXIT the vehicle.
- Putting a player into a vehicle that is not streamed in can be unreliable. This is due to a potential client-side issue where the vehicle may not have fully loaded into memory yet.
- This also applies when attempting to put a player into a vehicle that was just created.

:::

## Related Functions

- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): Throw a player out of their vehicle.
- [GetPlayerVehicleID](GetPlayerVehicleID): Get the ID of the vehicle the player is in.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Check what seat a player is in.
- [GetVehicleSeats](GetVehicleSeats): Gets the number of seats in the vehicle.

## Related Callbacks

- [OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle): Called when a player starts to enter a vehicle.
