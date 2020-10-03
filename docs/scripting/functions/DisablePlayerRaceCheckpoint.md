---
id: DisablePlayerRaceCheckpoint
title: DisablePlayerRaceCheckpoint
description: Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Description

Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.

| Name     | Description                                       |
| -------- | ------------------------------------------------- |
| playerid | The player to disable the current checkpoint for. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    DisablePlayerRaceCheckpoint(playerid);
    return 1;
}
```

## Related Functions

- [SetPlayerCheckpoint](SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint.md): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint.md): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint.md): Check if a player is in a race checkpoint.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint.md): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint.md): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint.md): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint.md): Called when a player leaves a race checkpoint.
