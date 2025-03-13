---
title: GetObjectMovingTargetPos
sidebar_label: GetObjectMovingTargetPos
description: 获取物体的移动目标位置
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取物体的移动目标位置。

| 名称           | 描述                                    |
| -------------- | --------------------------------------- |
| objectid       | 需要获取移动目标位置的物体 ID           |
| &Float:targetX | 存储目标 X 坐标的浮点变量，通过引用传递 |
| &Float:targetY | 存储目标 Y 坐标的浮点变量，通过引用传递 |
| &Float:targetZ | 存储目标 Z 坐标的浮点变量，通过引用传递 |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在）

## 示例代码

```c
new objectid = CreateObject(985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MoveObject(objectid, 1003.3915, -643.3342, 114.5122,  0.8);

new
    Float:targetX,
    Float:targetY,
    Float:targetZ;

GetObjectMovingTargetPos(objectid, targetX, targetY, targetZ);
// targetX = 1003.3915
// targetY = -643.3342
// targetZ = 114.5122
```

## 相关函数

- [GetObjectMovingTargetRot](GetObjectMovingTargetRot): 获取物体的移动目标旋转参数
- [GetPlayerObjectMovingTargetPos](GetPlayerObjectMovingTargetPos): 获取玩家物体的移动目标位置
