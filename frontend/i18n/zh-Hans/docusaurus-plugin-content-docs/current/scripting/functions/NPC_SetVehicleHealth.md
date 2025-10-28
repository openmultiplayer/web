---
title: NPC_SetVehicleHealth
sidebar_label: NPC_SetVehicleHealth
description: 设置 NPC 车辆的生命值。
tags: ["npc", "车辆", "生命值"]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 车辆的生命值。

| 参数   | 说明                 |
| ------ | -------------------- |
| npcid  | NPC 的 ID            |
| health | 生命值（0.0-1000.0） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Driver");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(411, 1958.33, 1343.12, 15.36, 0.0, -1, -1, -1);
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 设置车辆为半血
    NPC_SetVehicleHealth(npcid, 500.0);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/repair", true))
    {
        // 修复 NPC 0 的车辆
        NPC_SetVehicleHealth(0, 1000.0); // 满血
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 的车辆已修复");
        return 1;
    }

    if (!strcmp(cmdtext, "/damagenpcs", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        for (new i = 0; i < count; i++)
        {
            if (NPC_GetVehicleID(npcs[i]) != INVALID_VEHICLE_ID) // NPC 在车辆中
            {
                new Float:damage = 200.0 + float(random(300)); // 随机伤害
                NPC_SetVehicleHealth(npcs[i], damage);
            }
        }

        SendClientMessage(playerid, 0xFF0000FF, "已损坏所有 NPC 车辆");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅在 NPC 在车辆中时有效
- 生命值范围从 0.0（已摧毁）到 1000.0（完美状态）
- 生命值达到 0 时车辆会爆炸
- 使用 NPC_GetVehicleHealth 检查当前生命值

## 相关函数

- [NPC_GetVehicleHealth](NPC_GetVehicleHealth): 获取车辆生命值
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [SetVehicleHealth](SetVehicleHealth): 直接设置车辆生命值

## 相关回调

_此函数不会触发任何特定的回调。_
