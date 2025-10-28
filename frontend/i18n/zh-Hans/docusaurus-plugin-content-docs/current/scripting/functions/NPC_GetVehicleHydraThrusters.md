---
title: NPC_GetVehicleHydraThrusters
sidebar_label: NPC_GetVehicleHydraThrusters
description: 获取 NPC 的九头蛇战机推进器方向。
tags: ["npc", "车辆", "九头蛇战机"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 的九头蛇战机推进器方向。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回推进器方向（0 = 前进，1 = 垂直），若不在 九头蛇战机 中则返回-1。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Pilot");
    NPC_Spawn(npcid);

    // 创建九头蛇战机喷气机
    new vehicleid = CreateVehicle(520, 1958.33, 1343.12, 50.0, 0.0, -1, -1, 300); // 九头蛇战机
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 设置为垂直模式
    NPC_SetVehicleHydraThrusters(npcid, 1);

    new direction = NPC_GetVehicleHydraThrusters(npcid);
    printf("NPC %d Hydra推进器: %s", npcid, direction ? "垂直" : "前进");

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkhydras", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        new direction = NPC_GetVehicleHydraThrusters(0);

        new mode[16];
        switch(direction)
        {
            case 0: mode = "前进";
            case 1: mode = "垂直";
            default: mode = "未知";
        }

        new msg[64];
        format(msg, sizeof(msg), "NPC 0 Hydra模式: %s", mode);
        SendClientMessage(playerid, 0xFFFFFFFF, msg);

        return 1;
    }

    if (!strcmp(cmdtext, "/togglehydra", true))
    {
        new currentDirection = NPC_GetVehicleHydraThrusters(0);
        new newDirection = currentDirection ? 0 : 1;

        NPC_SetVehicleHydraThrusters(0, newDirection);

        new msg[64];
        format(msg, sizeof(msg), "NPC 0 Hydra切换到%s模式",
            newDirection ? "垂直" : "前进");
        SendClientMessage(playerid, 0x00FF00FF, msg);

        return 1;
    }
    return 0;
}

forward HydraFlightPattern(npcid);
public HydraFlightPattern(npcid)
{
    if (!NPC_IsValid(npcid))
        return;

    new vehicleid = NPC_GetVehicle(npcid);
    if (vehicleid == INVALID_VEHICLE_ID || GetVehicleModel(vehicleid) != 520)
        return;

    new direction = NPC_GetVehicleHydraThrusters(npcid);

    // 在不同模式间循环以适应不同飞行阶段
    if (direction == 0) // 当前为前进模式
    {
        // 切换到垂直模式进行悬停
        NPC_SetVehicleHydraThrusters(npcid, 1);
        printf("NPC %d Hydra: 切换到悬停模式", npcid);

        // 安排下次更改
        SetTimerEx("HydraFlightPattern", 15000, false, "i", npcid);
    }
    else // 当前为垂直模式
    {
        // 切换到前进模式进行快速飞行
        NPC_SetVehicleHydraThrusters(npcid, 0);
        printf("NPC %d Hydra: 切换到前进飞行", npcid);

        // 安排下次更改
        SetTimerEx("HydraFlightPattern", 20000, false, "i", npcid);
    }
}
```

## 注意事项

- 仅适用于 九头蛇战机（模型 520）
- 若 NPC 不在 九头蛇战机 中或不在车辆中则返回-1
- 方向 0 = 前进飞行模式（喷气机模式）
- 方向 1 = 垂直飞行模式（直升机模式）
- 使用此函数监控或控制 九头蛇战机 飞行行为

## 相关函数

- [NPC_SetVehicleHydraThrusters](NPC_SetVehicleHydraThrusters): 设置推进器方向
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆
- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): 获取车辆生命值
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆

## 相关回调

_此函数不会触发任何特定的回调。_
