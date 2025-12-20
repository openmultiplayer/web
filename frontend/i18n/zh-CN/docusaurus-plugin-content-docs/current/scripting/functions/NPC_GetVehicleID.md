---
title: NPC_GetVehicleID
sidebar_label: NPC_GetVehicleID
description: 获取 NPC 当前乘坐的车辆ID。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 当前乘坐的车辆 ID。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回 NPC 所在的车辆 ID，若未在任何车辆中则返回 INVALID_VEHICLE_ID。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicleid", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new vehicleid = NPC_GetVehicleID(npcid);

        if (vehicleid == INVALID_VEHICLE_ID)
            SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没在任何车辆中。", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 车辆 ID: %d", npcid, vehicleid);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 未在任何车辆中则返回 INVALID_VEHICLE_ID

## 相关函数

- [NPC_GetVehicleSeat](NPC_GetVehicleSeat): 获取 NPC 在车辆中的座位
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [NPC_RemoveFromVehicle](NPC_RemoveFromVehicle): 将 NPC 从车辆中移出
- [NPC_GetVehicle](NPC_GetVehicle): 具有相同行为的替代函数

## 相关回调

_此函数不会触发任何特定的回调。_
