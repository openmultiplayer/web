---
id: GetPlayerVelocity
title: GetPlayerVelocity
description: Get the velocity (speed) of a player on the X, Y and Z axes.
tags: ["player"]
---

:::warning

This function was added in SA-MP 0.3a and will not work in earlier versions!

:::

## Description

Get the velocity (speed) of a player on the X, Y and Z axes.

| Name     | Description                                                                         |
| -------- | ----------------------------------------------------------------------------------- |
| playerid | The player to get the speed from.                                                   |
| &Float:x | A float variable in which to store the velocity on the X axis, passed by reference. |
| &Float:y | A float variable in which to store the velocity on the Y axis, passed by reference. |
| &Float:z | A float variable in which to store the velocity on the Z axis, passed by reference. |

## Returns

The function itself doesn't return a specific value. The X, Y and Z velocities are stored in the specified variables.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/velocity", cmdtext))
    {
        new Float:Velocity[3], string[80];
    GetPlayerVelocity(playerid, Velocity[0], Velocity[1], Velocity[2]);
        format(string, sizeof(string), "You are going at a velocity of X: %f, Y: %f, Z: %f", Velocity[0], Velocity[1], Velocity[2]);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
    return 1;
    }
}
```

## Related Functions

- [SetPlayerVelocity](SetPlayerVelocity.md): Set a player's velocity.
- [SetVehicleVelocity](SetVehicleVelocity.md): Set a vehicle's velocity.
- [GetVehicleVelocity](GetVehicleVelocity.md): Get a vehicle's velocity.
