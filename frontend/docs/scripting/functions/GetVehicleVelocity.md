---
title: GetVehicleVelocity
sidebar_label: GetVehicleVelocity
description: Get the velocity of a vehicle on the X, Y and Z axes.
tags: ["vehicle"]
---

## Description

Get the velocity of a vehicle on the X, Y and Z axes.

| Name      | Description                                                                          |
| --------- | ------------------------------------------------------------------------------------ |
| vehicleid | The ID of the vehicle to get the velocity of.                                        |
| &Float:x  | A float variable in to which to store the vehicle's X velocity, passed by reference. |
| &Float:y  | A float variable in to which to store the vehicle's Y velocity, passed by reference. |
| &Float:z  | A float variable in to which to store the vehicle's Z velocity, passed by reference. |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute. This means the vehicle specified does not exist.

The vehicle's velocity is stored in the specified variables.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/GetMyCarVelocity", cmdtext))
    {
        if (!IsPlayerInAnyVehicle(playerid))
        {
            return 1;
        }

        new
            Float: vehVelocity[3],
            string[128];

        GetVehicleVelocity(GetPlayerVehicleID(playerid), vehVelocity[0], vehVelocity[1], vehVelocity[2]);

        format(string, sizeof(string), "You are going at a velocity of X%f, Y%f, Z%f", vehVelocity[0], vehVelocity[1], vehVelocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

This function can be used to retrieve a vehicle's speed (km/h, m/s or mph).

:::

## Related Functions

- [SetVehicleVelocity](SetVehicleVelocity): Set a vehicle's velocity.
- [SetPlayerVelocity](SetPlayerVelocity): Set a player's velocity.
- [GetPlayerVelocity](GetPlayerVelocity): Get a player's velocity.
