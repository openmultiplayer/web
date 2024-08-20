---
title: GetPlayerFacingAngle
description: Gets the angle a player is facing.
tags: ["player"]
---

## Description

Gets the angle a player is facing.

| Name         | Description                                           |
| ------------ | ----------------------------------------------------- |
| playerid     | The player you want to get the angle of.              |
| &Float:angle | The Float to store the angle in, passed by reference. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player does not exist.

The player's angle is stored in the specified variable.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/angle", true))
    {
        new string[64];

        new Float:angle;
        GetPlayerFacingAngle(playerid, angle);

        format(string, sizeof(string), "Your facing angle: %0.2f", angle);
        SendClientMessage(playerid, 0xFFFFFFFF, string);
        return 1;
    }
    return 0;
}
```

## Notes

:::tip

Angles returned when inside a vehicle is rarely correct. To get the correct facing angle while inside a vehicle, use [GetVehicleZAngle](GetVehicleZAngle).

:::

:::warning

Angles are reversed in GTA:SA; 90 degrees would be East in the real world, but in GTA:SA 90 degrees is in fact West. North and South are still 0/360 and 180. To convert this, simply do 360 - angle.

:::

## Related Functions

- [GetVehicleZAngle](GetVehicleZAngle): Check the current angle of a vehicle.
- [SetPlayerFacingAngle](SetPlayerFacingAngle): Set a player's facing angle.
- [GetPlayerRotationQuat](GetPlayerRotationQuat): Get the quaternion rotation of a player.
