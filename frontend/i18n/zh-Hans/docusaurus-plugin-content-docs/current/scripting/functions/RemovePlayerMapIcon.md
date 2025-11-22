---
title: RemovePlayerMapIcon
sidebar_label: RemovePlayerMapIcon
description: 移除玩家之前通过SetPlayerMapIcon设置的地图图标。
tags: ["玩家"]
---

## 描述

移除玩家之前通过 SetPlayerMapIcon 设置的地图图标。

| 参数名   | 说明                                                    |
| -------- | ------------------------------------------------------- |
| playerid | 需要移除图标的玩家 ID                                   |
| iconid   | 要移除的图标 ID（即 SetPlayerMapIcon 函数的第二个参数） |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。

## 示例

```c
SetPlayerMapIcon(playerid, 12, 2204.9468, 1986.2877, 16.7380, 52, 0);

// 之后
RemovePlayerMapIcon(playerid, 12);
```

## 相关函数

- [SetPlayerMapIcon](SetPlayerMapIcon): 为玩家创建地图图标
