---
title: "IsPlayerInAnyVehicle | open.mp"
description: "Check if a player is inside any vehicle (as a driver or passenger)."
canonical: https://open.mp/docs/scripting/functions/IsPlayerInAnyVehicle
language: en
---

# IsPlayerInAnyVehicle

## Description

Check if a player is inside any vehicle (as a driver or passenger).

| Name | Description |
| --- | --- |
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

-   [IsPlayerInVehicle](https://open.mp/docs/scripting/functions/IsPlayerInVehicle): Check if a player is in a certain vehicle.
-   [GetPlayerVehicleSeat](https://open.mp/docs/scripting/functions/GetPlayerVehicleSeat): Check what seat a player is in.
