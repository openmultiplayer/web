---
title: CreateVehicle
sidebar_label: CreateVehicle
description: 在游戏世界中创建车辆。
tags: ["车辆"]
---

## 描述

在游戏世界中动态创建车辆，可在脚本任意时刻替代 AddStaticVehicleEx 使用。

| 参数                                   | 说明                                                  |
| -------------------------------------- | ----------------------------------------------------- |
| [modelid](../resources/vehicleid)      | 车辆模型 ID                                           |
| Float:spawnX                           | 车辆生成的 X 轴坐标                                   |
| Float:spawnY                           | 车辆生成的 Y 轴坐标                                   |
| Float:spawnZ                           | 车辆生成的 Z 轴坐标                                   |
| Float:angle                            | 车辆初始朝向角度                                      |
| [colour1](../resources/vehiclecolorid) | 主颜色 ID                                             |
| [colour2](../resources/vehiclecolorid) | 副颜色 ID                                             |
| respawnDelay                           | 无驾驶员时车辆重生延迟（秒）。使用-1 将禁用自动重生   |
| bool:addSiren                          | 默认值'false'。为车辆启用警报器功能（需车辆自带喇叭） |

## 返回值

返回创建的车辆 ID（范围 1 至 MAX_VEHICLES）。

若达到车辆数量上限或模型 ID 无效，返回 INVALID_VEHICLE_ID (65535)。

若使用火车模型 ID（538 或 537），返回 0（不可用）。

## 示例

```c
public OnGameModeInit()
{
    // 在游戏中添加一架九头蛇直升机（520），重生时间为60秒
    CreateVehicle(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 60);
    return 1;
}
```

## 注意事项

:::warning

火车车辆仅能通过[AddStaticVehicle](AddStaticVehicle)和[AddStaticVehicleEx](AddStaticVehicleEx)添加

:::

## 相关函数

- [DestroyVehicle](DestroyVehicle): 销毁车辆
- [AddStaticVehicle](AddStaticVehicle): 添加静态车辆
- [AddStaticVehicleEx](AddStaticVehicleEx): 添加带自定义重生时间的静态车辆
- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): 检测车辆警报器状态
- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): 配置车辆生成参数
- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): 获取车辆生成信息
- [ChangeVehicleColours](ChangeVehicleColours): 修改车辆颜色配置
- [GetVehicleColours](GetVehicleColours): 获取车辆颜色配置
- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): 设置车辆重生延迟
- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): 获取车辆重生延迟

## 相关回调

- [OnVehicleSpawn](../callbacks/OnVehicleSpawn): 车辆重生时触发
- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): 警报器状态变化时触发

## 相关资源

- [车辆模型列表](../resources/vehicleid): 游戏中所有可用车辆模型的完整清单
- [车辆颜色 ID 列表](../resources/vehiclecolorid): 所有车辆颜色 ID 对照表
