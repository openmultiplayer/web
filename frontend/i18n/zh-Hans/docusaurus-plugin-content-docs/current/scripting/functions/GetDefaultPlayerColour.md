---
title: GetDefaultPlayerColour
sidebar_label: GetDefaultPlayerColour
description: 获取玩家ID的默认颜色。
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家 ID 的默认颜色。

| 参数名   | 说明                                |
| -------- | ----------------------------------- |
| playerid | 要获取颜色的玩家 ID（无需玩家在线） |

## 返回值

返回玩家的默认颜色值。

## 示例代码

```c
new colour = GetDefaultPlayerColour(playerid);  // 获取玩家的默认颜色
```

## 相关函数

- [GetPlayerColor](GetPlayerColor.md): 获取玩家当前使用的颜色
