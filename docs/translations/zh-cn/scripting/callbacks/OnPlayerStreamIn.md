---
title: OnPlayerStreamIn
description: 当某个玩家从其他玩家的客户端流入时，这个回调被调用。
tags: ["player"]
---

## 描述

当某个玩家从其他玩家的客户端流入时，这个回调被调用。

| 参数名      | 描述                  |
| ----------- | --------------------- |
| playerid    | 已被流入的玩家 ID。   |
| forplayerid | 接收到该流的玩家 ID。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerStreamIn(playerid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "玩家 %d 现在正被你流入", playerid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />
