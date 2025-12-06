---
title: RemoveVehicleComponent
sidebar_label: RemoveVehicleComponent
description: 移除车辆的组件
tags: ["车辆"]
---

## 描述

从车辆上移除指定组件。

| 参数                                     | 说明            |
| ---------------------------------------- | --------------- |
| vehicleid                                | 目标车辆的 ID   |
| [component](../resources/carcomponentid) | 要移除的组件 ID |

## 返回值

**true** - 组件成功从车辆移除

**false** - 移除失败，通常表示车辆不存在

## 示例

```c
// 移除玩家车辆的氮气加速组件
new vehicleid = GetPlayerVehicleID(playerid);
RemoveVehicleComponent(vehicleid, 1010);
```

## 相关函数

- [AddVehicleComponent](AddVehicleComponent): 为车辆添加组件
- [GetVehicleComponentInSlot](GetVehicleComponentInSlot): 获取车辆指定槽位的组件
- [GetVehicleComponentType](GetVehicleComponentType): 通过组件 ID 获取组件类型
- [VehicleCanHaveComponent](VehicleCanHaveComponent): 验证组件是否适配该车辆

## 相关回调

- [OnVehicleMod](../callbacks/OnVehicleMod): 当车辆被改装时触发
- [OnEnterExitModShop](../callbacks/OnEnterExitModShop): 当车辆进入/离开改装店时触发

## 相关资源

- [车辆组件 ID 列表](../resources/carcomponentid)
