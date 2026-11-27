---
title: "DisablePlayerRaceCheckpoint | open.mp"
description: "Disable any initialized race checkpoints for a specific player, since you can only have one at any given time."
canonical: https://open.mp/docs/scripting/functions/DisablePlayerRaceCheckpoint
language: en
---

# DisablePlayerRaceCheckpoint

## Description

Disable any initialized race checkpoints for a specific player, since you can only have one at any given time.

| Name | Description |
| --- | --- |
| playerid | The player to disable the current checkpoint for. |

## Returns

This function does not return any specific values.

## Examples

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    DisablePlayerRaceCheckpoint(playerid);
    return 1;
}
```

## Related Functions

-   [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint): Create a checkpoint for a player.
-   [DisablePlayerCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
-   [IsPlayerInCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [IsPlayerInRaceCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
-   [IsPlayerRaceCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerRaceCheckpointActive): Check if the player currently has a race checkpoint visible.

## Related Callbacks

-   [OnPlayerEnterCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
-   [OnPlayerLeaveCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
-   [OnPlayerEnterRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
-   [OnPlayerLeaveRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
