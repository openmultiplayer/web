---
title: NPC_GetSurfingVehicle
sidebar_label: NPC_GetSurfingVehicle
description: 获取 NPC 正在冲浪的车辆。
tags: ["npc", "冲浪", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 正在冲浪的车辆。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回车辆 ID，若未在车辆上冲浪则返回 `INVALID_VEHICLE_ID`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checksurfingvehicle", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new vehicleid = NPC_GetSurfingVehicle(npcid);

        if (vehicleid == INVALID_VEHICLE_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没有在任何车辆上冲浪。", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在车辆上冲浪: %d", npcid, vehicleid);
        return 1;
    }
    return 0;
```

## 注意事项

- 若 NPC 未在任何车辆上冲浪则返回 `INVALID_VEHICLE_ID`
- 冲浪允许 NPC 在保持相对位置的同时随车辆移动

## 相关函数

- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): 设置 NPC 正在冲浪的车辆
- [NPC_GetSurfingObject](NPC_GetSurfingObject): 获取 NPC 正在冲浪的物体
- [NPC_GetSurfingPlayerObject](NPC_GetSurfingPlayerObject): 获取 NPC 正在冲浪的玩家物体
- [NPC_GetSurfingOffsets](NPC_GetSurfingOffsets): 获取 NPC 的冲浪偏移
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
