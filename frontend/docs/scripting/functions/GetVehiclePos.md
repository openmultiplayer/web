---
title: GetVehiclePos
description: Gets the position of a vehicle.
tags: ["vehicle"]
---

## Description

Gets the position of a vehicle.

| Name      | Description                                                               |
| --------- | ------------------------------------------------------------------------- |
| vehicleid | The ID of the vehicle to get the position of.                             |
| &Float:x  | A float variable in which to store the X coordinate, passed by reference. |
| &Float:y  | A float variable in which to store the Y coordinate, passed by reference. |
| &Float:z  | A float variable in which to store the Z coordinate, passed by reference. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. The vehicle specified does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/vehpos", true) == 0)
     {
          new vehicleid = GetPlayerVehicleID(playerid);

          // if vehicleid is equal to 0
          if (vehicleid == 0)
          {
               return SendClientMessage(playerid, -1, "You are not in any vehicle!");
          }

          new
               Float:vehX, Float:vehY, Float:vehZ,
               string[128];

          GetVehiclePos(vehicleid, vehX, vehY, vehZ);
          format(string, sizeof(string), "The current vehicle positions are: %f, %f, %f", vehX, vehY, vehZ);
          SendClientMessage(playerid, 0xFFFFFFFF, string);
          return 1;
     }

     return 0;
}
```

## Related Functions

- [GetVehicleDistanceFromPoint](GetVehicleDistanceFromPoint): Get the distance between a vehicle and a point.
- [SetVehiclePos](SetVehiclePos): Set the position of a vehicle.
- [GetVehicleZAngle](GetVehicleZAngle): Check the current angle of a vehicle.
- [GetVehicleRotationQuat](GetVehicleRotationQuat): Get the rotation quaternion of a vehicle.
