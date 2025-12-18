---
title: OnVehicleDamageStatusUpdate
sidebar_label: OnVehicleDamageStatusUpdate
description: 当车辆部件（车门/轮胎/面板/车灯）的损坏状态发生变更时触发此回调函数。
tags: ["车辆"]
---

:::tip

处理车辆损坏状态的相关实用函数请参阅[此处](../resources/damagestatus)

:::

## 描述

当车辆部件（车门、轮胎、面板或车灯）的损坏状态发生变更时触发此回调函数。

| 参数      | 说明                                                 |
| --------- | ---------------------------------------------------- |
| vehicleid | 损坏状态发生变化的车辆ID                             |
| playerid  | 同步损坏状态变更的玩家ID（造成损坏或修复车辆的玩家） |

## 返回值

**1** - 阻止其他滤镜脚本接收此回调  
**0** - 允许此回调传递给其他滤镜脚本

此回调始终在滤镜脚本中优先触发。

## 示例

```c
public OnVehicleDamageStatusUpdate(vehicleid, playerid)
{
    // 获取所有部件的损坏状态
    new
        VEHICLE_PANEL_STATUS:panels,
        VEHICLE_DOOR_STATUS:doors,
        VEHICLE_LIGHT_STATUS:lights,
        VEHICLE_TYRE_STATUS:tyres;

    GetVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);

    // 将轮胎状态重置为未爆胎
    tyres = VEHICLE_TYRE_STATUS_NONE;

    // 更新车辆损坏状态（修复所有轮胎）
    UpdateVehicleDamageStatus(vehicleid, panels, doors, lights, tyres);
    return 1;
}
```

## 注意事项

:::tip

此回调不包含车辆生命值（Health）变化的检测

:::

## 相关函数

以下函数可能与此回调存在关联：

- [GetVehicleDamageStatus](../functions/GetVehicleDamageStatus): 获取车辆各部件损坏状态
- [UpdateVehicleDamageStatus](../functions/UpdateVehicleDamageStatus): 更新车辆损坏状态
