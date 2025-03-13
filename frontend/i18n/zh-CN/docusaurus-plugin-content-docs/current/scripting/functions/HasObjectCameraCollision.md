---
title: HasObjectCameraCollision
sidebar_label: HasObjectCameraCollision
description: 检查物体是否启用了视角碰撞功能。
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测物体是否启用了视角碰撞功能（通过[SetObjectNoCameraCollision](SetObjectNoCameraCollision)设置）。

| 参数名   | 说明                 |
| -------- | -------------------- |
| objectid | 待检测的物体 ID 编号 |

## 返回值

`true` - 物体视角碰撞功能已启用

`false` - 物体视角碰撞功能已禁用

## 示例

```c
if (HasObjectCameraCollision(objectid))
{
    printf("物体 %d 视角碰撞状态: 已启用", objectid);
}
else
{
    printf("物体 %d 视角碰撞状态: 已禁用", objectid);
}
```

## 相关函数

- [SetObjectNoCameraCollision](SetObjectNoCameraCollision): 禁用玩家视角与指定物体的碰撞检测
- [HasPlayerObjectCameraCollision](HasPlayerObjectCameraCollision): 检查玩家私有物体是否启用了视角碰撞功能
