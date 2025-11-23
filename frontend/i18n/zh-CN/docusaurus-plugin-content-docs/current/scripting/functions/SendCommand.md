---
title: SendCommand
sidebar_label: SendCommand
description: 强制 NPC 执行指定控制台命令。
tags: []
---

## 描述

该函数允许 NPC 模拟执行指定的控制台命令，并产生相应的游戏效果。

| 参数名        | 说明                 |
| ------------- | -------------------- |
| commandtext[] | NPC 要执行的命令文本 |

## 示例

```c
public OnPlayerText(playerid, text[])
{
    if (strfind(text, "stupid bot") != -1)
    {
        new string[80], name[MAX_PLAYER_NAME];
        GetPlayerName(playerid, name, sizeof(name));
        SendCommand("/kill"); // 发送/kill命令
        format(string, sizeof(string), "嘿 %s！你太刻薄了，这让我很伤心！", name);
        SendChat(string);
    }
    return 1;
}
```

## 相关函数

- [SendChat](SendChat): 以 NPC 身份发送聊天消息
