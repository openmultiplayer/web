---
title: SendChat
sidebar_label: SendChat
description: 允许NPC发送聊天消息，类似于SendPlayerMessageToAll，但专用于NPC脚本。
tags: []
---

## 描述

该函数允许 NPC 发送聊天消息，类似于[SendPlayerMessageToAll](SendPlayerMessageToAll)，但专用于 NPC 脚本内部使用。

| 参数名 | 说明                 |
| ------ | -------------------- |
| msg[]  | NPC 要发送的文本内容 |

## 示例

```c
public OnPlayerDeath(playerid)
{
    new string[80], name[MAX_PLAYER_NAME];
    GetPlayerName(playerid, name, sizeof(name));
    format(string, sizeof(string), "哦不%s！我不想让你就这样死去！", name);
    SendChat(string); // 当玩家死亡时发送消息
    return 1;
}
```

## 相关函数

- [SendCommand](SendCommand): 以 NPC 身份发送命令
