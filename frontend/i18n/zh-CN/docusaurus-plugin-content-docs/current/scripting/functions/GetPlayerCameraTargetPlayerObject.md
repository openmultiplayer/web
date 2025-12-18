---
title: GetPlayerCameraTargetPlayerObject
sidebar_label: GetPlayerCameraTargetPlayerObject
description: 获取玩家当前正在注视的玩家物体ID
tags: ["玩家", "视角", "物体", "玩家物体"]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取玩家当前正在注视的玩家创建物体（player-object）的 ID

| 参数名   | 说明              |
| -------- | ----------------- |
| playerid | 需要检测的玩家 ID |

## 返回值

玩家正在注视的玩家物体 ID（若无可视物体则返回 INVALID_OBJECT_ID）

## 示例代码

```c
new gPlayerObject[MAX_PLAYERS];

public OnPlayerConnect(playerid)
{
    gPlayerObject[playerid] = CreatePlayerObject(playerid, 19174, 978.9045, -986.3599, 40.9522, 0.0000, 0.0000, 228.0000);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/check", true))
    {
        new objectid = GetPlayerCameraTargetPlayerObject(playerid);
        if (objectid == gPlayerObject[playerid])
        {
            SendClientMessage(playerid, -1, "你正在注视自己的玩家物体");
        }
        else if (objectid == INVALID_OBJECT_ID) // INVALID_OBJECT_ID = 65535
        {
            SendClientMessage(playerid, -1, "未检测到注视的玩家物体");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

此函数默认禁用以节省带宽，需使用[EnablePlayerCameraTarget](EnablePlayerCameraTarget)为每个玩家单独启用

:::

## 相关函数

- [GetPlayerCameraTargetObject](GetPlayerCameraTargetObject): 获取玩家注视的全局物体 ID
- [GetPlayerCameraTargetVehicle](GetplayerCameraTargetVehicle): 获取玩家注视的车辆 ID
- [GetPlayerCameraTargetPlayer](GetplayerCameraTargetPlayer): 获取玩家注视的玩家 ID
- [GetPlayerCameraFrontVector](GetPlayerCameraFrontVector): 获取玩家视角前向向量
