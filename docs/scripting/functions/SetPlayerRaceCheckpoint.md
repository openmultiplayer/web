---
title: SetPlayerRaceCheckpoint
description: Creates a race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Description

Creates a race checkpoint. When the player enters it, the OnPlayerEnterRaceCheckpoint callback is called.

| Name          | Description                                                    |
|---------------|----------------------------------------------------------------|
| playerid      | The ID of the player to set the checkpoint for                 |
| CP_TYPE:type  | [Type of race checkpoint](../resources/race-checkpoint-types)  |
| Float:centreX | X-Coordinate                                                   |
| Float:centreY | Y-Coordinate                                                   |
| Float:centreZ | Z-Coordinate                                                   |
| Float:nextX   | X-Coordinate of the next point, for the arrow facing direction |
| Float:nextY   | Y-Coordinate of the next point, for the arrow facing direction |
| Float:nextZ   | Z-Coordinate of the next point, for the arrow facing direction |
| Float:radius  | Size (diameter) of the checkpoint                              |

## Returns

1: The function executed successfully.

0: The function failed to execute. This means the player specified does not exist.

## Examples

```c
SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 644.3091, 1767.0223, 4.9970, 650.6734, 1812.0367, 4.9970, 3.0);
```

Another example:

```c
//from Yagu's race filterscript, (c) by Yagu
public SetRaceCheckpoint(playerid, Airrace, target, next)
{
    if (next == -1 && Airrace == 0)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);
    }
    else if (next == -1 && Airrace == 1)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_FINISH, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], 0.0, 0.0, 0.0, CPsize);
    }
    else if (Airrace == 1)
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_AIR_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);
    }
    else
    {
        SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, RaceCheckpoints[target][0], RaceCheckpoints[target][1], RaceCheckpoints[target][2], RaceCheckpoints[next][0], RaceCheckpoints[next][1], RaceCheckpoints[next][2], CPsize);
    }
}
```

## Notes

:::warning

Race checkpoints are asynchronous, meaning only one can be shown at a time. To 'stream' race checkpoints (only show them when players are close enough), use a race checkpoint streamer.

:::

## Related Functions

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [GetPlayerRaceCheckpoint](GetPlayerRaceCheckpoint): Get the location of the current race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): Check if the player currently has a race checkpoint visible.
- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.

## Related Resources

- [Types of race checkpoints](../resources/race-checkpoint-types).
