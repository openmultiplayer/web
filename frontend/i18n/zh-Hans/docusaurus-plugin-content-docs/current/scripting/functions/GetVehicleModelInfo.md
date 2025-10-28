---
title: GetVehicleModelInfo
sidebar_label: GetVehicleModelInfo
description: 获取特定车辆模型的详细信息，例如尺寸或座位位置
tags: ["车辆"]
---

## 描述

获取特定车辆模型的详细信息，例如尺寸或座位位置

| 参数                        | 说明                                                       |
| --------------------------- | ---------------------------------------------------------- |
| vehiclemodel                | 需要查询的车辆模型 ID                                      |
| VEHICLE_MODEL_INFO:infotype | 需要获取的[信息类型](../resources/vehicleinformationtypes) |
| &Float:x                    | 用于存储 X 轴数据的浮点变量                                |
| &Float:y                    | 用于存储 Y 轴数据的浮点变量                                |
| &Float:z                    | 用于存储 Z 轴数据的浮点变量                                |

## 返回值

车辆信息将被存储到指定的变量中。

## 示例代码

```c
new
	Float: x, Float: y, Float: z;
// 获取411号车辆模型(Infernus)的尺寸
GetVehicleModelInfo(411, VEHICLE_MODEL_INFO_SIZE, x, y, z);
// 控制台输出"Infernus的尺寸为：宽2.3米，长5.7米，高1.3米"
printf("Infernus的尺寸为：宽%.1f米，长%.1f米，高%.1f米", x, y, z);
```

## 相关函数

- [GetVehicleModel](GetVehicleModel): 获取车辆的模型 ID

## 相关资源

- [车辆信息类型说明](../resources/vehicleinformationtypes)
