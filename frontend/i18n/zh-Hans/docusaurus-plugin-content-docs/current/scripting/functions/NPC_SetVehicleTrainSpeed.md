---
title: NPC_SetVehicleTrainSpeed
sidebar_label: NPC_SetVehicleTrainSpeed
description: 设置 NPC 火车车辆的速度。
tags: ["npc", "车辆", "火车", "速度"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 火车车辆的速度。

| 名称  | 说明             |
| ----- | ---------------- |
| npcid | NPC 的 ID        |
| speed | 要设置的火车速度 |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Engineer");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(537, 1700.0, -1950.0, 20.0, 0.0, -1, -1, -1); // 货运火车
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 设置适中的火车速度
    NPC_SetVehicleTrainSpeed(npcid, 50.0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/fasttrains", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        // 为 NPC 0 的火车设置最大速度
        NPC_SetVehicleTrainSpeed(0, 100.0);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 火车已达到最大速度");
        return 1;
    }

    if (!strcmp(cmdtext, "/stoptrain", true))
    {
        // 停止 NPC 0 的火车
        NPC_SetVehicleTrainSpeed(0, 0.0);
        SendClientMessage(playerid, 0xFF0000FF, "NPC 0 火车已停止");

        SendClientMessage(playerid, 0xFF0000FF, "所有 NPC 火车已停止");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅适用于火车车辆（模型 537、538）
- 速度影响火车沿轨道移动的快慢
- 使用 NPC_GetVehicleTrainSpeed 检查当前速度
- 将速度设置为 0 会停止火车

## 相关函数

- [NPC_GetVehicleTrainSpeed](NPC_GetVehicleTrainSpeed): 获取火车速度
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [GetVehicleModel](GetVehicleModel): 获取车辆模型

## 相关回调

_此函数不会触发任何特定的回调。_
