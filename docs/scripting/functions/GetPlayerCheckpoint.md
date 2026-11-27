---
title: "GetPlayerCheckpoint | open.mp"
description: "Get the location of the current checkpoint."
canonical: https://open.mp/docs/scripting/functions/GetPlayerCheckpoint
language: en
---

# GetPlayerCheckpoint

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the location of the current checkpoint.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the checkpoint position of. |
| &Float:centreX | A float variable in which to store the centreX coordinate in, passed by reference. |
| &Float:centreY | A float variable in which to store the centreY coordinate in, passed by reference. |
| &Float:centreZ | A float variable in which to store the centreZ coordinate in, passed by reference. |
| &Float:radius | A float variable in which to store the radius in, passed by reference. |

## Returns

This function does not return any specific values.

## Examples

```c
SetPlayerCheckpoint(playerid, 408.9874, 2537.8059, 16.5455, 1.5);

new Float:centreX,
    Float:centreY,
    Float:centreZ,
    Float:radius;

GetPlayerCheckpoint(playerid, centreX, centreY, centreZ, radius);
```

## Related Functions

-   [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint): Create a checkpoint for a player.
-   [DisablePlayerCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
-   [IsPlayerInCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
-   [IsPlayerCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerCheckpointActive): Check if the player currently has a checkpoint visible.
-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [DisablePlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
-   [IsPlayerInRaceCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.

## Related Callbacks

-   [OnPlayerEnterCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
-   [OnPlayerLeaveCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
-   [OnPlayerEnterRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
-   [OnPlayerLeaveRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
