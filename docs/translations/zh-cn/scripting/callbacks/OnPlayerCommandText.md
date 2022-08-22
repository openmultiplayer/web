---
title: OnPlayerCommandText
description: 当玩家在客户端聊天框中输入指令时，这个回调函数被调用。
tags: ["player"]
---

## 描述

当玩家在客户端聊天框中输入指令时，这个回调函数被调用。

| 参数名    | 描述                     |
| --------- | ------------------------ |
| playerid  | 输入指令的玩家的 ID。    |
| cmdtext[] | 输入的指令(包括正斜杠)。 |

## 返回值

它在过滤脚本中总是先被调用，所以返回 1 会阻止其他脚本看到它。

## 案例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/help", true))
    {
        SendClientMessage(playerid, -1, "服务器: 这是/help指令!");
        return 1;
        // 返回1将通知服务器该指令已被处理。
        // OnPlayerCommandText不会在其他脚本中被调用。
    }
    return 0;
    // 返回0将通知服务器该脚本还没有处理该指令。
    // OnPlayerCommandText将在其他脚本中被调用，直到其中一个返回1。
    // 如果最终没有任何脚本返回1，'SERVER: Unknown Command'（服务器: 未知指令）消息将显示给玩家。
}
```

## 要点

<TipNPCCallbacksCN />

## 相关函数

- [SendRconCommand](../functions/SendRconCommand): 通过脚本发送 RCON 指令。
