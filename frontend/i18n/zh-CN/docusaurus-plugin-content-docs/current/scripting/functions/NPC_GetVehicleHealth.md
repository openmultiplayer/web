---
title: NPC_GetVehicleHealth
sidebar_label: NPC_GetVehicleHealth
description: 获取 NPC 车辆的生命值。
tags: ["npc", "车辆"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

获取 NPC 车辆的生命值。

| 参数  | 说明      |
| ----- | --------- |
| npcid | NPC 的 ID |

## 返回值

返回车辆生命值（浮点数），若 NPC 不在车辆中则返回 0.0。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkvehiclehealth", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        if (NPC_GetVehicle(npcid) == INVALID_VEHICLE_ID)
            return SendClientMessage(playerid, 0xFFFF00FF, "NPC %d 没有在任何车辆中。", npcid);

        new Float:health;
        NPC_GetVehicleHealth(npcid, health);

        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 车辆生命值: %.2f", npcid, health);
        return 1;
    }
    return 0;
}
```

## 注意事项

- 若 NPC 不在车辆中则返回 0.0
- 车辆生命值通常范围在 0.0 到 1000.0 之间
- 生命值低于 250.0 通常意味着车辆会起火

## 相关函数

- [NPC_SetVehicleHealth](NPC_SetVehicleHealth): 设置车辆生命值
- [NPC_GetVehicle](NPC_GetVehicle): 获取 NPC 当前车辆
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取车辆 ID
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆

## 相关回调

_此函数不会触发任何特定的回调。_
