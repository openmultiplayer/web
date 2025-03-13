---
title: GetObjectMoveSpeed
sidebar_label: GetObjectMoveSpeed
description: 获取物体的移动速度
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取物体的移动速度。

| 名称     | 描述                      |
| -------- | ------------------------- |
| objectid | 需要获取移动速度的物体 ID |

## 返回值

以浮点数形式返回移动速度。

## 示例代码

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

new Float:moveSpeed = GetObjectMoveSpeed(objectid);
// moveSpeed = 0.8
```

## 相关函数

- [MoveObject](MoveObject): 以指定速度移动物体到新位置
- [SetObjectMoveSpeed](SetObjectMoveSpeed): 设置物体的移动速度
- [GetPlayerObjectMoveSpeed](GetPlayerObjectMoveSpeed): 获取玩家物体的移动速度
