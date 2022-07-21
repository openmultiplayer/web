---
title: AddStaticVehicleEx
description: 在游戏模式中新增一个静态的载具(模型是为玩家预加载的)。
tags: ["vehicle"]
---

## 描述

在游戏模式中新增一个静态的载具(模型是为玩家预加载的)。与 AddStaticVehicle 的区别只有一个: 当载具无人驾驶时，允许设置重生时间。

| 参数名                                | 说明                                                                                    |
| ------------------------------------- | --------------------------------------------------------------------------------------- | --- |
| modelid                               | 载具的模型 ID。                                                                         |
| Float:spawn_X                         | 载具的 X 坐标。                                                                         |
| Float:spawn_Y                         | 载具的 Y 坐标。                                                                         |
| Float:spawn_Z                         | 载具的 Z 坐标。                                                                         |
| Float:z_angle                         | 载具方向-角度。                                                                         |
| [color1](../resources/vehiclecolorid) | 主要颜色 ID，-1 表示随机。                                                              |
| [color2](../resources/vehiclecolorid) | 次要颜色 ID，-1 表示随机。                                                              |     |
| respawn_delay                         | 直到载具在没有司机的情况下重生的延迟，以秒为单位。                                      |
| addsiren                              | 在 0.3.7 中添加；在早期版本中不起作用。具有默认值 0。使载具有警报器，前提是载具有喇叭。 |

## 返回值

创建的载具的 ID(1 ～ MAX_VEHICLES)。

如果未能创建载具(达到数量限制或无效的载具模型 ID)，则返回 INVALID_VEHICLE_ID(65535)。

## 案例

```c
public OnGameModeInit()
{
    // 新增一架九头蛇(520)，司机离开15秒后重生
    AddStaticVehicleEx (520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);
    return 1;
}
```

## 相关函数

- [AddStaticVehicle](AddStaticVehicle): 新增一辆静态载具。
- [CreateVehicle](CreateVehicle): 创建一辆载具。
