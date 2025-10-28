---
title: NPC_GetVehicleSeat
sidebar_label: NPC_GetVehicleSeat
description: 获取 NPC 在车辆中的座位ID。
tags: ["npc", "车辆"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 在车辆中的座位 ID。

| 名称  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回座位 ID，若不在车辆中则返回-1。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Passenger");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300);
    NPC_PutInVehicle(npcid, vehicleid, 1); // 放入副驾驶座

    new seat = NPC_GetVehicleSeat(npcid);
    printf("NPC %d在座位%d中", npcid, seat);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkseat", true))
    {
        new seat = NPC_GetVehicleSeat(0);
        if (seat != -1)
        {
            new msg[64];
            format(msg, sizeof(msg), "NPC 0在座位%d中", seat);
            SendClientMessage(playerid, 0xFFFFFFFF, msg);
        }
        else
        {
            SendClientMessage(playerid, 0xFFFF00FF, "NPC 0不在车辆中");
        }
        return 1;
    }
    return 0;
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

- 若 NPC 未在任何车辆中则返回-1
- 座位 0 始终为驾驶员座位
- 最大座位 ID 取决于车辆模型

## 相关函数

- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆 ID
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): 将 NPC 从车辆中移出

## 相关回调

_此函数不会触发任何特定的回调。_
