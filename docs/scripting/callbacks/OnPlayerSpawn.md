---
id: OnPlayerSpawn
title: OnPlayerSpawn
description: This callback is called when a player spawns.
tags: ["player"]
---

## Description

This callback is called when a player spawns.(i.e. after caling SpawnPlayer function)

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

## Related Functions

- [SpawnPlayer](../functions/SpawnPlayer.md): Force a player to spawn.
- [AddPlayerClass](../functions/AddPlayerClass.md): Add a class.
- [SetSpawnInfo](../functions/SetSpawnInfo.md): Set the spawn setting for a player.
