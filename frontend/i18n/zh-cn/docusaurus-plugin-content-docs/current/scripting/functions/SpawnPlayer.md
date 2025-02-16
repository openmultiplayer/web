---
title: SpawnPlayer
sidebar_label: SpawnPlayer
description: (Re)Spawns a player.
tags: ["player"]
---

## Description

(Re)Spawns a player.

| Name     | Description                    |
| -------- | ------------------------------ |
| playerid | The ID of the player to spawn. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. This means the player is not connected.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/spawn", true) == 0)
    {
        SpawnPlayer(playerid);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Known Bug(s):

- Kills the player if they are in a vehicle and then they spawn with a bottle in their hand. (Fixed in open.mp)

:::

## Related Functions

- [IsPlayerSpawned](IsPlayerSpawned): Checks if a player is spawned.
- [SetSpawnInfo](SetSpawnInfo): Set the spawn setting for a player.
- [AddPlayerClass](AddPlayerClass): Add a class.

## Related Callbacks

- [OnPlayerSpawn](../callbacks/OnPlayerSpawn): Called when a player spawns.
