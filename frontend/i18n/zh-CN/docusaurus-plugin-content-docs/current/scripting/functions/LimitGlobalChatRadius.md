---
title: LimitGlobalChatRadius
sidebar_label: LimitGlobalChatRadius
description: 设置聊天信息的可见范围
tags: []
---

## 描述

设置全局聊天信息的可见范围。只有在该距离范围内的玩家才能看到彼此的聊天信息，同时该距离也影响小地图上玩家图标的可见范围。

| 参数名           | 说明                               |
| ---------------- | ---------------------------------- |
| Float:chatRadius | 聊天信息的可见范围半径（单位：米） |

## 返回值

本函数没有返回值。

## 示例代码

```c
public OnGameModeInit()
{
    LimitGlobalChatRadius(200.0);
    return 1;
}
```

## 相关函数

- [SetNameTagDrawDistance](SetNameTagDrawDistance): 设置玩家名牌的可见距离
- [SendPlayerMessageToPlayer](SendPlayerMessageToPlayer): 定向发送玩家聊天信息
- [SendPlayerMessageToAll](SendPlayerMessageToAll): 全局发送玩家聊天信息

## 相关回调

- [OnPlayerText](../callbacks/OnPlayerText): 玩家发送聊天信息时触发
