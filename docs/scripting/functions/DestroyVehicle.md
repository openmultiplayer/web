---
title: "DestroyVehicle | open.mp"
description: "Destroy a vehicle."
canonical: https://open.mp/docs/scripting/functions/DestroyVehicle
language: en
---

# DestroyVehicle

## Description

Destroy a vehicle. It will disappear instantly.

| Name | Description |
| --- | --- |
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

-   [CreateVehicle](https://open.mp/docs/scripting/functions/CreateVehicle): Create a vehicle.
-   [RemovePlayerFromVehicle](https://open.mp/docs/scripting/functions/RemovePlayerFromVehicle): Throw a player out of their vehicle.
-   [SetVehicleToRespawn](https://open.mp/docs/scripting/functions/SetVehicleToRespawn): Respawn a vehicle.
