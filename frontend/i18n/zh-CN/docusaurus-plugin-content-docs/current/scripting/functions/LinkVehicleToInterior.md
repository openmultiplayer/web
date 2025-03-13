---
title: LinkVehicleToInterior
sidebar_label: LinkVehicleToInterior
description: 将车辆与指定室内空间绑定
tags: ["车辆"]
---

## 描述

将指定车辆关联到特定室内空间。该车辆仅对处于相同室内空间的玩家可见（需通过[SetPlayerInterior](SetPlayerInterior)设置玩家室内位置）。

| 参数名     | 说明                                        |
| ---------- | ------------------------------------------- |
| vehicleid  | 要关联的车辆 ID                             |
| interiorid | 目标[室内空间 ID](../resources/interiorids) |

## 返回值

**true** - 操作成功执行

**false** - 操作执行失败（通常表示车辆不存在）

## 示例代码

```c
public OnGameModeInit()
{
    new vehicleId = AddStaticVehicle(559, 2543.7505, -21.8345, 27.1899, 52.6054, -1, -1);
    LinkVehicleToInterior(vehicleId, 6);
}
```

## 相关函数

- [GetVehicleInterior](GetVehicleInterior): 获取车辆当前关联的室内空间 ID
- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): 设置车辆所属的虚拟世界
- [SetPlayerInterior](SetPlayerInterior): 设置玩家所在室内空间

## 相关资源

- [室内空间 ID 对照表](../resources/interiorids)
