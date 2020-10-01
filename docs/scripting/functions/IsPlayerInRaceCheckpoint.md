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

- [SetPlayerCheckpoint](../../scripting/functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../../scripting/functions/DisablePlayerCheckpoint.md): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../../scripting/functions/IsPlayerInCheckpoint.md): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../../scripting/functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../../scripting/functions/DisablePlayerRaceCheckpoint.md): Disable the player's current race checkpoint.
- [OnPlayerEnterCheckpoint](../../scripting/callbacks/OnPlayerEnterCheckpoint.md): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../../scripting/callbacks/OnPlayerLeaveCheckpoint.md): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../../scripting/callbacks/OnPlayerEnterRaceCheckpoint.md): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../../scripting/callbacks/OnPlayerLeaveRaceCheckpoint.md): Called when a player leaves a race checkpoint.
