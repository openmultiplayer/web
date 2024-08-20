---
title: IsPlayerInCheckpoint
description: Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.
tags: ["player", "checkpoint"]
---

## Description

Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.

| Name     | Description                                |
| -------- | ------------------------------------------ |
| playerid | The player you want to know the status of. |

## Returns

**false** if the player isn't inside the checkpoint, otherwise **true**

## Examples

```c
if (IsPlayerInCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```

## Related Functions

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Create a checkpoint for a player.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Check if the player currently has a checkpoint visible.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.

## Related Callbacks

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
