---
title: OnNPCConnect
sidebar_label: OnNPCConnect
description: 当NPC成功连接服务器时触发该回调
tags: ["npc"]
---

## 描述

当NPC成功连接至服务器时触发该回调。

| 参数       | 说明              |
| ---------- | ----------------- |
| myplayerid | NPC被分配的玩家ID |

## 示例

```c
public OnNPCConnect(myplayerid)
{
    printf("已成功连接服务器，分配ID为 %i！", myplayerid);
}
```

## 相关回调

以下回调可能与当前回调存在关联：

- [OnNPCDisconnect](OnNPCDisconnect)：当NPC断开服务器连接时触发
- [OnPlayerConnect](OnPlayerConnect)：当玩家连接服务器时触发
- [OnPlayerDisconnect](OnPlayerDisconnect)：当玩家断开服务器连接时触发
