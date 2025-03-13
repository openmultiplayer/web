---
title: SendPlayerMessageToAll
sidebar_label: SendPlayerMessageToAll
description: 以玩家名义向服务器全体玩家发送仿冒消息
tags: ["玩家"]
---

## 描述

在服务器中以指定玩家身份向所有其他玩家发送仿冒消息。消息将以发送者的名称（使用其颜色）开头，后接白色文本内容。

| 参数名           | 说明                                        |
| ---------------- | ------------------------------------------- |
| senderid         | 发送者玩家 ID（无效 ID 将导致消息无法发送） |
| const format[]   | 需要发送的消息内容                          |
| OPEN_MP_TAGS:... | 不定数量的任意标签类型参数                  |

## 返回值

该函数没有特定返回值

## 示例代码

```c
public OnPlayerText(playerid, text[])
{
    // 在消息前添加玩家ID前缀
    new string[144];
    format(string, sizeof(string), "(%d): %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);

    return 0; // 返回0阻止原始消息发送

    // 假设玩家ID为0且名为Tenpenny，输出格式为"Tenpenny:(0) <消息内容>"
}
```

## 注意事项

:::warning

请勿在未格式化字符串的情况下直接使用格式说明符，否则将导致游戏崩溃

:::

## 相关函数

- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): 向指定玩家发送仿冒消息
- [SendClientMessageToAll](SendClientMessageToAll): 向全体玩家发送系统消息

## 相关回调

- [OnPlayerText](../callbacks/OnPlayerText): 当玩家通过聊天框发送消息时触发
