---
title: NPC_GetVehicleSeat
sidebar_label: NPC_GetVehicleSeat
description: 获取 NPC 在车辆中的座位ID。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 在车辆中的座位 ID。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回座位 ID，若不在车辆中则返回-1。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehicleseat", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没在任何车辆中。", npcid);

        new seatid = NPC_GetVehicleSeat(npcid);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 在车辆中的座位: %d", npcid, seatid);
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
