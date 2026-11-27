---
title: "SpawnPlayer | open.mp"
description: "(Re)Spawns a player."
canonical: https://open.mp/docs/scripting/functions/SpawnPlayer
language: en
---

# SpawnPlayer

## Description

(Re)Spawns a player.

| Name | Description |
| --- | --- |
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

warning

**Known Bug(s):**

-   Kills the player if they are in a vehicle and then they spawn with a bottle in their hand. (Fixed in open.mp)

## Related Functions

-   [IsPlayerSpawned](https://open.mp/docs/scripting/functions/IsPlayerSpawned): Checks if a player is spawned.
-   [SetSpawnInfo](https://open.mp/docs/scripting/functions/SetSpawnInfo): Set the spawn setting for a player.
-   [AddPlayerClass](https://open.mp/docs/scripting/functions/AddPlayerClass): Add a class.

## Related Callbacks

-   [OnPlayerSpawn](https://open.mp/docs/scripting/callbacks/OnPlayerSpawn): Called when a player spawns.
