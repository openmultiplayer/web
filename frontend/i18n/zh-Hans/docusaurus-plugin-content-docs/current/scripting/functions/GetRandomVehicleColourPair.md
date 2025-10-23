---
title: GetRandomVehicleColourPair
sidebar_label: GetRandomVehicleColourPair
description: 获取指定车辆模型的有效随机颜色索引组合
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取指定车辆模型的有效随机颜色索引组合

## 参数说明

| 名称         | 说明                                         |
| ------------ | -------------------------------------------- |
| modelid      | [车辆模型 ID](../resources/vehicleid)        |
| &colour1     | 存储主颜色索引的变量（引用传递）             |
| &colour2     | 存储副颜色索引的变量（引用传递）             |
| &colour3 = 0 | 存储第三颜色索引的变量（可选参数，引用传递） |
| &colour4 = 0 | 存储第四颜色索引的变量（可选参数，引用传递） |

## 示例代码

```c
new
	colour1,
	colour2;

// 获取Sultan车型的随机颜色组合（模型ID 560）
GetRandomVehicleColourPair(560, colour1, colour2);
```

## 相关函数

- [VehicleColourIndexToColour](VehicleColourIndexToColour): 将颜色索引转换为 HEX 颜色值（RGBA 格式）
- [GetVehicleColours](GetVehicleColours): 获取车辆当前颜色配置
