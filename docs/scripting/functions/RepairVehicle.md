---
title: "RepairVehicle | open.mp"
description: "Fully repairs a vehicle, including visual damage (bumps, dents, scratches, popped tires etc.)."
canonical: https://open.mp/docs/scripting/functions/RepairVehicle
language: en
---

# RepairVehicle

## Description

Fully repairs a vehicle, including visual damage (bumps, dents, scratches, popped tires etc.).

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to repair. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the vehicle specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/repair", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return SendClientMessage(playerid, 0xFFFFFFFF, "You are not in a vehicle!");
        }

        RepairVehicle(GetPlayerVehicleID(playerid));

        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been repaired!");
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [SetVehicleHealth](https://open.mp/docs/scripting/functions/SetVehicleHealth): Set the health of a vehicle.
-   [GetVehicleHealth](https://open.mp/docs/scripting/functions/GetVehicleHealth): Check the health of a vehicle.
