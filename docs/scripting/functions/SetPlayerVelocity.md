---
title: "SetPlayerVelocity | open.mp"
description: "Set a player's velocity on the X, Y and Z axes."
canonical: https://open.mp/docs/scripting/functions/SetPlayerVelocity
language: en
---

# SetPlayerVelocity

## Description

Set a player's velocity on the X, Y and Z axes.

| Name | Description |
| --- | --- |
| playerid | The player to apply the speed to. |
| Float:x | The velocity (speed) on the X axis. |
| Float:y | The velocity (speed) on the Y axis. |
| Float:z | The velocity (speed) on the Z axis. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp("/jump", cmdtext))
    {
        SetPlayerVelocity(playerid, 0.0, 0.0, 0.2); // Forces the player to jump (Z velocity + 0.2)
        return 1;
    }
    return 0;
}
```

## Related Functions

-   [GetPlayerVelocity](https://open.mp/docs/scripting/functions/GetPlayerVelocity): Get a player's velocity.
-   [SetVehicleVelocity](https://open.mp/docs/scripting/functions/SetVehicleVelocity): Set a vehicle's velocity.
-   [GetVehicleVelocity](https://open.mp/docs/scripting/functions/GetVehicleVelocity): Get a vehicle's velocity.
