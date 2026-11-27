---
title: "DisablePlayerCheckpoint | open.mp"
description: "Disables (hides/destroys) a player's set checkpoint."
canonical: https://open.mp/docs/scripting/functions/DisablePlayerCheckpoint
language: en
---

# DisablePlayerCheckpoint

## Description

Disables (hides/destroys) a player's set checkpoint. Players can only have a single checkpoint set at a time. Checkpoints don't need to be disabled before setting another one.

| Name | Description |
| --- | --- |
| playerid | The ID of the player whose checkpoint to disable. |

## Returns

**true** - The function executed successfully. Success is also returned if the player doesn't have a checkpoint shown already.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerEnterCheckpoint(playerid)
{
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Related Functions

-   [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint): Create a checkpoint for a player.
-   [IsPlayerInCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
-   [IsPlayerCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerCheckpointActive): Check if the player currently has a checkpoint visible.
-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [DisablePlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
-   [IsPlayerInRaceCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.

## Related Callbacks

-   [OnPlayerEnterCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
-   [OnPlayerLeaveCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
-   [OnPlayerLeaveRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
-   [OnPlayerEnterRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
