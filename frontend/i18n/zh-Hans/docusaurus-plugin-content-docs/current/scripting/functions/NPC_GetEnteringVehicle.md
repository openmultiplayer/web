---
title: NPC_GetEnteringVehicle
sidebar_label: NPC_GetEnteringVehicle
description: 获取 NPC 当前正在进入的车辆。
tags: ["npc", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前正在进入的车辆。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 正在进入的车辆 ID，若未进入任何车辆则返回 INVALID_VEHICLE_ID。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkenterveh", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "您没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        if (!NPC_IsEnteringVehicle(npcid))
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没有进入车辆。", npcid);

        new vehicleid = NPC_GetEnteringVehicle(npcid);
        new seatid = NPC_GetEnteringVehicleSeat(npcid);

        if (vehicleid == INVALID_VEHICLE_ID || vehicleid == 0)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没有待定的目标车辆。", npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在进入车辆 %d (座位 %d)。", npcid, vehicleid, seatid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 当前未进入车辆，则返回 INVALID_VEHICLE_ID
- 此函数与 NPC 已乘坐的车辆不同
- NPC 必须正在进入过程中，此函数才会返回有效 ID

## 相关函数

- [NPC_EnterVehicle](NPC_EnterVehicle): 使 NPC 进入车辆
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前乘坐的车辆
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): 检查 NPC 是否正在进入车辆
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): 获取正在进入的车辆座位

## 相关回调

_此函数不会触发任何特定的回调。_
