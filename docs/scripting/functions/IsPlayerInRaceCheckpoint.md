---
id: IsPlayerInRaceCheckpoint
title: IsPlayerInRaceCheckpoint
description: Check if the player is inside their current set race checkpoint (SetPlayerRaceCheckpoint).
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Description

Check if the player is inside their current set race checkpoint (SetPlayerRaceCheckpoint).

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## Returns

0: Player is not in a race checkpoint.

1: Player is in a race checkpoint.

## Examples

```c
if(IsPlayerInRaceCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100);
}
```

## Related Functions

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint.md): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint.md): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Disable the player's current race checkpoint.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint.md): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint.md): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint.md): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint.md): Called when a player leaves a race checkpoint.
