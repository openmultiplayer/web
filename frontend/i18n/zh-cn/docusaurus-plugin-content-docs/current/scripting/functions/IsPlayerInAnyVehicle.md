---
title: IsPlayerInAnyVehicle
sidebar_label: IsPlayerInAnyVehicle
description: Check if a player is inside any vehicle (as a driver or passenger).
tags: ["player", "vehicle"]
---

## Description

Check if a player is inside any vehicle (as a driver or passenger).

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## Returns

**true** - The player is in a vehicle.

**false** - The player is not in a vehicle.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/invehicle", true) == 0)
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SendClientMessage(playerid, 0x00FF00FF, "You're in a vehicle.");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "You're not in any vehicle.");
        }
        return 1;
    }
    return 0;
}
```

## Related Functions

- [IsPlayerInVehicle](IsPlayerInVehicle): Check if a player is in a certain vehicle.
- [GetPlayerVehicleSeat](GetPlayerVehicleSeat): Check what seat a player is in.
