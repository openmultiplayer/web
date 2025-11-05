---
title: GetVehicleRotation
sidebar_label: GetVehicleRotation
description: 返回车辆的欧拉角旋转。
tags: ["车辆"]
---

## 描述

返回车辆的欧拉角旋转。

| 参数      | 说明                                        |
| --------- | ------------------------------------------- |
| vehicleid | 要获取旋转的车辆的 ID。                     |
| &Float:x  | 用于存储 X 轴角度的浮点变量，通过引用传递。 |
| &Float:y  | 用于存储 Y 轴角度的浮点变量，通过引用传递。 |
| &Float:z  | 用于存储 Z 轴角度的浮点变量，通过引用传递。 |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。这意味着指定的车辆不存在。

车辆的旋转存储在指定的变量中。

## 示例

```c
new
    Float:x,
    Float:y,
    Float:z;

GetVehicleRotation(vehicleid, x, y, z);
```

## 注意事项

:::tip

- 此函数没有 'set' 变体；你无法设置车辆的旋转（除了 Z 角度）
- 对于无人乘坐的车辆，此函数可能返回不正确的值。原因是如果车辆在无人乘坐时更新，其内部旋转矩阵的第三行会损坏。

:::

## 相关函数

- [GetVehicleZAngle](GetVehicleZAngle): 检查车辆的当前角度。
- [GetVehicleRotationQuat](GetVehicleRotationQuat): 获取车辆的四元数旋转参数。
- [GetVehicleMatrix](GetVehicleMatrix): 获取车辆的实际旋转矩阵。
