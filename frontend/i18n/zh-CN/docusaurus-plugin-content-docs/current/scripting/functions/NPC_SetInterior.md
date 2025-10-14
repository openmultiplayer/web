---
title: NPC_SetInterior
sidebar_label: NPC_SetInterior
description: 设置 NPC 的室内位置。
tags: ["npc", "室内场景"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

设置 NPC 的室内位置。

| 名称       | 描述                |
| ---------- | ------------------- |
| npcid      | NPC 的 ID           |
| interiorid | 要设置的室内场景 ID |

## 返回值

如果操作成功则返回`true`，否则返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new npcid = NPC_Create("IndoorBot");
    NPC_Spawn(npcid);

    // 将 NPC 移动到武器店室内
    NPC_SetInterior(npcid, 1);
    NPC_SetPos(npcid, 285.8361, -39.0166, 1001.5156);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/bringnpc", true))
    {
        new playerInterior = GetPlayerInterior(playerid);
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // 将 NPC 0 移动到玩家位置
        NPC_SetInterior(0, playerInterior);
        NPC_SetPos(0, x + 2.0, y, z);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 0 已带到您的位置");

        return 1;
    }

    if (!strcmp(cmdtext, "/scatterinteriors", true))
    {

        new interiors[] = {
            0,   // 室外
            1,   // 武器店
            3,   // 约翰逊房子（CJ的房子）
            5,   // Madd Dogg的豪宅
            9,   // Cluckin' Bell
            10,  // Burger Shot
            12,  // 赌场（Redsands West）
            14,  // Didier Sachs服装店
            15,  // Binco服装店
            17   // 24/7商店
        };

        new interior = interiors[random(sizeof(interiors))];
        NPC_SetInterior(0, interior);

        new msg[64];
        format(msg, sizeof(msg), "已将 NPC 0 移动到室内场景%d", interior);
        SendClientMessage(playerid, 0x00FF00FF, msg);
        return 1;
    }
    return 0;
}

stock PlaceNPCInBuilding(npcid, building[])
{
    if (!NPC_IsValid(npcid))
        return 0;

    if (!strcmp(building, "ammunation", true))
    {
        NPC_SetInterior(npcid, 1);
        NPC_SetPos(npcid, 285.8361, -39.0166, 1001.5156);
    }
    else if (!strcmp(building, "cluckinbell", true))
    {
        NPC_SetInterior(npcid, 9);
        NPC_SetPos(npcid, 366.0002, -9.4338, 1001.8516);
    }
    else if (!strcmp(building, "burgershot", true))
    {
        NPC_SetInterior(npcid, 10);
        NPC_SetPos(npcid, 366.0248, -73.3478, 1001.5078);
    }
    else if (!strcmp(building, "pizzastack", true))
    {
        NPC_SetInterior(npcid, 5);
        NPC_SetPos(npcid, 372.5565, -131.3607, 1001.4922);
    }
    else
    {
        return 0; // 未知建筑
    }

    printf("已将 NPC %d 放置在 %s", npcid, building);
    return 1;
}

forward NPCInteriorTour(npcid);
public NPCInteriorTour(npcid)
{
    if (!NPC_IsValid(npcid))
        return;

    static tourStep[MAX_NPCS];

    new interiorLocations[][3] = {
        {0, 0, 0},      // 室外（将单独设置位置）
        {1, 285, -39},  // 武器店
        {9, 366, -9},   // Cluckin Bell
        {10, 366, -73}, // Burger Shot
        {5, 372, -131}  // Pizza Stack
    };

    new currentStep = tourStep[npcid] % sizeof(interiorLocations);
    new interior = interiorLocations[currentStep][0];

    NPC_SetInterior(npcid, interior);

    if (interior == 0)
    {
        // 室外位置
        NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);
    }
    else
    {
        // 室内位置
        NPC_SetPos(npcid,
            float(interiorLocations[currentStep][1]),
            float(interiorLocations[currentStep][2]),
            1001.5);
    }

    printf("NPC %d 游览：步骤 %d，室内场景%d", npcid, currentStep, interior);

    tourStep[npcid]++;

    // 安排下一个游览站点
    SetTimerEx("NPCInteriorTour", 15000, false, "i", npcid);
}

public OnPlayerInteriorChange(playerid, newinteriorid, oldinteriorid)
{
    // 示例：将玩家的保镖 NPC 移动到相同室内
    new npcs[MAX_NPCS];
    new count = NPC_GetAll(npcs);

    for (new i = 0; i < count; i++)
    {
        // 检查此 NPC 是否应该跟随玩家（实现您自己的逻辑）
        // 例如，检查 NPC 名称是否包含 "Bodyguard"

        new currentInterior = NPC_GetInterior(npcs[i]);
        if (currentInterior == oldinteriorid)
        {
            // 将 NPC 移动到玩家的新室内
            NPC_SetInterior(npcs[i], newinteriorid);

            // 在玩家附近放置 NPC
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);
            NPC_SetPos(npcs[i], x + 2.0, y, z);

            printf("已将保镖 NPC %d 移动到室内场景%d", npcs[i], newinteriorid);
        }
    }

    return 1;
}
```

## 注意事项

- 室内场景 0 是主世界（室外）
- NPC 必须与玩家在相同室内才能互动
- 不同室内有不同的环境和对象
- 确保为每个室内设置适当的坐标
- 与 NPC_SetVirtualWorld 配合使用以实现完整的世界分离

## 相关函数

- [NPC_GetInterior](NPC_GetInterior): 获取 NPC 室内场景
- [NPC_SetVirtualWorld](NPC_SetVirtualWorld): 设置 NPC 虚拟世界
- [NPC_GetVirtualWorld](NPC_GetVirtualWorld): 获取 NPC 虚拟世界
- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 出生时调用
