---
title: GetPlayerCheckpoint
sidebar_label: GetPlayerCheckpoint
description: Get the location of the current checkpoint.
tags: ["player", "checkpoint"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Get the location of the current checkpoint.

| Name           | Description                                                                        |
| -------------- | ---------------------------------------------------------------------------------- |
| playerid       | The ID of the player to get the checkpoint position of.                            |
| &Float:centreX | A float variable in which to store the centreX coordinate in, passed by reference. |
| &Float:centreY | A float variable in which to store the centreY coordinate in, passed by reference. |
| &Float:centreZ | A float variable in which to store the centreZ coordinate in, passed by reference. |
| &Float:radius  | A float variable in which to store the radius in, passed by reference.             |

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

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Check if a player is in a checkpoint.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Check if the player currently has a checkpoint visible.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.

## Related Callbacks

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Called when a player enters a checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Called when a player leaves a checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Called when a player enters a race checkpoint.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Called when a player leaves a race checkpoint.
