---
title: SetVehicleAngularVelocity
description: Sets the angular X, Y and Z velocity of a vehicle.
tags: ["vehicle"]
---

:::info

This function is in _world_ space not _local_ space. If you want to make local space angular velocity adjustments, you must apply a rotation matrix based on the [vehicle rotation quat](GetVehicleRotationQuat).

:::

## Description

Sets the angular X, Y and Z velocity of a vehicle

| Name      | Description                                         |
| --------- | --------------------------------------------------- |
| vehicleid | The ID of the vehicle to set the velocity of.       |
| Float:x   | The amount of velocity in the angular X direction.  |
| Float:y   | The amount of velocity in the angular Y direction.  |
| Float:z   | The amount of velocity in the angular Z direction.  |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The vehicle does not exist.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/spin", cmdtext))
    {
        if (IsPlayerInAnyVehicle(playerid))
        {
            SetVehicleAngularVelocity(GetPlayerVehicleID(playerid), 0.0, 0.0, 2.0);
        }
        return 1;
    }
}
```

## Notes

:::warning

This function has no effect on unoccupied vehicles and does not affect trains.

:::

## Related Functions

- [SetVehicleVelocity](SetVehicleVelocity): Set a vehicle's velocity.
- [GetVehicleVelocity](GetVehicleVelocity): Get a vehicle's velocity.
