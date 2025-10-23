---
title: GetPlayerGhostMode
sidebar_label: GetPlayerGhostMode
description: 获取玩家幽灵模式状态
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前幽灵模式的激活状态

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

**true** - 幽灵模式已激活

**false** - 幽灵模式未激活

## 示例代码

```c
new string[64];
format(string, sizeof(string), "你的幽灵模式已%s", GetPlayerGhostMode(playerid) ? "启用" : "禁用");
SendClientMessage(playerid, -1, string);
```

## 相关函数

- [TogglePlayerGhostMode](TogglePlayerGhostMode): 切换玩家幽灵模式状态
