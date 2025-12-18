---
title: VehicleCanHaveComponent
sidebar_label: VehicleCanHaveComponent
description: 检测指定组件是否可合法安装在特定车辆模型上
tags: ["车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

检测指定车辆组件是否可合法安装在特定车辆模型上。

| 参数                                     | 说明            |
| ---------------------------------------- | --------------- |
| [modelid](../resources/vehicleid)        | 车辆模型 ID     |
| [component](../resources/carcomponentid) | 待检测的组件 ID |

## 返回值

**true** - 组件可合法安装

**false** - 组件不可合法安装

## 示例代码

```c
new vehicleid = GetPlayerVehicleID(playerid);

if (VehicleCanHaveComponent(GetVehicleModel(vehicleid), 1010))
{
    SendClientMessage(playerid, 0x00FF00FF, "氮气加速组件可合法安装于本车型");
}
else
{
    SendClientMessage(playerid, 0xFF0000FF, "当前车型禁止安装氮气加速组件");
}
```

## 相关函数

- [AddVehicleComponent](AddVehicleComponent): 为车辆添加组件
- [RemoveVehicleComponent](RemoveVehicleComponent): 移除车辆组件
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): 获取指定插槽组件
- [GetVehicleComponentType](GetVehicleComponentType): 通过组件 ID 获取类型

## 相关资源

- [车辆组件 ID 对照表](../resources/carcomponentid)
