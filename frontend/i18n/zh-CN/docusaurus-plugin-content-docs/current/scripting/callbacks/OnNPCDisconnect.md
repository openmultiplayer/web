---
title: OnNPCDisconnect
sidebar_label: OnNPCDisconnect
description: 当NPC断开服务器连接时触发该回调
tags: ["npc"]
---

## 描述

当NPC与服务器断开连接时触发该回调。

| 参数     | 说明                     |
| -------- | ------------------------ |
| reason[] | 断开连接的原因描述字符串 |

## 示例

```c
public OnNPCDisconnect(reason[])
{
    printf("已从服务器断开连接。原因：%s", reason);
}
```

## 相关回调

以下回调可能与当前回调存在关联：

- [OnNPCConnect](OnNPCConnect)：当NPC成功连接服务器时触发
- [OnPlayerDisconnect](OnPlayerDisconnect)：当玩家断开服务器连接时触发
- [OnPlayerConnect](OnPlayerConnect)：当玩家连接服务器时触发
