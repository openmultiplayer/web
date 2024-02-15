---
title: IsPlayerRaceCheckpointActive
description: Check if the player currently has a race checkpoint visible.
tags: ["player", "checkpoint", "racecheckpoint"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Check if the player currently has a race checkpoint visible.

| Name        | Description           |
| ----------- | --------------------- |
| playerid | The ID of the player to check. |

## Return Values

Returns **false** if there is no race checkpoint currently shown, otherwise returns **true**

## Examples

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerRaceCheckpointActive(playerid))
    {
        // Do something
    }
}
```

## Related Functions

- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Check if the player currently has a checkpoint visible.
