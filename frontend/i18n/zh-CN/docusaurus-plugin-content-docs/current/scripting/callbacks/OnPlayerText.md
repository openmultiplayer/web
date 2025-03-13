---
title: OnPlayerText
sidebar_label: OnPlayerText
description: 当玩家发送聊天消息时触发该回调函数。
tags: ["玩家"]
---

## 描述

当玩家在聊天框发送消息时触发该回调函数。

| 参数名   | 说明               |
| -------- | ------------------ |
| playerid | 发送消息的玩家ID   |
| text[]   | 玩家发送的消息内容 |

## 返回值

该回调始终在滤镜脚本中优先触发，返回0将阻止其他脚本处理此消息。

## 示例

```c
public OnPlayerText(playerid, text[])
{
    new string[144];
    format(string, sizeof (string), "(%d) %s", playerid, text);
    SendPlayerMessageToAll(playerid, string);

    // 返回0将忽略默认消息格式，发送自定义消息
    // 返回1会导致消息重复显示（默认消息也会发送）
    return 0;
}
```

## 注意事项

<TipNPCCallbacksZH_CN />

:::tip

默认情况下，此回调会发送包含玩家昵称、ID和消息内容的系统格式消息。返回0可禁用此默认行为（如示例代码所示）。

:::

## 相关回调

以下回调可能与该回调存在关联：

- [OnPlayerCommandText](OnPlayerCommandText): 当玩家输入指令时触发

## 相关函数

以下函数可能与该回调存在关联：

- [SendPlayerMessageToPlayer](../functions/SendPlayerMessageToPlayer): 向指定玩家发送玩家消息
- [SendPlayerMessageToAll](../functions/SendPlayerMessageToAll): 向全体玩家发送玩家消息
- [ToggleChatTextReplacement](../functions/ToggleChatTextReplacement): 切换聊天过滤器状态
