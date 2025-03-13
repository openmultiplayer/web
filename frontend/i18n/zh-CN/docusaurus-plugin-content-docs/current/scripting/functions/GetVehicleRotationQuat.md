---
title: GetVehicleRotationQuat
sidebar_label: GetVehicleRotationQuat
description: 获取车辆的四元数旋转参数。
tags: ["车辆"]
---

## 描述

获取车辆基于四元数（Quaternion）的三维旋转参数。

| 参数名    | 说明                                          |
| --------- | --------------------------------------------- |
| vehicleid | 目标车辆 ID                                   |
| &Float:w  | 存储四元数 w 分量的浮点型变量（通过引用传递） |
| &Float:x  | 存储四元数 x 分量的浮点型变量（通过引用传递） |
| &Float:y  | 存储四元数 y 分量的浮点型变量（通过引用传递） |
| &Float:z  | 存储四元数 z 分量的浮点型变量（通过引用传递） |

## 返回值

**true** - 操作成功执行

**false** - 操作执行失败（指定车辆不存在）

车辆的四元数旋转参数将被存储至指定的变量中。

## 示例

```c
new
    Float:w,
    Float:x,
    Float:y,
    Float:z;

GetVehicleRotationQuat(vehicleid, w, x, y, z);
```

## 注意事项

:::tip

- 本函数没有对应的设置方法（只能通过 SetVehicleZAngle 设置 Z 轴角度）
- 对于无人驾驶的车辆，本函数可能返回不准确数值。原因是当车辆未被占用时，其内部旋转矩阵的第三行数据可能损坏

:::

## 相关函数

- [GetVehicleZAngle](GetVehicleZAngle): 获取车辆 Z 轴水平旋转角度
- [GetVehicleRotation](GetVehicleRotation): 获取车辆的三轴旋转角度
- [GetVehicleMatrix](GetVehicleMatrix): 获取车辆的实际旋转矩阵数据
