---
title: GetPlayerCameraTargetPlayer
sidebar_label: GetPlayerCameraTargetPlayer
description: 获取指定玩家当前正在注视的其他玩家ID
tags: ["玩家", "视角"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取指定玩家当前正在注视的其他玩家 ID

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

被注视玩家的 ID（若无可视玩家则返回 INVALID_PLAYER_ID）

## 示例代码

```c
new playerTarget = GetPlayerCameraTargetPlayer(playerid);

if (IsPlayerAdmin(playerTarget))
{
    GameTextForPlayer(playerid, "正在注视管理员玩家", 3000, 3);
}
```

## 注意事项

:::warning

请勿与[GetPlayerTargetPlayer](GetPlayerTargetPlayer)混淆。GetPlayerTargetPlayer 返回玩家正在用武器瞄准的玩家 ID，而本函数返回玩家视角中心点所指向的玩家 ID

:::

## 相关函数

- [GetPlayerCameraTargetActor](GetPlayerCameraTargetActor): 获取玩家当前注视的角色 ID
- [GetPlayerCameraTargetVehicle](GetPlayerCameraTargetVehicle): 获取玩家当前注视的车辆 ID
- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): 获取玩家当前注视的物体 ID
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量
