---
title: GetVehicleVirtualWorld
sidebar_label: GetVehicleVirtualWorld
description: 获取车辆所在的虚拟世界编号。
tags: ["车辆"]
---

## 描述

获取车辆当前所处的虚拟世界编号。

| 参数      | 说明               |
| --------- | ------------------ |
| vehicleid | 目标车辆的 ID 编号 |

## 返回值

返回整型数值表示车辆所在的虚拟世界编号

## 示例

```c
new
	vehicleWorld = GetVehicleVirtualWorld(vehicleid);
SetPlayerVirtualWorld(playerid, vehicleWorld);
```

## 相关函数

- [SetVehicleVirtualWorld](SetVehicleVirtualWorld): 设置车辆所处的虚拟世界
- [GetPlayerVirtualWorld](GetPlayerVirtualWorld): 获取玩家当前所在的虚拟世界编号
