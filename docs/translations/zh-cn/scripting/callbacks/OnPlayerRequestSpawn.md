---
title: OnPlayerRequestSpawn
description: Called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the 'Spawn' button.
tags: ["player"]
---

## 描述

Called when a player attempts to spawn via class selection either by pressing SHIFT or clicking the 'Spawn' button.

| 参数名   | 描述                                          |
| -------- | --------------------------------------------- |
| playerid | The ID of the player that requested to spawn. |

## 返回值

It is always called first in filterscripts so returning 0 there also blocks other scripts from seeing it.

## 案例

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

## 要点

<TipNPCCallbacks />

:::tip

To prevent players from spawning with certain classes, the last viewed class must be saved in a variable in OnPlayerRequestClass.

:::
