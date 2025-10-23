---
title: GetPlayerObjectAttachedOffset
sidebar_label: GetPlayerObjectAttachedOffset
description: 获取玩家物体的附加偏移和旋转
tags: ["玩家", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家物体的附加偏移和旋转

| 参数名           | 说明                                          |
| ---------------- | --------------------------------------------- |
| playerid         | 玩家 ID                                       |
| objectid         | 需要获取偏移和旋转的玩家物体 ID               |
| &Float:offsetX   | 存储 X 轴偏移量的浮点型变量（通过引用传递）   |
| &Float:offsetY   | 存储 Y 轴偏移量的浮点型变量（通过引用传递）   |
| &Float:offsetZ   | 存储 Z 轴偏移量的浮点型变量（通过引用传递）   |
| &Float:rotationX | 存储 X 轴旋转角度的浮点型变量（通过引用传递） |
| &Float:rotationY | 存储 Y 轴旋转角度的浮点型变量（通过引用传递） |
| &Float:rotationZ | 存储 Z 轴旋转角度的浮点型变量（通过引用传递） |

## 返回值

`true` - 函数执行成功

`false` - 函数执行失败（指定物体不存在）

## 示例代码

```c
new
    Float:offsetX,
    Float:offsetY,
    Float:offsetZ,
    Float:rotationX,
    Float:rotationY,
    Float:rotationZ;

// 获取玩家物体的附加偏移和旋转数据
GetPlayerObjectAttachedOffset(playerid, playerobjectid, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ);
```

## 相关函数

- [GetPlayerObjectAttachedData](GetPlayerObjectAttachedData): 获取玩家物体的附加数据
- [GetObjectAttachedOffset](GetObjectAttachedOffset): 获取全局物体的附加偏移和旋转
