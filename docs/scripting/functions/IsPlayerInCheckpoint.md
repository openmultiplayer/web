---
id: IsPlayerInCheckpoint
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

false if player isn't in his checkpoint else true

## Examples

```c
if (IsPlayerInCheckpoint(playerid))
{
  SetPlayerHealth(playerid, 100.0);
}
```

## Related Functions

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint.md): Disable the player's current checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a race checkpoint.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint.md): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint.md): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint.md): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint.md): Called when a player leaves a race checkpoint.
