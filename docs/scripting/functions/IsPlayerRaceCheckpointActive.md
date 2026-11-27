---
title: "IsPlayerRaceCheckpointActive | open.mp"
description: "Check if the player currently has a race checkpoint visible."
canonical: https://open.mp/docs/scripting/functions/IsPlayerRaceCheckpointActive
language: en
---

# IsPlayerRaceCheckpointActive

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Check if the player currently has a race checkpoint visible.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Return Values

Returns **false** if there is no race checkpoint currently shown, otherwise returns **true**

## Examples

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerRaceCheckpointActive(playerid))
    {
        // Do something
    }
}
```

## Related Functions

-   [SetPlayerRaceCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerRaceCheckpoint): Create a race checkpoint for a player.
-   [IsPlayerInRaceCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInRaceCheckpoint): Check if a player is in a race checkpoint.
-   [IsPlayerCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerCheckpointActive): Check if the player currently has a checkpoint visible.
