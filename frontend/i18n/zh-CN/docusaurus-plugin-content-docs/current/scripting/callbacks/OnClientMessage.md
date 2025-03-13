---
title: OnClientMessage
sidebar_label: OnClientMessage
description: 当NPC接收到客户端消息时触发该回调
tags: []
---

## 描述

当NPC检测到客户端消息时触发该回调。以下情况均会触发：

- 使用[SendClientMessageToAll](../functions/SendClientMessageToAll)函数时
- 向NPC发送[SendClientMessage](../functions/SendClientMessage)函数时

该回调不会在玩家发送聊天消息时触发，相关功能请参阅[NPC:OnPlayerText](OnPlayerText)。

| 参数   | 说明               |
| ------ | ------------------ |
| color  | 客户端消息的颜色值 |
| text[] | 实际消息内容       |

## 返回值

本回调不处理返回值。

## 示例

```c
public OnClientMessage(color, text[])
{
    if (strfind(text,"银行余额: $0") != -1)
    {
        SendClientMessage(playerid, -1, "我是个穷光蛋 :(");
    }
}
```

## 相关回调

以下回调可能与当前回调存在关联：

- [OnPlayerText](OnPlayerText)：当任意实体（玩家、其他NPC或当前NPC自身）发送聊天消息时触发
