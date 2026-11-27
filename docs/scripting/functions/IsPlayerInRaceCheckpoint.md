---
title: "IsPlayerInRaceCheckpoint | open.mp"
description: "Check if the player is inside their current set race checkpoint (SetPlayerRaceCheckpoint)."
canonical: https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint
language: en
---

# IsPlayerInRaceCheckpoint

## Description

Check if the player is inside their current set race checkpoint ([SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint)).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Returns

**true** - Player is in a race checkpoint.

**false** - Player is not in a race checkpoint.

## Examples

```c
if (IsPlayerInRaceCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```

## Related Functions

-   [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint): Create a checkpoint for a player.
-   [IsPlayerRaceCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerRaceCheckpointActive): Check if the player currently has a race checkpoint visible.
-   [DisablePlayerCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
-   [IsPlayerInCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [DisablePlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.

## Related Callbacks

-   [OnPlayerEnterCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
-   [OnPlayerLeaveCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
-   [OnPlayerEnterRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
-   [OnPlayerLeaveRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
