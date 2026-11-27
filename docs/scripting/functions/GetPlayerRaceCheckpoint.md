---
title: "GetPlayerRaceCheckpoint | open.mp"
description: "Get the location of the current race checkpoint."
canonical: https://open.mp/docs/scripting/functions/GetPlayerRaceCheckpoint
language: en
---

# GetPlayerRaceCheckpoint

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Get the location of the current race checkpoint.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the checkpoint position of. |
| &Float:centreX | A float variable in which to store the centreX coordinate in, passed by reference. |
| &Float:centreY | A float variable in which to store the centreY coordinate in, passed by reference. |
| &Float:centreZ | A float variable in which to store the centreZ coordinate in, passed by reference. |
| &Float:nextX | A float variable in which to store the nextX coordinate in, passed by reference. |
| &Float:nextY | A float variable in which to store the nextY coordinate in, passed by reference. |
| &Float:nextZ | A float variable in which to store the nextZ coordinate in, passed by reference. |
| &Float:radius | A float variable in which to store the radius in, passed by reference. |

## Returns

This function does not return any specific values.

## Examples

```c
SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 373.1631, 2502.4644, 16.4774, 269.8644, 2503.4963, 16.4774, 2.0);

new Float:centreX,
    Float:centreY,
    Float:centreZ,
    Float:nextX,
    Float:nextY,
    Float:nextZ,
    Float:radius;

GetPlayerRaceCheckpoint(playerid, centreX, centreY, centreZ, nextX, nextY, nextZ, radius);
```

## Related Functions

-   [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint): Create a checkpoint for a player.
-   [DisablePlayerCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerCheckpoint): Disable the player's current checkpoint.
-   [IsPlayerInCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [DisablePlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
-   [IsPlayerInRaceCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
-   [IsPlayerRaceCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerRaceCheckpointActive): Check if the player currently has a race checkpoint visible.

## Related Callbacks

-   [OnPlayerEnterCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
-   [OnPlayerLeaveCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
-   [OnPlayerEnterRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
-   [OnPlayerLeaveRaceCheckpoint](https://open.mp/docs/scripting/callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
