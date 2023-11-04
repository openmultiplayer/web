---
title: OnNPCDisconnect
description: 当NPC与服务器断开连接时，会调用此回调。
tags: []
---

<VersionWarnCN name='回调' version='SA-MP 0.3a' />

## 描述

当 NPC 与服务器断开连接时，会调用此回调。

| 参数名   | 描述                       |
| -------- | -------------------------- |
| reason[] | NPC 与服务器断开连接的原因 |

## 案例

```c
public OnNPCDisconnect(reason[])
{
    printf("已断开与服务器的连接 %s", reason);
}
```

## 相关回调

- [OnNPCConnect](OnNPCConnect): 当 NPC 成功连接到服务器时调用。
- [OnPlayerDisconnect](OnPlayerDisconnect): 在玩家离开服务器时调用。
- [OnPlayerConnect](OnPlayerConnect): 当玩家连接到服务器时调用。
