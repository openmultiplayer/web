---
title: NPC_UseVehicleSiren
sidebar_label: NPC_UseVehicleSiren
description: 让 NPC 使用或停止使用车辆警报器。
tags: ["npc", "车辆", "警报器"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

让 NPC 使用或停止使用车辆警报器。

| 名称  | 说明                                          |
| ----- | --------------------------------------------- |
| npcid | NPC 的 ID                                     |
| use   | `true` 使用警报器，`false` 停止（默认：true） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
new g_PatrolVehicle = INVALID_VEHICLE_ID;

public OnGameModeInit()
{
    // 创建警察巡逻单位
    new npcid = NPC_Create("Officer");
    NPC_Spawn(npcid);

    // 创建警车
    g_PatrolVehicle = CreateVehicle(596, 1958.33, 1343.12, 15.36, 0.0, 1, 1, 300); // 警车（LS）
    NPC_PutInVehicle(npcid, g_PatrolVehicle, 0);

    // 开始带警报器的巡逻
    NPC_UseVehicleSiren(npcid, true);

    // 开始自动巡逻循环
    SetTimer("PatrolCycle", 30000, true);

    return 1;
}

forward PatrolCycle();
public PatrolCycle()
{
    // 巡逻期间随机激活警报器
    if (random(100) < 30) // 30% 概率
    {
        new bool:currentSiren = NPC_IsVehicleSirenUsed(0);
        NPC_UseVehicleSiren(0, !currentSiren);

        printf("巡逻 NPC %s 警报器", !currentSiren ? "激活" : "关闭");
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/siren", true))
    {
        if (NPC_GetVehicle(0) != INVALID_VEHICLE_ID)
        {
            new bool:sirenOn = NPC_IsVehicleSirenUsed(0);
            NPC_UseVehicleSiren(0, !sirenOn);

            new msg[64];
            format(msg, sizeof(msg), "NPC 0 警报器：%s", !sirenOn ? "开启" : "关闭");
            SendClientMessage(playerid, 0x00FF00FF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC 0 不在车辆中");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/emergency", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // 派遣紧急响应
        DispatchEmergencyResponse(x, y, z);

        SendClientMessage(playerid, 0xFF0000FF, "紧急响应已派遣到您的位置！");
        return 1;
    }

    if (!strcmp(cmdtext, "/codeblue", true))
    {
        // 紧急代码蓝色 - 激活所有警报器
        if (NPC_GetVehicle(0) != INVALID_VEHICLE_ID)
        {
            NPC_UseVehicleSiren(0, true);

            // 高速驶向玩家位置
            new Float:px, Float:py, Float:pz;
            GetPlayerPos(playerid, px, py, pz);
            NPC_Move(0, px, py, pz, NPC_MOVE_TYPE_DRIVE);

            SendClientMessage(playerid, 0xFF0000FF, "代码蓝色：紧急响应已激活！");
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "无紧急车辆可用");
        }
        return 1;
    }
    return 0;
}

DispatchEmergencyResponse(Float:x, Float:y, Float:z)
{
    // 创建紧急车辆
    new emergencyTypes[][] = {
        {596, "Police"},     // 警车 LS
        {416, "Ambulance"},  // 救护车
        {407, "FireTruck"}   // 消防车
    };

    for (new i = 0; i < sizeof(emergencyTypes); i++)
    {
        new npcid = NPC_Create(emergencyTypes[i][1]);
        NPC_Spawn(npcid);

        new Float:spawnX = x + (i * 20.0) - 40.0;
        new vehicleid = CreateVehicle(emergencyTypes[i][0], spawnX, y - 30.0, z, 0.0, -1, -1, 300);

        NPC_PutInVehicle(npcid, vehicleid, 0);
        NPC_UseVehicleSiren(npcid, true);

        // 驶向紧急位置
        NPC_Move(npcid, x, y, z, NPC_MOVE_TYPE_DRIVE);
    }

    printf("紧急响应已派遣到 %.2f, %.2f, %.2f", x, y, z);
}
```

## 注意事项

- 仅在 NPC 作为驾驶员在车辆中时有效
- 车辆必须支持警报器（紧急车辆）
- 警报器状态持续保持直到更改或 NPC 下车
- 使用适当的车辆模型以增加真实感
- 与 NPC 移动结合使用非常适合巡逻场景

## 相关函数

- [NPC_IsVehicleSirenUsed](NPC_IsVehicleSirenUsed): 检查警报器是否在使用
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_Move](NPC_Move): 让 NPC 驾驶到位置

## 相关回调

_此函数不会触发任何特定的回调。_
