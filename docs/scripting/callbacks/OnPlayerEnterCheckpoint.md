---
id: OnPlayerEnterCheckpoint
title: OnPlayerEnterCheckpoint
description: This callback is called when a player enters the checkpoint set for that player.
tags: ["player", "checkpoint"]
---

<TagLinks />

## Description

This callback is called when a player enters the checkpoint set for that player.

| Name     | Description                            |
| -------- | -------------------------------------- |
| playerid | The player who entered the checkpoint. |

## Returns

It is always called first in filterscripts.

## Examples

```c
//In this example, a checkpoint is created for the player when spawning,
//which creates a vehicle and disables the checkpoint.
public OnPlayerSpawn(playerid)
{
    SetPlayerCheckpoint(playerid, 1982.6150, -220.6680, -0.2432, 3.0);
    return 1;
}

public OnPlayerEnterCheckpoint(playerid)
{
    CreateVehicle(520, 1982.6150, -221.0145, -0.2432, 82.2873, -1, -1, 60000);
    DisablePlayerCheckpoint(playerid);
    return 1;
}
```

## Notes

:::tip

This callback can also be called by NPC.

:::

## Related Functions

- SetPlayerCheckpoint: Create a checkpoint for a player.
- DisablePlayerCheckpoint: Disable the player's current checkpoint.
- IsPlayerInCheckpoint: Check if a player is in a checkpoint.
- SetPlayerRaceCheckpoint: Create a race checkpoint for a player.
- DisablePlayerRaceCheckpoint: Disable the player's current race checkpoint.
- IsPlayerInRaceCheckpoint: Check if a player is in a race checkpoint.
