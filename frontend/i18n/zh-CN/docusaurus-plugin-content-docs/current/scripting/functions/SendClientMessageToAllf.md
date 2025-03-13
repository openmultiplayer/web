---
title: SendClientMessageToAllf
sidebar_label: SendClientMessageToAllf
description: 向所有玩家发送格式化聊天消息（已弃用）。
tags: []
---

<VersionWarnZH_CN version='open.mp beta build 6' />

:::warning

此函数已被弃用

[SendClientMessageToAll](SendClientMessageToAll) 现已内置格式化功能！

:::

## 描述

向所有玩家发送格式化聊天消息（该函数已弃用，请使用 SendClientMessageToAll 替代）。此功能等同于对每个玩家调用 SendClientMessage。

| 参数名            | 说明                                     |
| ----------------- | ---------------------------------------- |
| color             | 消息颜色（0xRRGGBBAA 十六进制格式）      |
| const message[]   | 格式化消息内容（最多 144 字符）          |
| \{Float, \_\}:... | 可变参数列表（支持浮点型及其他类型参数） |

## 返回值

该函数始终返回 true (1)。

## 示例

```c
#define HELLO_WORLD "Hello World"

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/helloworld", true) == 0)
    {
        // 向所有玩家发送消息
        SendClientMessageToAllf(-1, "%s!", HELLO_WORLD);
        return 1;
    }
    return 0;
}
```
