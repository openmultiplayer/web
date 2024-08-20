---
title: GetPlayerRaceCheckpoint
description: Get the location of the current race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the location of the current race checkpoint.

| Name           | Description                                                                        |
| -------------- | ---------------------------------------------------------------------------------- |
| playerid       | The ID of the player to get the checkpoint position of.                            |
| &Float:centreX | A float variable in which to store the centreX coordinate in, passed by reference. |
| &Float:centreY | A float variable in which to store the centreY coordinate in, passed by reference. |
| &Float:centreZ | A float variable in which to store the centreZ coordinate in, passed by reference. |
| &Float:nextX   | A float variable in which to store the nextX coordinate in, passed by reference.   |
| &Float:nextY   | A float variable in which to store the nextY coordinate in, passed by reference.   |
| &Float:nextZ   | A float variable in which to store the nextZ coordinate in, passed by reference.   |
| &Float:radius  | A float variable in which to store the radius in, passed by reference.             |

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

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): Check if the player currently has a race checkpoint visible.

## Related Callbacks

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
