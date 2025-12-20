---
title: EnablePlayerCameraTarget
sidebar_label: EnablePlayerCameraTarget
description: 切换玩家的视角目标功能（默认禁用以节省带宽）。
tags: ["玩家"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

切换玩家的视角目标检测功能。此函数默认禁用以节省网络带宽。

| 参数        | 说明                        |
| ----------- | --------------------------- |
| playerid    | 要设置视角目标功能的玩家 ID |
| bool:enable | true 启用 / false 禁用      |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接）

## 示例

```c
public OnPlayerConnect(playerid)
{
     EnablePlayerCameraTarget(playerid, true); // 玩家连接时启用视角目标功能
     return 1;
}
```

## 相关函数

- [IsPlayerCameraTargetEnabled](IsPlayerCameraTargetEnabled): 检查玩家视角目标是否启用
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): 获取玩家正在观察的车辆 ID
- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): 获取玩家正在观察的其他玩家 ID
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量
