---
title: HasVehicleBeenOccupied
sidebar_label: HasVehicleBeenOccupied
description: 检查车辆是否曾被占用过。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定车辆是否曾被玩家占用过。

## 参数

| 参数      | 说明               |
| --------- | ------------------ |
| vehicleid | 目标车辆的 ID 编号 |

## 返回值

**true** - 车辆存在被占用记录

**false** - 车辆从未被玩家占用

## 示例

```c
if (HasVehicleBeenOccupied(vehicleid))
{
    printf("车辆 %d 存在玩家占用记录", vehicleid);
    // 执行相关逻辑（如重置车辆状态）
}
else
{
    // 车辆保持初始生成状态
    RepairVehicle(vehicleid);
}
```

## 相关函数

- [SetVehicleBeenOccupied](SetVehicleBeenOccupied): 标记车辆的占用状态
- [GetVehicleOccupiedTick](GetVehicleOccupiedTick): 获取车辆最后被占用的时间戳
- [ResetVehicleOccupiedStatus](ResetVehicleOccupiedStatus): 重置车辆的占用记录
