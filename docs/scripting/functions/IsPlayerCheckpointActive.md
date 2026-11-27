---
title: "IsPlayerCheckpointActive | open.mp"
description: "Check if the player currently has a checkpoint visible."
canonical: https://open.mp/docs/scripting/functions/IsPlayerCheckpointActive
language: en
---

# IsPlayerCheckpointActive

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Check if the player currently has a checkpoint visible.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Return Values

Returns **false** if there is no checkpoint currently shown, otherwise returns **true**

## Examples

```c
public OnPlayerSpawn(playerid)
{
    if (IsPlayerCheckpointActive(playerid))
    {
        // Do something
    }
}
```

## Related Functions

-   [SetPlayerCheckpoint](https://open.mp/docs/scripting/functions/SetPlayerCheckpoint): Create a checkpoint for a player.
-   [IsPlayerInCheckpoint](https://open.mp/docs/scripting/functions/IsPlayerInCheckpoint): Check if a player is in a checkpoint.
-   [IsPlayerRaceCheckpointActive](https://open.mp/docs/scripting/functions/IsPlayerRaceCheckpointActive): Check if the player currently has a race checkpoint visible.
