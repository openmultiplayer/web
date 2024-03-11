---
title: DestroyVehicle
description: Destroy a vehicle.
tags: ["vehicle"]
---

## Description

Destroy a vehicle. It will disappear instantly.

| Name      | Description                       |
| --------- | --------------------------------- |
| vehicleid | The ID of the vehicle to destroy. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The vehicle does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if (strcmp(cmdtext, "/destroyveh", true) == 0)
     {
          if (IsPlayerInAnyVehicle(playerid))
          {
               new vehicleid = GetPlayerVehicleID(playerid);
               DestroyVehicle(vehicleid);
          }
          return 1;
     }
     return 0;
}
```

## Related Functions

- [CreateVehicle](CreateVehicle): Create a vehicle.
- [RemovePlayerFromVehicle](RemovePlayerFromVehicle): Throw a player out of their vehicle.
- [SetVehicleToRespawn](SetVehicleToRespawn): Respawn a vehicle.
