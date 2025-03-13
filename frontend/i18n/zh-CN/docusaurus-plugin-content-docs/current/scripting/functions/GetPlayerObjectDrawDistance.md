---
title: GetPlayerObjectDrawDistance
sidebar_label: GetPlayerObjectDrawDistance
description: 获取玩家物体的绘制距离
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家物体的绘制距离

| 参数名   | 说明                          |
| -------- | ----------------------------- |
| playerid | 玩家 ID                       |
| objectid | 需要获取绘制距离的玩家物体 ID |

## 返回值

以浮点数形式返回绘制距离

## 示例代码

```c
new playerobjectid = CreatePlayerObject(playerid, 3335, 672.53485, -656.11023, 15.26560,  3.00000, 0.00000, 0.00000,  100.0);

new Float:drawDistance = GetPlayerObjectDrawDistance(playerid, playerobjectid);
// drawDistance = 100.0
```

## 相关函数

- [GetObjectDrawDistance](GetObjectDrawDistance): 获取全局物体的绘制距离
