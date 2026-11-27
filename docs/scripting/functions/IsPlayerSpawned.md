---
title: "IsPlayerSpawned | open.mp"
description: "Checks if a player is spawned."
canonical: https://open.mp/docs/scripting/functions/IsPlayerSpawned
language: en
---

# IsPlayerSpawned

warning

This function was added in omp v1.1.0.2612 and will not work in earlier versions!

## Description

Checks if a player is spawned.

| Name | Description |
| --- | --- |
| playerid | The ID of the player to check. |

## Returns

**true** - The player is spawned.

**false** - The player is not spawned.

## Examples

```c
public OnPlayerText(playerid, text[])
{
    if (!IsPlayerSpawned(playerid))
    {
        SendClientMessage(playerid, COLOR_RED, "ERROR: You must be spawned to send messages.");
        return 0;
    }
    return 1;
}
```

## Related Functions

-   [SpawnPlayer](https://open.mp/docs/scripting/functions/SpawnPlayer): (Re)Spawns a player.
