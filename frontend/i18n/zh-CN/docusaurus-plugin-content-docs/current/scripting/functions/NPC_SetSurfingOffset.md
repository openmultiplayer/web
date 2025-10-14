---
title: NPC_SetSurfingOffset
sidebar_label: NPC_SetSurfingOffset
description: 设置 NPC 的冲浪偏移。
tags: ["npc", "冲浪"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的冲浪偏移。

| 名称  | 描述      |
| ----- | --------- |
| npcid | NPC 的 ID |
| x     | X 偏移    |
| y     | Y 偏移    |
| z     | Z 偏移    |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
new g_CarrierVehicle = INVALID_VEHICLE_ID;

public OnGameModeInit()
{
    // 创建运输车辆
    g_CarrierVehicle = CreateVehicle(403, 1958.33, 1343.12, 15.36, 0.0, -1, -1, 300); // Linerunner

    // 创建乘客 NPC
    new npcid = NPC_Create("Guard");
    NPC_Spawn(npcid);

    // 设置 NPC 在车顶冲浪
    NPC_SetSurfingVehicle(npcid, g_CarrierVehicle);
    NPC_SetSurfingOffset(npcid, 0.0, 0.0, 2.5); // 车辆上方 2.5 单位

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/ridetop", true))
    {
        if (g_CarrierVehicle != INVALID_VEHICLE_ID)
        {
            NPC_SetSurfingVehicle(0, g_CarrierVehicle);
            NPC_SetSurfingOffset(0, 0.0, 0.0, 2.5); // 车顶

            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已定位到车顶");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/ridefront", true))
    {
        if (g_CarrierVehicle != INVALID_VEHICLE_ID)
        {
            NPC_SetSurfingVehicle(0, g_CarrierVehicle);
            NPC_SetSurfingOffset(0, 0.0, 3.0, 1.0); // 车辆前方

            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已定位到车前");
        }
        return 1;
    }

    if (!strcmp(cmdtext, "/rideside", true))
    {
        if (g_CarrierVehicle != INVALID_VEHICLE_ID)
        {
            NPC_SetSurfingVehicle(0, g_CarrierVehicle);
            NPC_SetSurfingOffset(0, 2.0, 0.0, 1.0); // 车辆侧面

            SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已定位到车侧");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

- 冲浪偏移决定了 NPC 相对于其冲浪的对象/车辆的相对位置
- 正 Z 值将 NPC 向上移动，负值向下移动
- 正 Y 值通常将 NPC 相对于车辆方向向前移动
- 正 X 值将 NPC 相对于车辆方向向右移动
- 这对于微调冲浪时 NPC 的位置很有用
- 非常适合创建车辆护送或乘客

## 相关函数

- [NPC_GetSurfingOffset](NPC_GetSurfingOffset): 获取 NPC 的冲浪偏移
- [NPC_SetSurfingObject](NPC_SetSurfingObject): 设置 NPC 正在冲浪的对象
- [NPC_SetSurfingVehicle](NPC_SetSurfingVehicle): 设置 NPC 正在冲浪的车辆
- [NPC_SetSurfingPlayerObject](NPC_SetSurfingPlayerObject): 设置 NPC 正在冲浪的玩家对象
- [NPC_ResetSurfingData](NPC_ResetSurfingData): 重置 NPC 的所有冲浪数据

## 相关回调

_此函数不会触发任何特定的回调。_
