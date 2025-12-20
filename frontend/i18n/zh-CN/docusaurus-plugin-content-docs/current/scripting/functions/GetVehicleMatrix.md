---
title: GetVehicleMatrix
sidebar_label: GetVehicleMatrix
description: 获取车辆的实际旋转矩阵。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定车辆的实际旋转矩阵。

## 参数

| 参数          | 说明                                           |
| ------------- | ---------------------------------------------- |
| vehicleid     | 目标车辆的 ID。                                |
| &Float:rightX | 用于存储 rightX 坐标的浮点变量（通过引用传递） |
| &Float:rightY | 用于存储 rightY 坐标的浮点变量（通过引用传递） |
| &Float:rightZ | 用于存储 rightZ 坐标的浮点变量（通过引用传递） |
| &Float:upX    | 用于存储 upX 坐标的浮点变量（通过引用传递）    |
| &Float:upY    | 用于存储 upY 坐标的浮点变量（通过引用传递）    |
| &Float:upZ    | 用于存储 upZ 坐标的浮点变量（通过引用传递）    |
| &Float:atX    | 用于存储 atX 坐标的浮点变量（通过引用传递）    |
| &Float:atY    | 用于存储 atY 坐标的浮点变量（通过引用传递）    |
| &Float:atZ    | 用于存储 atZ 坐标的浮点变量（通过引用传递）    |

## 示例代码

```c
new
    Float:rightX,
    Float:rightY,
    Float:rightZ,
    Float:upX,
    Float:upY,
    Float:upZ,
    Float:atX,
    Float:atY,
    Float:atZ;

GetVehicleMatrix(vehicleid, rightX, rightY, rightZ, upX, upY, upZ, atX, atY, atZ);
```

## 相关函数

- [GetVehicleRotationQuat](GetVehicleRotationQuat): 以四元数形式返回车辆在所有轴上的旋转参数
