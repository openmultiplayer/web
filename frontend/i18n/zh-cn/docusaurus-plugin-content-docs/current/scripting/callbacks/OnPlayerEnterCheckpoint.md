---
title: OnPlayerEnterCheckpoint
sidebar_label: OnPlayerEnterCheckpoint
description: This callback is called when a player enters the checkpoint set for that player.
tags: ["player", "checkpoint"]
---

## Description

This callback is called when a player enters the checkpoint set for that player.

| Name     | Description                            |
| -------- | -------------------------------------- |
| playerid | The player who entered the checkpoint. |

## Returns

It is always called first in filterscripts.

## Examples

```c
//In this example, a checkpoint is created for the player when spawning,
//which creates a vehicle and disables the checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): This callback is called when a player leaves a checkpoint. 
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): This callback is called when a player enters a race checkpoint. 
- [OnPlayerLeaveRaceCheckpoint](OnPlayerLeaveRaceCheckpoint): This callback is called when a player leaves a race checkpoint. 

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
