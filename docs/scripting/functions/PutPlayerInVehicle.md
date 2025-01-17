---
title: PutPlayerInVehicle
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
// Global array to track which vehicle belongs to each player.
// INVALID_VEHICLE_ID is used as a placeholder for players without a vehicle.
static s_PlayerVehicle[MAX_PLAYERS] = { INVALID_VEHICLE_ID, ... };

public OnPlayerSpawn(playerid)
{
    // Check if the player already has a valid vehicle.
    if (!IsValidVehicle(s_PlayerVehicle[playerid]))
    {
        // If not, create a new vehicle for the player and store its ID.
        s_PlayerVehicle[playerid] = CreateVehicle(411, 0.0, 0.0, 3.5, 0.0, -1, -1, -1);
    }

    // Mark that the player should be placed in their vehicle once it is fully loaded.
    // This avoids issues where the vehicle might not yet be loaded on the client's side.
    SetPVarInt(playerid, "PutPlayerInVehicle", 1);

    return 1;
}

public OnVehicleStreamIn(vehicleid, forplayerid)
{
    // This callback is triggered when a vehicle streams in for the player (i.e. when it is loaded into memory).
    // Check if the streamed-in vehicle is the player's and if they need to be placed in it.
    if (vehicleid == s_PlayerVehicle[forplayerid] && GetPVarInt(forplayerid, "PutPlayerInVehicle"))
    {
        // Put the player into the vehicle.
        PutPlayerInVehicle(forplayerid, vehicleid, 0);

        // Clear the marker to prevent repeatedly putting the player into the vehicle
        // (e.g., if the player leaves the vehicle and it streams in again later).
        DeletePVar(forplayerid, "PutPlayerInVehicle");
    }

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

* If the seat is invalid or already taken, the client will crash when they EXIT the vehicle.
* Putting a player into a vehicle that is not streamed in can be unreliable. This is due to a potential client-side issue where the vehicle may not have fully loaded into memory yet.
* This also applies when attempting to put a player into a vehicle that was just created.

:::

## Related Functions

- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): Throw a player out of their vehicle.
- [GetPlayerVehicleID](GetPlayerVehicleID): Get the ID of the vehicle the player is in.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Check what seat a player is in.
- [GetVehicleSeats](GetVehicleSeats): Gets the number of seats in the vehicle.

## Related Callbacks

- [OnPlayerEnterVehicle](../callbacks/OnPlayerEnterVehicle): Called when a player starts to enter a vehicle.
