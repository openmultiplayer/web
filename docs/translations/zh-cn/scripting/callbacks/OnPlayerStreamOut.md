---
title: OnPlayerStreamOut
description: 当某个玩家从其他玩家的客户端流出时，会调用此回调。
tags: ["player"]
---

## 描述

当某个玩家从其他玩家的客户端流出时，会调用此回调。

| 参数名      | 描述                |
| ----------- | ------------------- |
| playerid    | 已被流出的玩家 ID。 |
| forplayerid | 失去该流的玩家 ID   |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnPlayerStreamOut(playerid, forplayerid)
{
    new string[80];
    format(string, sizeof(string), "你的电脑刚刚流出了玩家ID %d", playerid);
    SendClientMessage(forplayerid, 0xFF0000FF, string);
    return 1;
}
```

## 要点

<TipNPCCallbacksCN />

## 相关函数
