---
title: DisablePlayerRaceCheckpoint
description: Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.
tags: ["player", "checkpoint", "racecheckpoint"]
---

# DisablePlayerRaceCheckpoint

<TagLinks />

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

- SetPlayerCheckpoint: Create a checkpoint for a player.
- DisablePlayerCheckpoint: Disable the player's current checkpoint.
- IsPlayerInCheckpoint: Check if a player is in a checkpoint.
- SetPlayerRaceCheckpoint: Create a race checkpoint for a player.
- IsPlayerInRaceCheckpoint: Check if a player is in a race checkpoint.
- OnPlayerEnterCheckpoint: Called when a player enters a checkpoint.
- OnPlayerLeaveCheckpoint: Called when a player leaves a checkpoint.
- OnPlayerEnterRaceCheckpoint: Called when a player enters a race checkpoint.
- OnPlayerLeaveRaceCheckpoint: Called when a player leaves a race checkpoint.
