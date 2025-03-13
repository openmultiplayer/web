---
title: SetMyPos
sidebar_label: SetMyPos
description: 设置NPC的位置
tags: ["NPC"]
---

## 描述

设置 NPC 的坐标位置。

| 参数名  | 描述                |
| ------- | ------------------- |
| Float:x | NPC 所在的 X 坐标值 |
| Float:y | NPC 所在的 Y 坐标值 |
| Float:z | NPC 所在的 Z 坐标值 |

## 返回值

该函数不返回任何特定值。

## 示例代码

```c
SetMyPos(0.0, 0.0, 3.0); // 将NPC放置在坐标(0.0, 0.0, 3.0)
```

## 相关函数

- [GetMyPos](GetMyPos): 获取 NPC 的当前坐标位置
