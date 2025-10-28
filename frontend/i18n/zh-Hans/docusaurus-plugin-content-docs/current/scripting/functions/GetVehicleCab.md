---
title: GetVehicleCab
sidebar_label: GetVehicleCab
description: 获取连接到车辆的驾驶室ID
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取连接到车辆的驾驶室 ID

| 参数      | 说明                  |
| --------- | --------------------- |
| vehicleid | 要获取驾驶室的车辆 ID |

## 返回值

驾驶室对应的车辆 ID，若无连接则返回 **0**

## 示例

```c
new cabId = GetVehicleCab(vehicleid);
```

## 相关函数

- [GetVehicleTrailer](GetVehicleTrailer): 获取连接到车辆的挂车 ID
