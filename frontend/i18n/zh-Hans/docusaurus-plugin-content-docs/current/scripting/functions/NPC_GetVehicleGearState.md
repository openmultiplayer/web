---
title: NPC_GetVehicleGearState
sidebar_label: NPC_GetVehicleGearState
description: 获取 NPC 飞行器的起落架状态。
tags: ["npc", "车辆", “飞机”, “起落架”]
---

<VersionWarnZH_Hans version='omp v1.1.0.2612' />

## 描述

获取 NPC 飞行器的起落架状态。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 飞行器的起落架状态（LANDING_GEAR_STATE_DOWN 或 LANDING_GEAR_STATE_UP）。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Pilot");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(519, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300); // Shamal
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 收起起落架
    NPC_SetVehicleGearState(npcid, LANDING_GEAR_STATE_UP);

    new gearState = NPC_GetVehicleGearState(npcid);
    if (gearState == LANDING_GEAR_STATE_UP)
    {
        printf("NPC %d飞行器起落架已收起", npcid);
    }
    else
    {
        printf("NPC %d飞行器起落架已放下", npcid);
    }

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkgear", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        for (new i = 0; i < count; i++)
        {
            if (NPC_GetVehicleID(npcs[i]) != INVALID_VEHICLE_ID) // NPC在飞行器中
            {
                new gearState = NPC_GetVehicleGearState(npcs[i]);
                new msg[128];

                if (gearState == LANDING_GEAR_STATE_UP)
                {
                    format(msg, sizeof(msg), "NPC %d: 起落架已收起", npcs[i]);
                }
                else
                {
                    format(msg, sizeof(msg), "NPC %d: 起落架已放下", npcs[i]);
                }

                SendClientMessage(playerid, 0xFFFFFFFF, msg);
            }
        }

        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 驾驶飞行器时有效
- 返回由 NPC_SetVehicleGearState 设置的当前起落架状态
- 使用与[车辆起落架状态](../resources/landinggearstate)相同的常量：LANDING_GEAR_STATE_DOWN 和 LANDING_GEAR_STATE_UP
- 这是 GetPlayerLandingGearState 的 NPC 等效函数

## 相关函数

- [NPC_SetVehicleGearState](NPC_SetVehicleGearState): 设置飞行器起落架状态
- [GetPlayerLandingGearState](GetPlayerLandingGearState): 获取玩家起落架状态
- [GetVehicleLandingGearState](GetVehicleLandingGearState): 获取车辆起落架状态
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆

## 相关资源

- [车辆起落架状态](../resources/landinggearstate)

## 相关回调

_此函数不会触发任何特定的回调。_
