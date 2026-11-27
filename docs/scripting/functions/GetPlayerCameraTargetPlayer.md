---
title: "GetPlayerCameraTargetPlayer | open.mp"
description: "Allows you to retrieve the ID of the player the playerid is looking at."
canonical: https://open.mp/docs/scripting/functions/GetPlayerCameraTargetPlayer
language: en
---

# GetPlayerCameraTargetPlayer

warning

This function was added in SA-MP 0.3.7 and will not work in earlier versions!

## Description

Allows you to retrieve the ID of the player the playerid is looking at.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check |

## Returns

The ID of the player the playerid is looking at

## Examples

```c
new playerTarget = GetPlayerCameraTargetPlayer(playerid);

if (IsPlayerAdmin(playerTarget))
{
    GameTextForPlayer(playerid, "Looking at an admin", 3000, 3);
}
```

## Notes

warning

-   This function is disabled by default to save bandwidth. Use [EnablePlayerCameraTarget](https://open.mp/docs/scripting/functions/EnablePlayerCameraTarget) to enable it for each player.
-   Do not confuse this function with [GetPlayerTargetPlayer](https://open.mp/docs/scripting/functions/GetPlayerTargetPlayer). GetPlayerTargetPlayer returns the ID of the player playerid is **aiming** at (with a weapon). GetPlayerCameraTargetPlayer returns the ID of the player playerid is **looking** at (reference point is the center of the screen).

## Related Functions

-   [GetPlayerCameraTargetActor](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetActor): Get the ID of the actor (if any) a player is looking at.
-   [GetPlayerCameraTargetVehicle](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetVehicle): Get the ID of the vehicle a player is looking at.
-   [GetPlayerCameraTargetObject](https://open.mp/docs/scripting/functions/GetPlayerCameraTargetObject): Get the ID of the object a player is looking at.
-   [GetPlayerCameraFrontVector](https://open.mp/docs/scripting/functions/GetPlayerCameraFrontVector): Get the player's camera front vector
