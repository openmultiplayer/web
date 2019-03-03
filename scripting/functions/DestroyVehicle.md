# DestroyVehicle

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

- CreateVehicle: Create a vehicle.
- RemovePlayerFromVehicle: Throw a player out of their vehicle.
- SetVehicleToRespawn: Respawn a vehicle.
