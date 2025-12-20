---
title: NPC_GetEnteringVehicleSeat
sidebar_label: NPC_GetEnteringVehicleSeat
description: 获取 NPC 在车辆中正在进入的座位。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 在车辆中正在进入的座位。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 正在进入的座位号，若未进入则返回-1。

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

## 座位 ID

| ID  | 座位               |
| --- | ------------------ |
| 0   | 驾驶员             |
| 1   | 副驾驶乘客         |
| 2   | 后左乘客           |
| 3   | 后右乘客           |
| 4+  | 乘客座位（大巴等） |

## 注意事项

- 若 NPC 未进入任何车辆，则返回-1
- 此信息仅在 NPC 处于进入过程中时有效

## 相关函数

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): 获取正在进入的车辆
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): 获取正在进入的车辆 ID
- [NPC_EnterVehicle](NPC_EnterVehicle): 使 NPC 进入车辆
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): 获取当前车辆座位

## 相关回调

_此函数不会触发任何特定的回调。_
