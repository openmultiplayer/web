---
title: "GetVehicleHealth | open.mp"
description: "Get the health of a vehicle."
canonical: https://open.mp/docs/scripting/functions/GetVehicleHealth
language: en
---

# GetVehicleHealth

## Description

Get the health of a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the health of. |
| &Float:health | A float variable in which to store the vehicle's health, passed by reference |

## Returns

**true** - success

**false** - failure (invalid vehicle ID).

The vehicle's health is stored in the referenced variable, not in the return value.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/repair", true) == 0)
    {
        new
            Float:vehicleHealth,
            vehicleid = GetPlayerVehicleID(playerid);

        GetVehicleHealth(vehicleid, vehicleHealth);

        if (vehicleHealth > 500.0)
        {
            return SendClientMessage(playerid, COLOR_RED, "Vehicle doesn't need repairing!");
        }

        SetVehicleHealth(vehicleid, 1000.0);
        SendClientMessage(playerid, COLOR_GREEN, "Vehicle repaired!");
        return 1;
    }
    return 0;
}
```

## Notes

note

-   Full vehicle health is **1000**, however higher values are possible and increase the health of the vehicle. For more information on health values, see [here](https://open.mp/docs/scripting/resources/vehiclehealth).
-   A vehicle catches on fire when its health is below 250. It will explode a few seconds later.

## Related Functions

-   [SetVehicleHealth](https://open.mp/docs/scripting/functions/SetVehicleHealth): Set the health of a vehicle.
-   [GetPlayerHealth](https://open.mp/docs/scripting/functions/GetPlayerHealth): Find out how much health a player has.
-   [GetPlayerArmour](https://open.mp/docs/scripting/functions/GetPlayerArmour): Find out how much armour a player has.

## Related Resources

-   [Vehicle Health Values](https://open.mp/docs/scripting/resources/vehiclehealth)
