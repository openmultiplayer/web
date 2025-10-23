---
title: GetPlayerCameraTargetVehicle
sidebar_label: GetPlayerCameraTargetVehicle
description: 获取玩家当前正在注视的车辆ID
tags: ["玩家", "车辆", "视角"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取玩家当前正在注视的车辆 ID

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

玩家正在注视的车辆 ID（若无则返回 INVALID_VEHICLE_ID）

## 示例代码

```c
new globalVehicleID;

public OnGameModeInit()
{
    // 创建全局测试车辆（警用巡逻车）
    globalVehicleID = CreateVehicle(596, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0, -1, -1, -1);
    return 1;
}

public OnPlayerConnect(playerid)
{
    // 启用玩家视角目标检测功能
    EnablePlayerCameraTarget(playerid, true);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new vehicleid = GetPlayerCameraTargetVehicle(playerid);

        // 检测是否注视预设车辆
        if (vehicleid == globalVehicleID)
        {
            SendClientMessage(playerid, -1, "你正在注视你的车辆！");
        }
        else
        {
            SendClientMessage(playerid, -1, "未检测到目标车辆");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

本函数每次只能返回一个车辆 ID（通常为距离玩家最近的车辆），即使玩家视角范围内存在多个车辆

:::

:::warning

本功能默认禁用以节省带宽，需使用[EnablePlayerCameraTarget](EnablePlayerCameraTarget)为每个玩家单独启用

:::

## 相关函数

- [GetPlayerCameraTargetPlayer](GetPlayerCameraTargetPlayer): 获取玩家注视的玩家 ID
- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): 获取玩家注视的物体 ID
- [EnablePlayerCameraTarget](EnablePlayerCameraTarget): 启用玩家视角目标检测功能
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量
