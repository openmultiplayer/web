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
    new PlayerName[MAX_PLAYER_NAME];
    GetPlayerName(playerid, PlayerName, sizeof(PlayerName));

    new string[64];
    format(string, sizeof(string), "%s has spawned successfully.", PlayerName);

    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## Notes

:::tip

When a player dies in San Andreas they get $100 deducted from them to cover hospital bills automatically. This feature remains in SA:MP, but is removed from open.mp to allow scripts to manage all their own money. Several scripts attempt to fix this already by adding $100 to a player after death, or on spawn. If this is your script simply delete the additional fix, although the code in open.mp does attempt to account for scripts that do this. If your script relied on this feature, simply add the following code to [OnPlayerDeath](OnPlayerDeath):

```c
GivePlayerMoney(playerid, -100);
```

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
