---
title: OnPlayerStreamIn
description: This callback is called when a player is streamed by some other player's client.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## 描述

This callback is called when a player is streamed by some other player's client.

| 参数名      | 描述                                                    |
| ----------- | ------------------------------------------------------- |
| playerid    | The ID of the player who has been streamed.             |
| forplayerid | The ID of the player that streamed the other player in. |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "Player %d is now streamed in for you.", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 要点

<TipNPCCallbacks />
