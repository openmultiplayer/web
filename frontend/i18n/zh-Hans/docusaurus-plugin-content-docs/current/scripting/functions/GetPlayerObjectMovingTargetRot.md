---
title: GetPlayerObjectMovingTargetRot
sidebar_label: GetPlayerObjectMovingTargetRot
description: 获取玩家物体的移动目标旋转
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家物体的移动目标旋转

| 参数名           | 说明                                              |
| ---------------- | ------------------------------------------------- |
| playerid         | 玩家 ID                                           |
| objectid         | 需要获取目标旋转的玩家物体 ID                     |
| &Float:rotationX | 存储 X 轴目标旋转角度的浮点型变量（通过引用传递） |
| &Float:rotationY | 存储 Y 轴目标旋转角度的浮点型变量（通过引用传递） |
| &Float:rotationZ | 存储 Z 轴目标旋转角度的浮点型变量（通过引用传递） |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在）

## 示例代码

```c
new playerobjectid = CreatePlayerObject(playerid, 968, 1023.79541, -943.75879, 42.31450,   0.00000, 0.00000, 10.00000);
MovePlayerObject(playerid, playerobjectid, 1023.79541, -943.75879, 42.31450,  0.8,   0.00000, -90.00000, 10.00000);

new
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

GetPlayerObjectMovingTargetRot(playerid, playerobjectid, rotationX, rotationY, rotationZ);
// rotationX = 0.00000
// rotationY = -90.00000
// rotationZ = 10.00000
```

## 相关函数

- [GetPlayerObjectMovingTargetPos](GetPlayerObjectMovingTargetPos): 获取玩家物体的移动目标位置
- [GetObjectMovingTargetRot](GetObjectMovingTargetRot): 获取全局物体的移动目标旋转
