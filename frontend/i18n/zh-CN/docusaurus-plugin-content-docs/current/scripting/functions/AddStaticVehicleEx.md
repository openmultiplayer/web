---
title: AddStaticVehicleEx
sidebar_label: AddStaticVehicleEx
description: 在游戏模式中添加可自定义重生时间的静态车辆（模型会预加载给玩家）
tags: ["车辆"]
---

## 描述

在游戏模式中添加静态车辆（模型会预加载给玩家）。

与 AddStaticVehicle 的唯一区别：可设置车辆无人驾驶后的重生时间。

| 参数名                                 | 说明                                                |
| -------------------------------------- | --------------------------------------------------- |
| modelid                                | [车辆模型 ID](../resources/vehicleid)               |
| Float:spawnX                           | 生成点的 X 坐标                                     |
| Float:spawnY                           | 生成点的 Y 坐标                                     |
| Float:spawnZ                           | 生成点的 Z 坐标                                     |
| Float:angle                            | 车辆初始朝向角度                                    |
| [colour1](../resources/vehiclecolorid) | 主颜色 ID                                           |
| [colour2](../resources/vehiclecolorid) | 副颜色 ID                                           |
| respawnDelay                           | 车辆无人驾驶后的重生延迟（单位：秒）                |
| bool:addSiren                          | 默认值'false'。为车辆添加警笛功能（需车辆自带喇叭） |

## 返回值

成功创建的车辆 ID（范围 1 至 MAX_VEHICLES）。

若创建失败（达到车辆上限或无效模型 ID）返回 INVALID_VEHICLE_ID（65535）。

## 示例

```c
public OnGameModeInit()
{
    // 添加一架九头蛇战斗机（520），无人驾驶15秒后重生
    AddStaticVehicleEx(520, 2109.1763, 1503.0453, 32.2887, 82.2873, -1, -1, 15);

    return 1;
}
```

## 相关函数

- [AddStaticVehicle](AddStaticVehicle): 添加基础静态车辆
- [CreateVehicle](CreateVehicle): 动态创建车辆
- [DestroyVehicle](DestroyVehicle): 销毁车辆
- [GetVehicleParamsSirenState](GetVehicleParamsSirenState): 检测车辆警笛状态
- [SetVehicleSpawnInfo](SetVehicleSpawnInfo): 配置车辆生成参数
- [GetVehicleSpawnInfo](GetVehicleSpawnInfo): 获取车辆生成信息
- [ChangeVehicleColours](ChangeVehicleColours): 修改车辆颜色
- [GetVehicleColours](GetVehicleColours): 获取车辆颜色配置
- [SetVehicleRespawnDelay](SetVehicleRespawnDelay): 设置车辆重生延迟
- [GetVehicleRespawnDelay](GetVehicleRespawnDelay): 获取车辆重生延迟

## 相关回调

- [OnVehicleSpawn](../callbacks/OnVehicleSpawn): 车辆重生时触发
- [OnVehicleSirenStateChange](../callbacks/OnVehicleSirenStateChange): 车辆警笛状态变化时触发

## 相关资源

- [车辆模型列表](../resources/vehicleid): 游戏内所有车辆模型的完整清单
- [车辆颜色 ID](../resources/vehiclecolorid): 所有车辆颜色 ID 对照表
