---
title: EnablePlayerCameraTarget
sidebar_label: EnablePlayerCameraTarget
description: Toggle camera targeting functions for a player.
tags: ["player"]
---

<VersionWarn version='SA-MP 0.3.7' />

## Description

Toggle camera targeting functions for a player. Disabled by default to save bandwidth.

| Name        | Description                                                              |
| ----------- | ------------------------------------------------------------------------ |
| playerid    | The ID of the player to toggle camera targeting functions for.           |
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

- [IsPlayerCameraTargetEnabled](IsPlayerCameraTargetEnabled): Check if the player camera target is enabled.
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): Get the ID of the vehicle a player is looking at.
- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): Get the ID of the player a player is looking at.
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): Get the player's camera front vector
