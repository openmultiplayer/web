---
title: "GetPlayerFacingAngle | open.mp"
description: "Gets the angle a player is facing."
canonical: https://open.mp/docs/scripting/functions/GetPlayerFacingAngle
language: en
---

# GetPlayerFacingAngle

## Description

Gets the angle a player is facing.

| Name | Description |
| --- | --- |
| playerid | The player you want to get the angle of. |
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

note

Angles returned when inside a vehicle is rarely correct. To get the correct facing angle while inside a vehicle, use [GetVehicleZAngle](https://open.mp/docs/scripting/functions/GetVehicleZAngle).

warning

Angles are reversed in GTA:SA; 90 degrees would be _East_ in the real world, but in GTA:SA 90 degrees is in fact _West_. North and South are still 0/360 and 180. To convert this, simply do **360 - angle**.

## Related Functions

-   [GetVehicleZAngle](https://open.mp/docs/scripting/functions/GetVehicleZAngle): Check the current angle of a vehicle.
-   [SetPlayerFacingAngle](https://open.mp/docs/scripting/functions/SetPlayerFacingAngle): Set a player's facing angle.
-   [GetPlayerRotationQuat](https://open.mp/docs/scripting/functions/GetPlayerRotationQuat): Get the quaternion rotation of a player.
