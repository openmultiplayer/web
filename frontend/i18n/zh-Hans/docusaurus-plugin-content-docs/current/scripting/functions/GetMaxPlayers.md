---
title: GetMaxPlayers
sidebar_label: GetMaxPlayers
description: 返回服务器配置中设置的最大玩家数量（由config.json中的max_players变量决定）。
tags: ["玩家"]
---

## 描述

获取服务器配置文件(config.json)中设置的最大玩家容量。

## 示例代码

```c
new string[128];
format(string, sizeof(string), "本服务器最大玩家数量: %i 人！", GetMaxPlayers());
SendClientMessage(playerid, 0xFFFFFFFF, string);  // 向玩家发送服务器最大人数信息
```

## 注意事项

:::warning

- 本函数不能替代 MAX_PLAYERS 宏定义
- 不可用于编译时数组大小定义
- 应始终将 MAX_PLAYERS 宏定义为与 max_players 配置相同或更大的值

:::

## 相关函数

- [GetPlayerPoolSize](GetPlayerPoolSize): 获取当前已连接玩家的最高 ID
- [IsPlayerConnected](IsPlayerConnected): 检测玩家是否已连接服务器
