---
title: GetPlayerObjectMovingTargetPos
sidebar_label: GetPlayerObjectMovingTargetPos
description: 获取玩家物体的移动目标位置
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家物体的移动目标位置

| 参数名         | 说明                                        |
| -------------- | ------------------------------------------- |
| playerid       | 玩家 ID                                     |
| objectid       | 需要获取目标位置的玩家物体 ID               |
| &Float:targetX | 存储目标 X 坐标的浮点型变量（通过引用传递） |
| &Float:targetY | 存储目标 Y 坐标的浮点型变量（通过引用传递） |
| &Float:targetZ | 存储目标 Z 坐标的浮点型变量（通过引用传递） |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在）

## 示例代码

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

new
    Float:targetX,
    Float:targetY,
    Float:targetZ;

GetPlayerObjectMovingTargetPos(playerid, playerobjectid, targetX, targetY, targetZ);
// targetX = 1003.3915
// targetY = -643.3342
// targetZ = 114.5122
```

## 相关函数

- [GetPlayerObjectMovingTargetRot](GetPlayerObjectMovingTargetRot): 获取玩家物体的移动目标旋转
- [GetObjectMovingTargetPos](GetObjectMovingTargetPos): 获取全局物体的移动目标位置
