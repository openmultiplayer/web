---
title: IsPlayerInRaceCheckpoint
description: Check if the player is inside their current set race checkpoint (SetPlayerRaceCheckpoint).
tags: ['player', 'checkpoint', 'racecheckpoint']
---

# IsPlayerInRaceCheckpoint

<TagLinks />

## Description

Check if the player is inside their current set race checkpoint (SetPlayerRaceCheckpoint).


| Name | Description |
|------|-------------|
|playerid | The ID of the player to check.|


## Returns

 0: Player is not in a race checkpoint.

 1: Player is in a race checkpoint.



## Examples


```c
if(IsPlayerInRaceCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100);
}
```


## Related Functions


-  SetPlayerCheckpoint: Create a checkpoint for a player.
-  DisablePlayerCheckpoint: Disable the player's current checkpoint.
-  IsPlayerInCheckpoint: Check if a player is in a checkpoint.
-  SetPlayerRaceCheckpoint: Create a race checkpoint for a player.
-  DisablePlayerRaceCheckpoint: Disable the player's current race checkpoint.
-  OnPlayerEnterCheckpoint: Called when a player enters a checkpoint.
-  OnPlayerLeaveCheckpoint: Called when a player leaves a checkpoint.
-  OnPlayerEnterRaceCheckpoint: Called when a player enters a race checkpoint.
-  OnPlayerLeaveRaceCheckpoint: Called when a player leaves a race checkpoint.