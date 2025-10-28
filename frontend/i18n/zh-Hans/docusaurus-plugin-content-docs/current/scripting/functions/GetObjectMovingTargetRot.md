---
title: GetObjectMovingTargetRot
sidebar_label: GetObjectMovingTargetRot
description: 获取物体的移动目标旋转参数
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取物体的移动目标旋转参数。

| 参数             | 说明                                    |
| ---------------- | --------------------------------------- |
| objectid         | 需要获取移动目标旋转的物体 ID           |
| &Float:rotationX | 存储旋转 X 坐标的浮点变量，通过引用传递 |
| &Float:rotationY | 存储旋转 Y 坐标的浮点变量，通过引用传递 |
| &Float:rotationZ | 存储旋转 Z 坐标的浮点变量，通过引用传递 |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在）

## 示例代码

```c
new objectid = CreateObject(968, 1023.79541, -943.75879, 42.31450,   0.00000, 0.00000, 10.00000);
MoveObject(objectid, 1023.79541, -943.75879, 42.31450,  0.8,   0.00000, -90.00000, 10.00000);

new
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetObjectMovingTargetRot(objectid, rotationX, rotationY, rotationZ);
// rotationX = 0.00000
// rotationY = -90.00000
// rotationZ = 10.00000
```

## 相关函数

- [GetObjectMovingTargetPos](GetObjectMovingTargetPos): 获取物体的移动目标位置
- [GetPlayerObjectMovingTargetRot](GetPlayerObjectMovingTargetRot): 获取玩家物体的移动目标旋转参数
