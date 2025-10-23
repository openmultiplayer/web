---
title: OnVehicleSpawn
sidebar_label: OnVehicleSpawn
description: 当车辆重生时触发该回调函数。
tags: ["车辆"]
---

:::warning

本回调**仅**在车辆**重新**生成时触发！使用CreateVehicle和AddStaticVehicle(Ex)创建车辆**不会**触发此回调

:::

## 描述

当车辆重生时触发该回调函数。

| 参数名    | 说明         |
| --------- | ------------ |
| vehicleid | 重生的车辆ID |

## 返回值

0 - 阻止其他滤镜脚本接收此回调  
1 - 允许此回调传递给其他滤镜脚本

该回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnVehicleSpawn(vehicleid)
{
    printf("车辆 %i 已重生！",vehicleid);
    return 1;
}
```

## 相关回调

以下回调可能与该回调存在关联：

- [OnVehicleDeath](OnVehicleDeath): 当车辆被摧毁时触发
- [OnPlayerSpawn](OnPlayerSpawn): 当玩家生成时触发

## 相关函数

以下函数可能与该回调存在关联：

- [SetVehicleToRespawn](../functions/SetVehicleToRespawn): 立即重生指定车辆
- [CreateVehicle](../functions/CreateVehicle): 创建新车辆
