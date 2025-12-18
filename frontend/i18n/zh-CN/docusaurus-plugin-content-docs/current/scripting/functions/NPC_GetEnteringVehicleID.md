---
title: NPC_GetEnteringVehicleID
sidebar_label: NPC_GetEnteringVehicleID
description: 获取 NPC 当前正在进入的车辆ID。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前正在进入的车辆 ID。

| 参数  | 说明      |
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
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        // 如果尚未运行，则开始监视
        if (PlayerEnterVehicleMonitor[playerid] == INVALID_TIMER_ID)
        {
            PlayerEnterVehicleMonitor[playerid] = SetTimerEx("CheckNPCEnteringVehicle", 200, true, "i", playerid);
            PlayerWasEnteringVehicle[playerid] = false;
            SendClientMessage(playerid, 0x00FF00FF, "开始监控 NPC %d 的车辆进入状态。", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "已在监控 NPC %d 的车辆进入状态。", npcid);
        }
        return 1;
    }
    return 0;
}

forward CheckNPCEnteringVehicle(playerid);
public CheckNPCEnteringVehicle(playerid)
{
    if (!IsPlayerConnected(playerid))
    {
        StopPlayerEnterVehicleMonitor(playerid);
        return 0;
    }

    new npcid = PlayerNPC[playerid];
    if (npcid == INVALID_NPC_ID || !NPC_IsValid(npcid))
    {
        StopPlayerEnterVehicleMonitor(playerid);
        return 0;
    }

    new bool:isEntering = NPC_IsEnteringVehicle(npcid);

    if (isEntering)
    {
        new vehicleid = NPC_GetEnteringVehicle(npcid);
        new seatid = NPC_GetEnteringVehicleSeat(npcid);

        if (vehicleid != INVALID_VEHICLE_ID && vehicleid != 0)
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 正在进入车辆 %d（座位 %d）", npcid, vehicleid, seatid);
        }
    }

    return 1;
}
```

## 注意事项

- 此函数与 NPC_GetEnteringVehicle 类似
- 若 NPC 未在进入车辆的过程中，则返回 `INVALID_VEHICLE_ID`
- 一旦 NPC 成功进入车辆，该值变为 0

## 相关函数

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): 获取正在进入的车辆
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): 获取正在进入的车辆座位
- [NPC_EnterVehicle](NPC_EnterVehicle): 使 NPC 进入车辆
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): 检查是否正在进入车辆

## 相关回调

_此函数不会触发任何特定的回调。_
