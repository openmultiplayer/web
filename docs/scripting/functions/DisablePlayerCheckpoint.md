---
title: DisablePlayerCheckpoint
description: Disables (hides/destroys) a player's set checkpoint.
tags: ["player", "checkpoint"]
---

## Description

Disables (hides/destroys) a player's set checkpoint. Players can only have a single checkpoint set at a time. Checkpoints don't need to be disabled before setting another one.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The ID of the player whose checkpoint to disable. |

## Returns

**true** - The function executed successfully. Success is also returned if the player doesn't have a checkpoint shown already.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerEnterCheckpoint(playerid)
{
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Related Functions

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Create a checkpoint for a player.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Check if the player currently has a checkpoint visible.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.

## Related Callbacks

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
