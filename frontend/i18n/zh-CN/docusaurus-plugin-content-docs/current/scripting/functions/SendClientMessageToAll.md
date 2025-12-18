---
title: SendClientMessageToAll
sidebar_label: SendClientMessageToAll
description: 向所有玩家的聊天框发送消息。
tags: []
---

## 描述

此函数向服务器内所有玩家的聊天框发送消息，功能等同于对每个玩家调用[SendClientMessage](SendClientMessage)。

| 参数             | 说明                                |
| ---------------- | ----------------------------------- |
| colour           | 消息颜色（0xRRGGBBAA 十六进制格式） |
| const format[]   | 要显示的文本内容（最多 144 个字符） |
| OPEN_MP_TAGS:... | 可变参数列表（支持任意类型参数）    |

## 返回值

此函数始终返回 **true (1)**。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // 向全服玩家发送消息
        SendClientMessageToAll(-1, "你好！");
        return 1;
    }
    if (strcmp(cmdtext, "/time", true) == 0)
    {
        new
            hours,
            minutes,
            seconds;

        gettime(hours, minutes, seconds);

        // 向全服发送当前时间
        SendClientMessageToAll(-1, "当前时间为 %02d:%02d:%02d", hours, minutes, seconds);
        return 1;
    }
    return 0;
}
```

## 注意要点

:::warning

避免在消息中直接使用未格式化的格式说明符（如%），否则会导致服务器崩溃

:::

## 相关函数

- [SendClientMessage](SendClientMessage): 向指定玩家发送消息
- [SendPlayerMessageToAll](SendPlayerMessageToAll): 模拟玩家发送全服消息
