---
title: OnPlayerRequestSpawn
description: This callback is called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the 'Spawn' button.
tags: ["player", "class"]
---

## Description

This callback is called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the 'Spawn' button.

| Name     | Description                                   |
| -------- | --------------------------------------------- |
| playerid | The ID of the player that requested to spawn. |

## Returns

It is always called first in filterscripts so returning 0 there also blocks other scripts from seeing it.

## Examples

```c
public OnPlayerRequestSpawn(playerid)
{
    if (!IsPlayerAdmin(playerid))
    {
        SendClientMessage(playerid, -1, "You may not spawn.");
        return 0;
    }
    return 1;
}
```

## Notes

<TipNPCCallbacks />

:::tip

To prevent players from spawning with certain classes, the last viewed class must be saved in a variable in OnPlayerRequestClass.

:::

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another. 

- [OnPlayerSpawn](OnPlayerSpawn): This callback is called when a player spawns. 
- [OnPlayerRequestClass](OnPlayerRequestClass): This callback is called when a player changes class at class selection. 
