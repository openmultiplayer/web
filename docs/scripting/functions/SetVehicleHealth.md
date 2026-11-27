---
title: "SetVehicleHealth | open.mp"
description: "Set a vehicle's health."
canonical: https://open.mp/docs/scripting/functions/SetVehicleHealth
language: en
---

# SetVehicleHealth

## Description

Set a vehicle's health. When a vehicle's health decreases the engine will produce smoke, and finally fire when it decreases to less than 250 (25%).

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to set the health of. |
| Float:health | The [health](https://open.mp/docs/scripting/resources/vehiclehealth), given as a float value. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the vehicle does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp("/fixengine", cmdtext, true) == 0)
    {
        new
            vehicleid = GetPlayerVehicleID(playerid);

        SetVehicleHealth(vehicleid, 1000.0);
        SendClientMessage(playerid, -1, "The vehicles engine has been fully repaired.");
        return 1;
    }
    return 0;
}
```

## Notes

note

Full vehicle health is **1000**. Higher values are possible. For more information on health values, see [this](https://open.mp/docs/scripting/resources/vehiclehealth) page.

## Related Functions

-   [GetVehicleHealth](https://open.mp/docs/scripting/functions/GetVehicleHealth): Check the health of a vehicle.
-   [RepairVehicle](https://open.mp/docs/scripting/functions/RepairVehicle): Fully repair a vehicle.
-   [SetPlayerHealth](https://open.mp/docs/scripting/functions/SetPlayerHealth): Set a player's health.

## Related Callbacks

-   [OnVehicleDeath](https://open.mp/docs/scripting/callbacks/OnVehicleDeath): Called when a vehicle is destroyed.

## Related Resources

-   [Vehicle Health Values](https://open.mp/docs/scripting/resources/vehiclehealth)
