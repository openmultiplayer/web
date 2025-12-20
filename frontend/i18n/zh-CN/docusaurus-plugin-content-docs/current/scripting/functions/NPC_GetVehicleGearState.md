---
title: NPC_GetVehicleGearState
sidebar_label: NPC_GetVehicleGearState
description: 获取 NPC 飞行器的起落架状态。
tags: ["npc", "车辆", “飞机”, “起落架”]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

获取 NPC 飞行器的起落架状态。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 飞行器的起落架状态（LANDING_GEAR_STATE_DOWN 或 LANDING_GEAR_STATE_UP）。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehiclegearstate", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没有在任何车辆中。", npcid);

        new LANDING_GEAR_STATE:gearState = NPC_GetVehicleGearState(npcid);

        if (gearState == LANDING_GEAR_STATE_UP)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: 起落架已收起", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: 起落架已放下", npcid);

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
