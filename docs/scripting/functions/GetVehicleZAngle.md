---
title: "GetVehicleZAngle | open.mp"
description: "Get the rotation of a vehicle on the Z axis (yaw)."
canonical: https://open.mp/docs/scripting/functions/GetVehicleZAngle
language: en
---

# GetVehicleZAngle

## Description

Get the rotation of a vehicle on the Z axis (yaw).

| Name | Description |
| --- | --- |
| vehicleid | The ID of the vehicle to get the Z angle of. |
| &Float:angle | A float variable in which to store the Z rotation, passed by reference. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the vehicle does not exist.

The vehicle's rotation is stored in the specified variable.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehrot", true) == 0)
     {
          new
               vehicleid,
               Float:rotZ,
               string[64];

          vehicleid = GetPlayerVehicleID(playerid);

          GetVehicleZAngle(vehicleid, rotZ);

          format(string, sizeof(string), "The current vehicle rotation is: %.0f", rotZ);
          SendClientMessage(playerid, 0xFFFFFFFF, string);
          return 1;
     }
     return 0;
}
```

## Related Functions

-   [GetVehicleRotationQuat](https://open.mp/docs/scripting/functions/GetVehicleRotationQuat): Get the quaternion rotation of a vehicle.
-   [SetVehicleZAngle](https://open.mp/docs/scripting/functions/SetVehicleZAngle): Set the direction of a vehicle.
-   [GetVehiclePos](https://open.mp/docs/scripting/functions/GetVehiclePos): Get the position of a vehicle.
-   [GetVehicleMatrix](https://open.mp/docs/scripting/functions/GetVehicleMatrix): Gets the actual rotation matrix of the vehicle.
-   [GetPlayerFacingAngle](https://open.mp/docs/scripting/functions/GetPlayerFacingAngle): Check where a player is facing.
-   [GetVehicleRotation](https://open.mp/docs/scripting/functions/GetVehicleRotation): Get the rotation of a vehicle on the XYZ axis.
