---
title: OnPlayerText
description: 当玩家发送聊天消息时调用。
tags: ["player"]
---

## 描述

当玩家发送聊天消息时调用。

| 参数名   | 描述                  |
| -------- | --------------------- |
| playerid | 输入文本的玩家的 ID。 |
| text[]   | 玩家输入的文本。      |

## 返回值

它在过滤脚本中总是先被调用，因此在那里返回 0 会阻止其他脚本看到它。

## 案例

```c
public OnPlayerText(playerid, text[])
{
    new pText[144];
    format(pText, sizeof (pText), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, pText);
    return 0; // 忽略默认文本并发送自定义文本
}
```

## 要点

<TipNPCCallbacksCN />

## 相关函数

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): 强制一个玩家为另一个玩家发送消息。
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): 强制一个玩家为所有玩家发送消息。
