---
title: NPC_GetEnteringVehicle
sidebar_label: NPC_GetEnteringVehicle
description: 获取 NPC 当前正在进入的车辆。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前正在进入的车辆。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 正在进入的车辆 ID，若未进入任何车辆则返回 INVALID_VEHICLE_ID。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("CarDriver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_EnterVehicle(npcid, vehicleid, 0, NPC_MOVE_TYPE_WALK);

    SetTimer("CheckVehicleEntry", 1000, true);

    return 1;
}

forward CheckVehicleEntry();
public CheckVehicleEntry()
{
    new enteringVehicle = NPC_GetEnteringVehicle(0);
    if (enteringVehicle != INVALID_VEHICLE_ID)
    {
        printf("NPC 0正在进入车辆%d", enteringVehicle);
    }
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicle", true))
    {
        new enteringVehicle = NPC_GetEnteringVehicle(0);

        if (enteringVehicle != INVALID_VEHICLE_ID)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0正在进入车辆%d", enteringVehicle);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0未进入任何车辆");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 当前未进入车辆，则返回 INVALID_VEHICLE_ID
- 此函数与 NPC 已乘坐的车辆不同
- NPC 必须正在进入过程中，此函数才会返回有效 ID
- 一旦 NPC 完成进入，此函数将返回 0

## 相关函数

- [NPC_EnterVehicle](NPC_EnterVehicle): 使 NPC 进入车辆
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前乘坐的车辆
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): 检查 NPC 是否正在进入车辆
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): 获取正在进入的车辆座位

## 相关回调

_此函数不会触发任何特定的回调。_
