---
title: OnNPCConnect
description: 当NPC成功连接到服务器时会调用该回调。
tags: []
---

<VersionWarnCN name='回调' version='SA-MP 0.3a' />

## 描述

当 NPC 成功连接到服务器时会调用该回调。

| 参数名     | 描述                     |
| ---------- | ------------------------ |
| myplayerid | 已经赋予该 NPC 的玩家 ID |

## 案例

```c
public OnNPCConnect(myplayerid)
{
    printf("我成功连接了服务器, ID %i!", myplayerid);
}
```

## 相关回调

- [OnNPCDisconnect](OnNPCDisconnect): 当 NPC 与服务器断开连接时调用。
- [OnPlayerConnect](OnPlayerConnect): 当玩家连接到服务器时调用。
- [OnPlayerDisconnect](OnPlayerDisconnect): 在玩家离开服务器时调用。
