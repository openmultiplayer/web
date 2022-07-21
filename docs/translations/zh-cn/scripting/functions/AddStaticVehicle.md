---
title: AddStaticVehicle
description: 在游戏模式中新增一个静态的载具(模型是为玩家预加载的)。
tags: ["vehicle"]
---

## 描述

在游戏模式中新增一个静态的载具(模型是为玩家预加载的)。

| 参数名                                | 说明                       |
| ------------------------------------- | -------------------------- |
| modelid                               | 载具的模型 ID。            |
| Float:spawn_X                         | 载具的 X 坐标。            |
| Float:spawn_Y                         | 载具的 Y 坐标。            |
| Float:spawn_Z                         | 载具的 Z 坐标。            |
| Float:z_angle                         | 载具方向-角度。            |
| [color1](../resources/vehiclecolorid) | 主要颜色 ID，-1 表示随机。 |
| [color2](../resources/vehiclecolorid) | 次要颜色 ID，-1 表示随机。 |

## 返回值

创建的载具的 ID(1 ～ MAX_VEHICLES)。

如果未能创建载具(达到数量限制或无效的载具模型 ID)，则返回 INVALID_VEHICLE_ID(65535)。

## 案例

```c
public OnGameModeInit()
{
    // 在游戏中添加九头蛇
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);
    return 1;
}
```

## 相关函数

- [AddStaticVehicleEx](AddStaticVehicleEx): 新增具有自定义重生时间的静态载具。
- [CreateVehicle](CreateVehicle): 创建一辆载具。
- [CreateVehicle](CreateVehicle): 销毁一辆载具。
