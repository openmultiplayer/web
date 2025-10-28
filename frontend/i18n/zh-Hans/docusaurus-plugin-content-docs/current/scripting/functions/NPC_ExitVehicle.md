---
title: NPC_ExitVehicle
sidebar_label: NPC_ExitVehicle
description: 使 NPC 退出其当前车辆。
tags: ["npc", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

使 NPC 退出其当前所在的车辆。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

操作成功返回 `true`，否则返回 `false`。

## 示例

```c
new g_car = INVALID_VEHICLE_ID;

public OnGameModeInit()
{
    g_car = CreateVehicle(411, 2473.9121, -1683.4276, 13.3589, -34.5, 136, 142, -1, false);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcentercar", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "您没有NPC。");

        if (g_car == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "车辆未创建。");

        if (NPC_EnterVehicle(npcid, g_car, 0, NPC_MOVE_TYPE_JOG))
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 正在进入汽车（驾驶员座位）。", npcid);

            // 25秒后退出
            SetTimerEx("ExitNPCVehicle", 25000, false, "i", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d 进入汽车失败。", npcid);
        }

        return 1;
    }
    return 0;
}

forward ExitNPCVehicle(npcid);
public ExitNPCVehicle(npcid)
{
    if (!NPC_IsValid(npcid))
        return 0;

    new vehid = NPC_GetVehicle(npcid);
    if (vehid != INVALID_VEHICLE_ID)
    {
        NPC_ExitVehicle(npcid);
        printf("NPC %d 退出了车辆 %d", npcid, vehid);
    }
    return 1;
}

```

## 注意事项

- NPC 必须在车辆中此函数才能生效，否则此函数无效
- NPC 会执行退出动画，退出后，NPC 将在车辆附近步行

## 相关函数

- [NPC_EnterVehicle](NPC_EnterVehicle): 使 NPC 进入车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 立即将 NPC 放入车辆
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): 立即将 NPC 从车辆中移除
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆

## 相关回调

_此函数不会触发特定的回调。_
