---
title: IsPlayerInCheckpoint
description: Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.
tags: ['player', 'checkpoint']
---

# IsPlayerInCheckpoint

<TagLinks />

## Description

Check if the player is currently inside a checkpoint, this could be used for properties or teleport points for example.


| Name | Description |
|------|-------------|
|playerid | The player you want to know the status of.|


## Returns

false if player isn't in his checkpoint else true


## Examples


```c
if (IsPlayerInCheckpoint(playerid))
{
  SetPlayerHealth(playerid, 100.0);
}
```


## Related Functions


-  SetPlayerCheckpoint: Create a checkpoint for a player.
-  DisablePlayerCheckpoint: Disable the player's current checkpoint.
-  SetPlayerRaceCheckpoint: Create a race checkpoint for a player.
-  DisablePlayerRaceCheckpoint: Disable the player's current race checkpoint.
-  IsPlayerInRaceCheckpoint: Check if a player is in a race checkpoint.
-  OnPlayerEnterCheckpoint: Called when a player enters a checkpoint.
-  OnPlayerLeaveCheckpoint: Called when a player leaves a checkpoint.
-  OnPlayerEnterRaceCheckpoint: Called when a player enters a race checkpoint.
-  OnPlayerLeaveRaceCheckpoint: Called when a player leaves a race checkpoint.