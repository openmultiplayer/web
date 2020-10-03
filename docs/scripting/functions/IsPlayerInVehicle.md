---
id: IsPlayerInVehicle
title: IsPlayerInVehicle
description: Checks if a player is in a specific vehicle.
tags: ["player", "vehicle"]
---

## Description

Checks if a player is in a specific vehicle.

| Name      | Description                               |
| --------- | ----------------------------------------- |
| playerid  | ID of the player.                         |
| vehicleid | ID of the vehicle. Note: NOT the modelid! |

## Returns

1 - Player IS in the vehicle.

0 - Player is NOT in the vehicle.

## Examples

```c
new specialcar;

public OnGameModeInit()
{
    specialcar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if(strcmp(cmdtext, "/specialcar", true) == 0)
    {
        if(IsPlayerInVehicle(playerid, specialcar))
        {
            SendClientMessage(playerid, -1, "You're in the special car!");
        }
        return 1;
    }
    return 0;
}
```

## Related Functions

- [IsPlayerInAnyVehicle](../functions/IsPlayerInAnyVehicle.md): Check if a player is in any vehicle.
- [GetPlayerVehicleSeat](../functions/GetPlayerVehicleSeat.md): Check what seat a player is in.
