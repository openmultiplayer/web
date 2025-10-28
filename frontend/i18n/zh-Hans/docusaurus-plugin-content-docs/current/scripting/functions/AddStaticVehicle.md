---
title: AddStaticVehicle
sidebar_label: AddStaticVehicle
description: 在游戏模式中添加静态车辆（模型会预加载给玩家）
tags: ["车辆"]
---

## 描述

在游戏模式中添加静态车辆（模型会预加载给玩家）。

| 参数                                   | 说明                                  |
| -------------------------------------- | ------------------------------------- |
| modelid                                | [车辆模型 ID](../resources/vehicleid) |
| Float:spawnX                           | 生成点的 X 坐标                       |
| Float:spawnY                           | 生成点的 Y 坐标                       |
| Float:spawnZ                           | 生成点的 Z 坐标                       |
| Float:angle                            | 车辆初始朝向角度                      |
| [colour1](../resources/vehiclecolorid) | 主颜色 ID（-1 表示随机）              |
| [colour2](../resources/vehiclecolorid) | 副颜色 ID（-1 表示随机）              |

## 返回值

成功创建的车辆 ID（范围 1 至 MAX_VEHICLES）。

若创建失败（达到车辆上限或无效模型 ID）返回 INVALID_VEHICLE_ID（65535）。

## 示例

```c
public OnGameModeInit()
{
    // 添加一架九头蛇战斗机到游戏中
    AddStaticVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, 0, 1);

    return 1;
}
```

## 相关函数

- [AddStaticVehicleEx](AddStaticVehicleEx): 添加可自定义重生时间的静态车辆
- [CreateVehicle](CreateVehicle): 动态创建车辆
- [DestroyVehicle](DestroyVehicle): 销毁车辆
- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): 检测车辆警报器状态
- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): 配置车辆生成参数
- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): 获取车辆生成信息
- [ChangeVehicleColours](ChangeVehicleColours): 修改车辆颜色
- [GetVehicleColours](GetVehicleColours): 获取车辆颜色配置
- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): 设置车辆重生延迟
- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): 获取车辆重生延迟

## 相关回调

- [OnVehicleSpawn](../callbacks/OnVehicleSpawn): 车辆重生时触发
- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): 车辆警报器状态变化时触发

## 相关资源

- [车辆模型列表](../resources/vehicleid): 游戏内所有车辆模型的完整清单
- [车辆颜色 ID](../resources/vehiclecolorid): 所有车辆颜色 ID 对照表
