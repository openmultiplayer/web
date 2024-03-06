---
title: OnPlayerSpawn
description: This callback is called when a player spawns.
tags: ["player"]
---

## Description

This callback is called when a player spawns. (i.e. after caling [SpawnPlayer](../functions/SpawnPlayer) function)

| Name     | Description                        |
| -------- | ---------------------------------- |
| playerid | The ID of the player that spawned. |

## Returns

0 - Will prevent other filterscripts from receiving this callback.

1 - Indicates that this callback will be passed to the next filterscript.

It is always called first in filterscripts.

## Examples

```c
public OnPlayerSpawn(playerid)
{
    new PlayerName[MAX_PLAYER_NAME],
    string[40];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));
    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

The game sometimes deducts \$100 from players after spawn.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerDeath](OnPlayerDeath): This callback is called when a player dies. 
- [OnVehicleSpawn](OnVehicleSpawn): This callback is called when a vehicle respawns. 

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another. 

- [SpawnPlayer](../functions/SpawnPlayer): Force a player to spawn.
- [AddPlayerClass](../functions/AddPlayerClass): Add a class.
- [SetSpawnInfo](../functions/SetSpawnInfo): Set the spawn setting for a player.
