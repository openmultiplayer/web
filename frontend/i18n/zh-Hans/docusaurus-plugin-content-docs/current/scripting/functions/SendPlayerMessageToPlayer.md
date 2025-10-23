---
title: SendPlayerMessageToPlayer
sidebar_label: SendPlayerMessageToPlayer
description: 以玩家名义向指定玩家发送私聊消息。
tags: ["玩家"]
---

## 描述

该函数允许以某玩家的名义向指定玩家发送私聊消息。消息会显示在接收者的聊天框，格式为「发送者名称（原色）: 白色消息内容」。

| 参数名           | 说明                                  |
| ---------------- | ------------------------------------- |
| playerid         | 接收消息的玩家 ID                     |
| senderid         | 消息发送者 ID（若无效则消息不会发送） |
| const format[]   | 要发送的消息内容                      |
| OPEN_MP_TAGS:... | 可变参数列表（支持任意类型参数）      |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（通常表示玩家不存在）

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/hello", true))
    {
        // 以执行命令玩家的名义向ID为0的玩家发送消息
        SendPlayerMessageToPlayer(0, playerid, "Hello ID 0!");
        // 假设执行者名为Tenpenny，接收者将看到："Tenpenny: Hello ID 0!"
        return 1;
    }
    return 0;
}
```

## 注意要点

:::warning

避免在消息中直接使用未转义的格式说明符（如%），否则会导致服务器崩溃

:::

## 相关函数

- [SendPlayerMessageToAll](SendPlayerMessageToAll): 模拟玩家发送全服消息
- [SendClientMessage](SendClientMessage): 向指定玩家发送系统消息
- [SendClientMessageToAll](SendClientMessageToAll): 向全服发送系统消息

## 相关回调

- [OnPlayerText](../callbacks/OnPlayerText): 当玩家发送聊天消息时触发
