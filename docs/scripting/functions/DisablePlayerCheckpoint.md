---
id: DisablePlayerCheckpoint
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

1: The function executed successfully. Success is also returned if the player doesn't have a checkpoint shown already.

0: The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerEnterCheckpoint(playerid)
{
    GivePlayerMoney(playerid, 10000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Related Functions

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint.md): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a race checkpoint.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint.md): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint.md): Called when a player leaves a checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint.md): Called when a player leaves a race checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint.md): Called when a player enters a race checkpoint.
