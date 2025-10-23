---
title: GetPlayerSpectateType
sidebar_label: GetPlayerSpectateType
description: 获取玩家的观战类型（车辆或玩家）
tags: ["玩家"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前的观战类型（正在观战车辆或玩家）

| 参数名   | 说明    |
| -------- | ------- |
| playerid | 玩家 ID |

## 返回值

返回玩家的[观战类型](../resources/spectatetypes)

## 示例代码

```c
new spectateType = GetPlayerSpectateType(playerid);

if (spectateType == 1) // 观战车辆模式
{
    SendClientMessage(playerid, -1, "你正在观战一辆车辆");
}
else if (spectateType == 2) // 观战玩家模式
{
    SendClientMessage(playerid, -1, "你正在观战其他玩家");
}
```

## 相关函数

- [PlayerSpectatePlayer](PlayerSpectatePlayer): 观战指定玩家
- [PlayerSpectateVehicle](PlayerSpectateVehicle): 观战指定车辆
- [TogglePlayerSpectating](TogglePlayerSpectating): 切换观战状态
- [GetPlayerSpectateID](GetPlayerSpectateID): 获取观战目标 ID

## 扩展资源

- [观战类型说明](../resources/spectatetypes)
