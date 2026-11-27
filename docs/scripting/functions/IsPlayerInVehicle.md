---
title: "IsPlayerInVehicle | open.mp"
description: "Checks if a player is in a specific vehicle."
canonical: https://open.mp/docs/scripting/functions/IsPlayerInVehicle
language: en
---

# IsPlayerInVehicle

## Description

Checks if a player is in a specific vehicle.

| Name | Description |
| --- | --- |
| playerid | ID of the player. |
| vehicleid | ID of the vehicle. **Note:** NOT the modelid! |

## Returns

**true** - Player IS in the vehicle.

**false** - Player is NOT in the vehicle.

## Examples

```c
new gSpecialCar;

public OnGameModeInit()
{
    gSpecialCar = AddStaticVehicle(411, 0.0, 0.0, 5.0, 0.0, -1, -1);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/gSpecialCar", true) == 0)
    {
        if (IsPlayerInVehicle(playerid, gSpecialCar))
        {
            SendClientMessage(playerid, -1, "You're in the special car!");
        }
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [IsPlayerInAnyVehicle](https://open.mp/docs/scripting/functions/IsPlayerInAnyVehicle): Check if a player is in any vehicle.
-   [GetPlayerVehicleSeat](https://open.mp/docs/scripting/functions/GetPlayerVehicleSeat): Check what seat a player is in.
