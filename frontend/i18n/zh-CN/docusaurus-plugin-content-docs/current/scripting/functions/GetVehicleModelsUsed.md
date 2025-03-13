---
title: GetVehicleModelsUsed
sidebar_label: GetVehicleModelsUsed
description: 获取服务器上已使用的车辆模型数量。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取服务器上已使用的车辆模型数量。

## 示例

```c
public OnGameModeInit()
{
    printf("已使用车辆模型数: %d", GetVehicleModelsUsed());
}
```

## 相关函数

- [GetVehicleModelCount](GetVehicleModelCount): 获取指定车辆模型的计数
