---
title: NPC_GetEnteringVehicleSeat
sidebar_label: NPC_GetEnteringVehicleSeat
description: 获取NPC在车辆中正在进入的座位。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 在车辆中正在进入的座位。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 正在进入的座位号，若未进入则返回-1。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Passenger");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);

    // 使NPC作为乘客进入座位1
    NPC_EnterVehicle(npcid, vehicleid, 1, NPC_MOVE_TYPE_WALK);

    SetTimer("CheckEnteringSeat", 100, true);

    return 1;
}

forward CheckEnteringSeat();
public CheckEnteringSeat()
{
    new seat = NPC_GetEnteringVehicleSeat(0);
    if (seat != -1)
    {
        new vehicleid = NPC_GetEnteringVehicleID(0);

        new seatName[16];
        switch(seat)
        {
            case 0: seatName = "驾驶员";
            case 1: seatName = "副驾驶";
            case 2: seatName = "后左座";
            case 3: seatName = "后右座";
            default: seatName = "未知";
        }

        printf("NPC 0正在进入车辆%d作为%s（座位%d）", vehicleid, seatName, seat);
    }
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
- 座位 0 始终为驾驶员座位

## 相关函数

- [NPC_GetEnteringVehicle](NPC_GetEnteringVehicle): 获取正在进入的车辆
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): 获取正在进入的车辆 ID
- [NPC_EnterVehicle](NPC_EnterVehicle): 使 NPC 进入车辆
- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): 获取当前车辆座位

## 相关回调

_此函数不会触发任何特定的回调。_
