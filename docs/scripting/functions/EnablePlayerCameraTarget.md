---
title: "EnablePlayerCameraTarget | open.mp"
description: "Toggle camera targeting functions for a player."
canonical: https://open.mp/docs/scripting/functions/EnablePlayerCameraTarget
language: en
---

# EnablePlayerCameraTarget

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Toggle camera targeting functions for a player. Disabled by default to save bandwidth.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to toggle camera targeting functions for. |
| bool:enable | 'true' to enable camera targeting functions and 'false' to disable them. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. The player is not connected.

## Examples

```c
public OnPlayerConnect(playerid)
{
     EnablePlayerCameraTarget(playerid, true);
     return 1;
}
```

## Related Functions

-   [IsPlayerCameraTargetEnabled](https://open.mp/docs/scripting/functions/IsPlayerCameraTargetEnabled): Check if the player camera target is enabled.
-   [GetPlayerCameraTargetVehicle](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetVehicle): Get the ID of the vehicle a player is looking at.
-   [GetPlayerCameraTargetPlayer](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetPlayer): Get the ID of the player a player is looking at.
-   [GetPlayerCameraFrontVector](https://open.mp/docs/scripting/functions/GetPlayerCameraFrontVector): Get the player's camera front vector
