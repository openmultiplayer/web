---
title: GetPlayerSpectateID
sidebar_label: GetPlayerSpectateID
description: 获取玩家正在观战的目标ID（玩家或车辆）
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前正在观战的玩家或车辆的 ID

| 参数名   | 说明    |
| -------- | ------- |
| playerid | 玩家 ID |

## 返回值

返回被观战目标的 ID（玩家 ID 或车辆 ID）

## 示例代码

```c
new spectateType = GetPlayerSpectateType(playerid);

if (spectateType == 1)
{
    new spectateVehicleId = GetPlayerSpectateID(playerid);
}
else if (spectateType == 2)
{
    new spectatePlayerId = GetPlayerSpectateID(playerid);
}
```

## 注意事项

:::info

需要配合[GetPlayerSpectateType](GetPlayerSpectateType)判断观战类型，详见[观战类型说明](../resources/spectatetypes)

:::

## 相关函数

- [PlayerSpectatePlayer](PlayerSpectatePlayer): 观战指定玩家
- [PlayerSpectateVehicle](PlayerSpectateVehicle): 观战指定车辆
- [TogglePlayerSpectating](TogglePlayerSpectating): 切换玩家观战状态
- [GetPlayerSpectateType](GetPlayerSpectateType): 获取玩家观战类型

## 扩展资源

- [观战类型说明](../resources/spectatetypes)
