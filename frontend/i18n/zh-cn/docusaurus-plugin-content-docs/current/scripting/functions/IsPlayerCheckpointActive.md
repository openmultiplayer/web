---
title: IsPlayerCheckpointActive
sidebar_label: IsPlayerCheckpointActive
description: Check if the player currently has a checkpoint visible.
tags: ["player", "checkpoint"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Check if the player currently has a checkpoint visible.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to check. |

## Return Values

Returns **false** if there is no checkpoint currently shown, otherwise returns **true**

## Examples

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerCheckpointActive(playerid))
    {
        // Do something
    }
}
```

## Related Functions

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Create a checkpoint for a player.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): Check if the player currently has a race checkpoint visible.
