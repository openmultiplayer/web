---
title: OnPlayerLeaveCheckpoint
description: This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint.
tags: ["player", "checkpoint"]
---

# OnPlayerLeaveCheckpoint

<TagLinks />

## Description

This callback is called when a player leaves the checkpoint set for them by SetPlayerCheckpoint. Only one checkpoint can be set at a time.

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player that left their checkpoint. |

## Returns

It is always called first in filterscripts.

## Examples

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Player %i left a checkpoint!",playerid);
    return 1;
}
```

## Notes

::: tip

This callback can also be called by NPC.

:::

## Related Functions

- SetPlayerCheckpoint: Create a checkpoint for a player.
- DisablePlayerCheckpoint: Disable the player's current checkpoint.
- IsPlayerInCheckpoint: Check if a player is in a checkpoint.
- SetPlayerRaceCheckpoint: Create a race checkpoint for a player.
- DisablePlayerRaceCheckpoint: Disable the player's current race checkpoint.
- IsPlayerInRaceCheckpoint: Check if a player is in a race checkpoint.
