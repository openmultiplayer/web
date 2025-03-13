---
title: GetVehicleSirenState
sidebar_label: GetVehicleSirenState
description: 获取车辆的警笛开关状态。
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取车辆当前警笛的启用状态。

## 参数

| 参数名    | 说明               |
| --------- | ------------------ |
| vehicleid | 目标车辆的 ID 编号 |

## 返回值

返回布尔值表示警笛状态：**true** 开启 / **false** 关闭

## 示例

```c
public OnPlayerEnterVehicle(playerid, vehicleid, ispassenger)
{
    new bool:sirenState = GetVehicleSirenState(vehicleid);

    SendClientMessage(playerid, 0xFFFF00FF, "警笛状态: %s", sirenState ? "开启" : "关闭");
    return 1;
}
```

## 相关函数

- [SetVehicleParamsSirenState](SetVehicleParamsSirenState): 设置车辆警笛的开关状态
- [ToggleVehicleSirenEnabled](ToggleVehicleSirenEnabled): 切换车辆警笛的启用状态
- [IsVehicleSirenEnabled](IsVehicleSirenEnabled): 检测车辆警笛是否处于开启状态
- [GetPlayerSirenState](GetPlayerSirenState): 获取玩家当前车辆的警笛状态
