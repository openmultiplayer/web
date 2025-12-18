---
title: NPC_GetVehicleHydraThrusters
sidebar_label: NPC_GetVehicleHydraThrusters
description: 获取 NPC 的九头蛇战机推进器方向。
tags: ["npc", "车辆", "九头蛇战机"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 的九头蛇战机推进器方向。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回推进器方向（0 = 前进，1 = 垂直），若不在 九头蛇战机 中则返回-1。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehiclehydra", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没有在任何车辆中。", npcid);

        new thrusters = NPC_GetVehicleHydraThrusters(npcid);

        if (thrusters == 0)
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: 九头蛇战机推进器 前进 (0)", npcid);
        else
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d: 九头蛇战机推进器 垂直 (1)", npcid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅适用于 九头蛇战机（模型 520）
- 若 NPC 不在 九头蛇战机 中或不在车辆中则返回-1
- 方向 0 = 前进飞行模式（喷气机模式）
- 方向 1 = 垂直飞行模式（悬停模式）

## 相关函数

- [NPC_SetVehicleHydraThrusters](NPC_SetVehicleHydraThrusters): 设置推进器方向
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆
- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): 获取车辆生命值
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆

## 相关回调

_此函数不会触发任何特定的回调。_
