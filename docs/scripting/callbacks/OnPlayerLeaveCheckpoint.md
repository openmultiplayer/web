---
title: "OnPlayerLeaveCheckpoint | open.mp"
description: "This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerLeaveCheckpoint
language: en
---

# OnPlayerLeaveCheckpoint

## Description

This callback is called when a player leaves the checkpoint set for them by [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint). Only one checkpoint can be set at a time.

| Name | Description |
| --- | --- |
| playerid | The ID of the player that left their checkpoint. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Player %i left a checkpoint!", playerid);
    return 1;
}
```

## Notes

note

This callback can also be called by NPC.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerEnterCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint): This callback is called when a player enters a checkpoint.
-   [OnPlayerEnterRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint): This callback is called when a player enters a race checkpoint.
-   [OnPlayerLeaveRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint): This callback is called when a player leaves a race checkpoint.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint): Create a checkpoint for a player.
-   [DisablePlayerCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
-   [IsPlayerInCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [DisablePlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
-   [IsPlayerInRaceCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
