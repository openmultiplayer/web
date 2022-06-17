---
title: OnPlayerStreamOut
description: This callback is called when a player is streamed out from some other player's client.
tags: ["player"]
---

<VersionWarn name='callback' version='SA-MP 0.3a' />

## 描述

This callback is called when a player is streamed out from some other player's client.

| 参数名      | 描述                                            |
| ----------- | ----------------------------------------------- |
| playerid    | The player who has been destreamed.             |
| forplayerid | The player who has destreamed the other player. |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "Your computer has just unloaded player ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## 要点

<TipNPCCallbacks />

## 相关函数
