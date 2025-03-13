---
title: GetPlayerObjectMoveSpeed
sidebar_label: GetPlayerObjectMoveSpeed
description: 获取玩家物体的移动速度
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家物体的移动速度

| 参数名   | 说明                          |
| -------- | ----------------------------- |
| playerid | 玩家 ID                       |
| objectid | 需要获取移动速度的玩家物体 ID |

## 返回值

以浮点数形式返回移动速度

## 示例代码

```c
new playerobjectid = CreatePlayerObject(playerid, 985, 1003.39154, -643.33423, 122.35060,   0.00000, 1.00000, 24.00000);
MovePlayerObject(playerid, playerobjectid, 1003.3915, -643.3342, 114.5122,  0.8);

new Float:moveSpeed = GetPlayerObjectMoveSpeed(playerid, playerobjectid);
// moveSpeed = 0.8
```

## 相关函数

- [MovePlayerObject](MovePlayerObject): 移动玩家物体到新位置并设置速度
- [SetPlayerObjectMoveSpeed](SetPlayerObjectMoveSpeed): 设置玩家物体的移动速度
- [GetObjectMoveSpeed](GetObjectMoveSpeed): 获取全局物体的移动速度
