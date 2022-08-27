---
title: OnActorStreamOut
description: 当演员被玩家的客户端流出时，就会调用这个回调。
tags: []
---

<VersionWarnCN name='回调' version='SA-MP 0.3.7' />

## 描述

当演员被玩家的客户端流出时，就会调用这个回调。

| 参数名      | 描述                    |
| ----------- | ----------------------- |
| actorid     | 已为玩家流出的演员 ID。 |
| forplayerid | 让演员流出的玩家的 ID。 |

## 返回值

它在过滤脚本中总是先被调用。

## 案例

```c
public OnActorStreamOut(actorid, forplayerid)
{
    new string[40];
    format(string, sizeof(string), "演员 %d 现在正为你流出。", actorid);
    SendClientMessage(forplayerid, 0xFFFFFFFF, string);
    return 1;
}
```

## 相关回调

<TipNPCCallbacksCN />
