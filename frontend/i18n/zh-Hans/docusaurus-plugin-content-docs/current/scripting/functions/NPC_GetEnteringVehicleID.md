---
title: NPC_GetEnteringVehicleID
sidebar_label: NPC_GetEnteringVehicleID
description: 获取 NPC 当前正在进入的车辆ID。
tags: ["npc", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前正在进入的车辆 ID。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 正在进入的车辆 ID，若未进入任何车辆则返回 INVALID_VEHICLE_ID。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_EnterVehicle(npcid, vehicleid, 0, NPC_MOVE_TYPE_JOG);

    SetTimer("MonitorVehicleEntry", 500, true);

    return 1;
}

forward MonitorVehicleEntry();
public MonitorVehicleEntry()
{
    new enteringVehicleID = NPC_GetEnteringVehicleID(0);
    if (enteringVehicleID != INVALID_VEHICLE_ID)
    {
        printf("NPC 0正在进入车辆ID %d", enteringVehicleID);

        // 检查他们正在进入的座位
        new seat = NPC_GetEnteringVehicleSeat(0);
        printf("目标座位: %d", seat);
    }
}
```

## 注意事项

- 此函数与 NPC_GetEnteringVehicle 类似
- 若 NPC 未在进入车辆的过程中，则返回 INVALID_VEHICLE_ID
- 一旦 NPC 成功进入车辆，该值变为 0
- 使用此函数可追踪 NPC 正在接近的特定车辆

## 相关函数

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): 获取正在进入的车辆
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): 获取正在进入的车辆座位
- [NPC_EnterVehicle](NPC_EnterVehicle): 使 NPC 进入车辆
- [NPC_IsEnteringVehicle](NPC_IsEnteringVehicle): 检查是否正在进入车辆

## 相关回调

_此函数不会触发任何特定的回调。_
