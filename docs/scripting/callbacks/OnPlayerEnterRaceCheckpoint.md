---
id: OnPlayerEnterRaceCheckpoint
title: OnPlayerEnterRaceCheckpoint
description: This callback is called when a player enters a race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

<TagLinks />

## Description

This callback is called when a player enters a race checkpoint.

| Name     | Description                                           |
| -------- | ----------------------------------------------------- |
| playerid | The ID of the player who entered the race checkpoint. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerEnterRaceCheckpoint(playerid)
{
    printf("Player %d entered a race checkpoint!",playerid);
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
