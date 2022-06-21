---
title: OnPlayerLeaveRaceCheckpoint
description: This callback is called when a player leaves the race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Description

This callback is called when a player leaves the race checkpoint.

| Name     | Description                                         |
| -------- | --------------------------------------------------- |
| playerid | The ID of the player that left the race checkpoint. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    printf("Player %d left a race checkpoint!", playerid);
    return 1;
}
```

## Notes

<TipNPCCallbacks />

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerEnterCheckpoint](OnPlayerEnterCheckpoint): This callback is called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](OnPlayerLeaveCheckpoint): This callback is called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](OnPlayerEnterRaceCheckpoint): This callback is called when a player enters a race checkpoint. 

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
