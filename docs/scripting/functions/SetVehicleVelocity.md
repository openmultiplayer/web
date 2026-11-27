---
title: "SetVehicleVelocity | open.mp"
description: "Sets the X, Y and Z velocity of a vehicle."
canonical: https://open.mp/docs/scripting/functions/SetVehicleVelocity
language: en
---

# SetVehicleVelocity

## Description

Sets the X, Y and Z velocity of a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to set the velocity of. |
| Float:x | The velocity in the X direction. |
| Float:y | The velocity in the Y direction. |
| Float:z | The velocity in the Z direction. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The vehicle does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 0.2);
        }
        return 1;
    }
}
```

## Notes

warning

This function has no affect on unoccupied vehicles and does not affect trains.

## Related Functions

-   [GetVehicleVelocity](https://open.mp/docs/scripting/functions/GetVehicleVelocity): Get the velocity of a vehicle on the X, Y and Z axes.
-   [SetVehicleAngularVelocity](https://open.mp/docs/scripting/functions/SetVehicleAngularVelocity): Set the angular velocity of a vehicle.
-   [SetPlayerVelocity](https://open.mp/docs/scripting/functions/SetPlayerVelocity): Set a player's velocity.
-   [GetPlayerVelocity](https://open.mp/docs/scripting/functions/GetPlayerVelocity): Get a player's velocity.
