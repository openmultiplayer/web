---
title: GetVehicleTower
sidebar_label: GetVehicleTower
description: 获取车辆连接的驾驶室ID（已弃用）
tags: ["车辆"]
---

:::warning

该函数已弃用，请使用[获取车辆驾驶室](GetVehicleCab)函数替代。

:::

## 描述

获取与车辆连接的驾驶室单元 ID。

| 参数名    | 说明                        |
| --------- | --------------------------- |
| vehicleid | 需要查询驾驶室的目标车辆 ID |

## 返回值

成功返回驾驶室的车辆 ID，若未连接驾驶室则返回**0**

## 示例

```c
new cabId = GetVehicleTower(vehicleid);
```

## 相关函数

- [GetVehicleTrailer](GetVehicleTrailer): 获取车辆连接的拖车 ID
