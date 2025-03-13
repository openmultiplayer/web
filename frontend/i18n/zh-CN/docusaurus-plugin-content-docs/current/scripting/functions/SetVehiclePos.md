---
title: SetVehiclePos
sidebar_label: SetVehiclePos
description: 设置车辆坐标。
tags: ["车辆"]
---

## 描述

设置车辆的位置。

| 名称      | 说明                |
| --------- | ------------------- |
| vehicleid | 要设置位置的车辆 ID |
| Float:x   | 车辆位置的 X 坐标   |
| Float:y   | 车辆位置的 Y 坐标   |
| Float:z   | 车辆位置的 Z 坐标   |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。指定的车辆不存在。

## 示例

```c
// 将玩家的车辆传送至坐标0.0, 0.0, 3.0（圣安地列斯中心）
new vehicleid = GetPlayerVehicleID(playerid);
SetVehiclePos(vehicleid, 0.0, 0.0, 3.0);
```

## 注意

:::warning

已知问题：

- 空车辆被传送至高空时不会自然下坠！

:::

## 相关函数

- [SetPlayerPos](SetPlayerPos): 设置玩家位置
- [GetVehiclePos](GetVehiclePos): 获取车辆坐标
- [SetVehicleZAngle](SetVehicleZAngle): 设置车辆朝向角度
