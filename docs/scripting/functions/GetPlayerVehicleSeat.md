---
title: GetPlayerVehicleSeat
description: Find out which seat a player is in.
tags: ["player", "vehicle"]
---

## Description

Find out which seat a player is in.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player you want to get the seat of. |

## Returns

The ID of the seat the player is in.

**-1** is not in vehicle, **0** is the driver, **1** is the front passenger, and **2** & **3** are the rear passengers.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/myseat", true) == 0)
    {
        new
            playerSeat = GetPlayerVehicleSeat(playerid);

        // How you can discard of your information.
        if (playerSeat == 128)
        {
            return SendClientMessage(playerid, 0xFFFFFFFF, "An error has prevented us from returning the seat ID.");
        }

        new
            string[24];

        format(string, sizeof(string), "Your seat: %i", playerSeat);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

| ID  | Seat                         |
| --- | ---------------------------- |
| 0   | Driver                       |
| 1   | Front passenger              |
| 2   | Back-left passenger          |
| 3   | Back-right passenger         |
| 4+  | Passenger seats (coach etc.) |

## Related Functions

- [GetPlayerVehicleID](GetPlayerVehicleID): Get the ID of the vehicle the player is in.
- [PutPlayerInVehicle](PutPlayerInVehicle): Put a player in a vehicle.
