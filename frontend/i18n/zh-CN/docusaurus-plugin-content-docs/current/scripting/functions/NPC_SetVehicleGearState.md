---
title: NPC_SetVehicleGearState
sidebar_label: NPC_SetVehicleGearState
description: 设置 NPC 驾驶飞机时的起落架状态。
tags: ["npc", "车辆", “飞机”, “起落架”]
---

<VersionWarnZH_CN version='omp v1.1.0.2612' />

## 描述

设置 NPC 驾驶飞机时的起落架状态。

| 参数      | 说明                                                                   |
| --------- | ---------------------------------------------------------------------- |
| npcid     | NPC 的 ID                                                              |
| gearstate | 要设置的起落架状态（LANDING_GEAR_STATE_DOWN 或 LANDING_GEAR_STATE_UP） |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setvehiclegearstate ", true, 21))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new gearState = strval(cmdtext[21]);

        NPC_SetVehicleGearState(npcid, gearState);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 飞机起落架状态设置为 %d", npcid, gearState);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 驾驶飞机时有效
- 使用与[飞机起落架状态](../resources/landinggearstate)相同的常量：LANDING_GEAR_STATE_DOWN 和 LANDING_GEAR_STATE_UP
- 使用 NPC_GetVehicleGearState 检查当前起落架状态

## 相关函数

- [NPC_GetVehicleGearState](NPC_GetVehicleGearState): 获取当前起落架状态
- [GetPlayerLandingGearState](GetPlayerLandingGearState): 获取玩家起落架状态
- [GetVehicleLandingGearState](GetVehicleLandingGearState): 获取飞机起落架状态
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆

## 相关资源

- [飞机起落架状态](../resources/landinggearstate)

## 相关回调

_此函数不会触发任何特定的回调。_
