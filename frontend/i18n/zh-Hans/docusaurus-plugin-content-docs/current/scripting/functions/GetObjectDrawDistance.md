---
title: GetObjectDrawDistance
sidebar_label: GetObjectDrawDistance
description: 获取物体的绘制距离
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取物体的绘制距离。

| 参数     | 说明                      |
| -------- | ------------------------- |
| objectid | 需要获取绘制距离的物体 ID |

## 返回值

以浮点数形式返回绘制距离。

## 示例代码

```c
new objectid = CreateObject(3335, 672.53485, -656.11023, 15.26560,  3.00000, 0.00000, 0.00000,  100.0);

new Float:drawDistance = GetObjectDrawDistance(objectid);
// drawDistance = 100.0
```

## 相关函数

- [GetPlayerObjectDrawDistance](GetPlayerObjectDrawDistance): 获取玩家物体的绘制距离
