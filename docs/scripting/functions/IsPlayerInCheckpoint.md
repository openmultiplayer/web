---
title: "IsPlayerInCheckpoint | open.mp"
description: "Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example."
canonical: https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint
language: en
---

# IsPlayerInCheckpoint

## Description

Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.

| Name | Description |
| --- | --- |
| playerid | The player you want to know the status of. |

## Returns

**false** if the player isn't inside the checkpoint, otherwise **true**

## Examples

```c
if (IsPlayerInCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```

## Related Functions

-   [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint): Create a checkpoint for a player.
-   [IsPlayerCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerCheckpointActive): Check if the player currently has a checkpoint visible.
-   [DisablePlayerCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [DisablePlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
-   [IsPlayerInRaceCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.

## Related Callbacks

-   [OnPlayerEnterCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
-   [OnPlayerLeaveCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
-   [OnPlayerEnterRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
-   [OnPlayerLeaveRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
