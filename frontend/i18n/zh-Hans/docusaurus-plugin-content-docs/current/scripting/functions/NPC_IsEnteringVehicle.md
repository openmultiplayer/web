---
title: NPC_IsEnteringVehicle
sidebar_label: NPC_IsEnteringVehicle
description: 检查 NPC 是否正在进入车辆。
tags: ["npc", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

检查 NPC 当前是否正在进入车辆的过程中。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

如果 NPC 正在进入车辆则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_EnterVehicle(npcid, vehicleid, 0, NPC_MOVE_TYPE_WALK);

    // 检查是否正在进入
    SetTimerEx("CheckVehicleEntry", 2000, false, "i", npcid);

    return 1;
}

forward CheckVehicleEntry(npcid);
public CheckVehicleEntry(npcid)
{
    if (NPC_IsEnteringVehicle(npcid))
    {
        new vehicleid = NPC_GetEnteringVehicleID(npcid);
        new seat = NPC_GetEnteringVehicleSeat(npcid);
        printf("NPC %d 正在进入车辆%d，座位%d", npcid, vehicleid, seat);
    }
    else
    {
        printf("NPC %d没有在进入任何车辆", npcid);
    }
}
```

## 注意事项

- 仅在进入动画/过程中返回 true
- 一旦 NPC 完全进入车辆，此函数返回 false
- 使用此函数检测 NPC 何时正在进入车辆
- NPC 必须已通过 NPC_EnterVehicle 被指示进入车辆

## 相关函数

- [NPC_EnterVehicle](NPC_EnterVehicle): 让 NPC 进入车辆
- [NPC_GetEnteringVehicleID](NPC_GetEnteringVehicleID): 获取正在进入的车辆 ID
- [NPC_GetEnteringVehicleSeat](NPC_GetEnteringVehicleSeat): 获取正在进入的座位
- [NPC_GetVehicle](NPC_GetVehicle): 获取当前车辆

## 相关回调

_此函数不会触发任何特定的回调。_
