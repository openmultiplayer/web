---
title: NPC_SetVehicleHydraThrusters
sidebar_label: NPC_SetVehicleHydraThrusters
description: 设置 NPC 驾驶的九头蛇战机推进器方向。
tags: ["npc", "车辆", "九头蛇战机", “飞机”]
---

<VersionWarnZH_Hans version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 驾驶九头蛇战机时的推进器方向。

| 参数      | 说明                         |
| --------- | ---------------------------- |
| npcid     | NPC 的 ID                    |
| direction | 推进器方向（0=向前，1=向下） |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("Pilot");
    NPC_Spawn(npcid);

    new vehicleid = CreateVehicle(520, 1958.33, 1343.12, 50.0, 0.0, -1, -1, -1); // 九头蛇战机
    NPC_PutInVehicle(npcid, vehicleid, 0);

    // 设置推进器用于垂直起飞
    NPC_SetVehicleHydraThrusters(npcid, 1);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/vtol", true))
    {
        // 将 NPC 0 的 九头蛇战机 设置为 垂直起降 模式
        NPC_SetVehicleHydraThrusters(0, 1);
        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 九头蛇战机 处于 垂直起降 模式");
        return 1;
    }

    if (!strcmp(cmdtext, "/jet", true))
    {
        new npcs[MAX_NPCS];
        new count = NPC_GetAll(npcs);

        for (new i = 0; i < count; i++)
        {
            new vehicleid = NPC_GetVehicleID(npcs[i]);
            if (GetVehicleModel(vehicleid) == 520) // 九头蛇战机
            {
                NPC_SetVehicleHydraThrusters(npcs[i], 0); // 喷气模式
            }
        }

        SendClientMessage(playerid, 0x00FF00FF, "所有 NPC 九头蛇战机 处于喷气模式");
        return 1;
    }
    return 0;
}
```

## 注意事项

- 仅适用于 Hydra 飞机（车辆 ID 520）
- 方向 0 = 向前推进器（喷气模式）
- 方向 1 = 向下推进器（垂直起降 模式）
- 使用 NPC_GetVehicleHydraThrusters 检查当前方向

## 相关函数

- [NPC_GetVehicleHydraThrusters](NPC_GetVehicleHydraThrusters): 获取推进器方向
- [NPC_GetVehicleID](NPC_GetVehicleID): 获取 NPC 的车辆
- [NPC_PutInVehicle](NPC_PutInVehicle): 将 NPC 放入车辆
- [GetVehicleModel](GetVehicleModel): 获取车辆模型

## 相关回调

_此函数不会触发任何特定的回调。_
