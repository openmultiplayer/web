---
title: GetObjectAttachedOffset
sidebar_label: GetObjectAttachedOffset
description: 获取物体的附加偏移和旋转参数
tags: ["物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取物体的附加偏移和旋转参数。

| 参数             | 说明                                            |
| ---------------- | ----------------------------------------------- |
| objectid         | 需要获取偏移和旋转参数的物体 ID                 |
| &Float:offsetX   | 用于存储 X 轴偏移坐标的浮点变量，通过引用传递。 |
| &Float:offsetY   | 用于存储 Y 轴偏移坐标的浮点变量，通过引用传递。 |
| &Float:offsetZ   | 用于存储 Z 轴偏移坐标的浮点变量，通过引用传递。 |
| &Float:rotationX | 用于存储 X 轴旋转参数的浮点变量，通过引用传递。 |
| &Float:rotationY | 用于存储 Y 轴旋转参数的浮点变量，通过引用传递。 |
| &Float:rotationZ | 用于存储 Z 轴旋转参数的浮点变量，通过引用传递。 |

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

GetObjectAttachedOffset(objectid, offsetX, offsetY, offsetZ, rotationX, rotationY, rotationZ);
```

## 相关函数

- [GetObjectAttachedData](GetObjectAttachedData): 获取物体的附加数据
- [GetPlayerObjectAttachedOffset](GetPlayerObjectAttachedOffset): 获取玩家物体的附加偏移和旋转参数
