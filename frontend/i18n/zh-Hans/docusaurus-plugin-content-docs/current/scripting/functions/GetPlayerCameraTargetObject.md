---
title: GetPlayerCameraTargetObject
sidebar_label: GetPlayerCameraTargetObject
description: 获取玩家当前正在注视的物体ID
tags: ["玩家", "视角"]
---

<VersionWarnZH_CN version='SA-MP 0.3.7' />

## 描述

获取玩家当前正在注视的物体 ID

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

玩家正在注视的物体 ID（若无可视物体则返回 INVALID_OBJECT_ID）

## 示例代码

```c
new globalObjectID;

public OnGameModeInit()
{
    // 创建全局测试物体
    globalObjectID = CreateObject(1337, 0.0, 0.0, 3.0, 0.0, 0.0, 0.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new objectid = GetPlayerCameraTargetObject(playerid);

        // 检测是否为全局物体
        if (objectid == globalObjectID)
        {
            SendClientMessage(playerid, -1, "你正在注视目标物体");
        }
        // 检测是否无物体被注视
        else if (objectid == INVALID_OBJECT_ID) // INVALID_OBJECT_ID = 65535
        {
            SendClientMessage(playerid, -1, "未检测到注视物体");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

本功能默认禁用以节省带宽，需使用[EnablePlayerCameraTarget](EnablePlayerCameraTarget)为每个玩家单独启用

:::

## 相关函数

- [GetPlayerCameraTargetVehicle](GetplayerCameraTargetVehicle): 获取玩家当前注视的车辆 ID
- [GetPlayerCameraTargetPlayer](GetplayerCameraTargetPlayer): 获取玩家当前注视的玩家 ID
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量
