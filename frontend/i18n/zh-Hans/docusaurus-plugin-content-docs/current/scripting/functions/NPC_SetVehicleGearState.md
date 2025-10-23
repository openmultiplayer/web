---
title: NPC_SetVehicleGearState
sidebar_label: NPC_SetVehicleGearState
description: 设置 NPC 驾驶飞机时的起落架状态。
tags: ["npc", "车辆", “飞机”, “起落架”]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置 NPC 驾驶飞机时的起落架状态。

| 名称      | 描述                                                                   |
| --------- | ---------------------------------------------------------------------- |
| npcid     | NPC 的 ID                                                              |
| gearstate | 要设置的起落架状态（LANDING_GEAR_STATE_DOWN 或 LANDING_GEAR_STATE_UP） |

## 返回值

此函数不返回任何特定值。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Pilot");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(520, 1958.33, 1343.12, 15.36, 0.0, -1, -1, -1); // 九头蛇战机
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 收起起落架
    NPC_SetVehicleGearState(npcid, LANDING_GEAR_STATE_UP);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/gearup", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        for (new i = 0; i < count; i++)
        {
            if (NPC_GetVehicleID(npcs[i]) != INVALID_VEHICLE_ID) // NPC 在飞机中
            {
                NPC_SetVehicleGearState(npcs[i], LANDING_GEAR_STATE_UP);
            }
        }

        SendClientMessage(playerid, 0x00FF00FF, "已收起所有 NPC 飞机的起落架");
        return 1;
    }

    if (!strcmp(cmdtext, "/geardown", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        for (new i = 0; i < count; i++)
        {
            if (NPC_GetVehicleID(npcs[i]) != INVALID_VEHICLE_ID) // NPC 在飞机中
            {
                NPC_SetVehicleGearState(npcs[i], LANDING_GEAR_STATE_DOWN);
            }
        }

        SendClientMessage(playerid, 0x00FF00FF, "已放下所有 NPC 飞机的起落架");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 驾驶飞机时有效
- 使用与[飞机起落架状态](../resources/landinggearstate)相同的常量：LANDING_GEAR_STATE_DOWN 和 LANDING_GEAR_STATE_UP
- 使用 NPC_GetVehicleGearState 检查当前起落架状态
- 这是 GetPlayerLandingGearState 的 NPC 等效函数

## 相关函数

- [NPC_GetVehicleGearState](NPC_GetVehicleGearState): 获取当前起落架状态
- [GetPlayerLandingGearState](GetPlayerLandingGearState): 获取玩家起落架状态
- [GetVehicleLandingGearState](GetVehicleLandingGearState): 获取飞机起落架状态
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆

## 相关资源

- [飞机起落架状态](../resources/landinggearstate)

## 相关回调

_此函数不会触发任何特定的回调。_
