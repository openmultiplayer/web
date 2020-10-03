---
id: OnPlayerEnterRaceCheckpoint
title: OnPlayerEnterRaceCheckpoint
description: This callback is called when a player enters a race checkpoint.
tags: ["player", "checkpoint", "racecheckpoint"]
---

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

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint.md): Create a checkpoint for a player.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint.md): Disable the player's current checkpoint.
- [IsPlayerInCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint.md): Create a race checkpoint for a player.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint.md): Disable the player's current race checkpoint.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint.md): Check if a player is in a race checkpoint.
