---
title: HasPlayerObjectCameraCollision
sidebar_label: HasPlayerObjectCameraCollision
description: 检查玩家私有物体是否启用了视角碰撞功能。
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测玩家私有物体是否启用了视角碰撞功能（通过[SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision)设置）。

| 参数名   | 说明                     |
| -------- | ------------------------ |
| playerid | 目标玩家的 ID 编号       |
| objectid | 待检测的私有物体 ID 编号 |

## 返回值

`true` - 玩家私有物体视角碰撞功能已启用

`false` - 玩家私有物体视角碰撞功能已禁用

## 示例

```c
if (HasPlayerObjectCameraCollision(playerid, playerobjectid))
{
    printf("玩家 %d 的私有物体 %d 视角碰撞状态: 已启用", playerid, playerobjectid);
}
else
{
    printf("玩家 %d 的私有物体 %d 视角碰撞状态: 已禁用", playerid, playerobjectid);
}
```

## 相关函数

- [SetPlayerObjectNoCameraCollision](SetPlayerObjectNoCameraCollision): 设置玩家私有物体的视角碰撞状态
- [HasObjectCameraCollision](HasObjectCameraCollision): 检测全局物体是否启用了视角碰撞功能
