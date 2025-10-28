---
title: VehicleColourIndexToColour
sidebar_label: VehicleColourIndexToColour
description: 将车辆颜色索引转换为HEX格式颜色值（RGBA）。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

将车辆颜色索引转换为 HEX 格式颜色值（RGBA）。

## 参数

| 参数         | 说明                                        |
| ------------ | ------------------------------------------- |
| index        | [车辆颜色索引](../resources/vehiclecolorid) |
| alpha = 0xFF | Alpha 通道（默认值为 0xFF）                 |

## 示例

```c
new colour = VehicleColourIndexToColour(3, 0xFF); // 将索引3转换为不透明度FF的HEX颜色
```

## 相关函数

- [GetRandomVehicleColourPair](GetRandomVehicleColourPair): 获取指定车辆模型的随机有效颜色索引组合
- [GetVehicleColours](GetVehicleColours): 获取车辆的主副颜色索引
