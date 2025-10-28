---
title: NPC_GetVehicleID
sidebar_label: NPC_GetVehicleID
description: 获取 NPC 当前乘坐的车辆ID。
tags: ["npc", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 当前乘坐的车辆 ID。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 所在的车辆 ID，若未在任何车辆中则返回 INVALID_VEHICLE_ID。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300); // Infernus
    NPC_PutInVehicle(npcid, vehicleid, 0);

    new currentVehicle = NPC_GetVehicleID(npcid);
    printf("NPC %d在车辆%d中", npcid, currentVehicle);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checknpc", true))
    {
        new vehicleid = NPC_GetVehicleID(0);
        if (vehicleid != INVALID_VEHICLE_ID)
        {
            printf("NPC 0在车辆%d中", vehicleid);
        }
        else
        {
            print("NPC 0正在步行");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 未在任何车辆中则返回 INVALID_VEHICLE_ID
- 使用此函数检查 NPC 是在驾驶还是作为乘客
- 可与其他车辆函数配合使用以获取更多详细信息

## 相关函数

- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): 获取 NPC 在车辆中的座位
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): 将 NPC 从车辆中移出
- [NPC_GetVehicle](NPC_GetVehicle): 具有相同行为的替代函数

## 相关回调

_此函数不会触发任何特定的回调。_
