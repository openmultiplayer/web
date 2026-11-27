---
title: "SetVehicleZAngle | open.mp"
description: "Set the Z rotation (yaw) of a vehicle."
canonical: https://open.mp/docs/scripting/functions/SetVehicleZAngle
language: en
---

# SetVehicleZAngle

## Description

Set the Z rotation (yaw) of a vehicle.

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to set the rotation of. |
| Float:angle | The Z angle to set. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The vehicle specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/flip", true) == 0)
    {
        new
            vehicleid,
            Float:angle;

        vehicleid = GetPlayerVehicleID(playerid);
        GetVehicleZAngle(vehicleid, angle);
        SetVehicleZAngle(vehicleid, angle);

        SendClientMessage(playerid, 0xFFFFFFFF, "Your vehicle has been flipped.");
        return 1;
    }
    return 0;
}
```

## Notes

note

-   A vehicle's X and Y (pitch and roll) rotation will be reset when this function is used. The X and Y rotations can not be set.
-   This function does not work on unoccupied vehicles (It is believed to be a GTA limitation).

## Related Functions

-   [GetVehicleZAngle](https://open.mp/docs/scripting/functions/GetVehicleZAngle): Check the current angle of a vehicle.
-   [SetVehiclePos](https://open.mp/docs/scripting/functions/SetVehiclePos): Set the position of a vehicle.
