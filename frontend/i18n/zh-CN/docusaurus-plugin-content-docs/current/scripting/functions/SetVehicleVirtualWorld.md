---
title: SetVehicleVirtualWorld
sidebar_label: SetVehicleVirtualWorld
description: 设置车辆所属的虚拟世界。
tags: ["车辆"]
---

## 描述

设置车辆所属的虚拟世界。玩家仅能看见与其处于同一虚拟世界中的车辆。

| 参数         | 说明                    |
| ------------ | ----------------------- |
| vehicleid    | 要设置虚拟世界的车辆 ID |
| virtualWorld | 要设置的虚拟世界 ID     |

## 返回值

此函数不返回特定值。

## 示例

```c
// 将玩家及其车辆置于虚拟世界10
SetVehicleVirtualWorld(GetPlayerVehicleID(playerid), 10);
SetPlayerVirtualWorld(playerid, 10);
```

## 相关函数

- [GetVehicleVirtualWorld](GetVehicleVirtualWorld): 获取车辆所在虚拟世界
- [SetPlayerVirtualWorld](SetPlayerVirtualWorld): 设置玩家所属虚拟世界
