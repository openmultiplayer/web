---
title: IsPlayerSpawned
description: Checks if a player is spawned.
tags: ["player"]
---

<VersionWarn version='omp v1.1.0.2612' />

## Description

Checks if a player is spawned.

| Name     | Description                    |
|----------|--------------------------------|
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

- [SpawnPlayer](SpawnPlayer): (Re)Spawns a player.
