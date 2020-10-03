---
id: DestroyVehicle
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

1: The function executed successfully.

0: The function failed to execute. The vehicle does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
     if(strcmp(cmdtext, "/destroyveh", true) == 0)
     {
          new vehicleid = GetPlayerVehicleID(playerid);
          DestroyVehicle(vehicleid);
          return 1;
     }

     return 0;
}
```

## Related Functions

- [CreateVehicle](../functions/CreateVehicle.md): Create a vehicle.
- [RemovePlayerFromVehicle](../functions/RemovePlayerFromVehicle.md): Throw a player out of their vehicle.
- [SetVehicleToRespawn](../functions/SetVehicleToRespawn.md): Respawn a vehicle.
