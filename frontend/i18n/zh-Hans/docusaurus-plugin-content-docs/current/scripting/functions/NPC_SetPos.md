---
title: NPC_SetPos
sidebar_label: NPC_SetPos
description: 瞬间设置 NPC 的位置，无需移动动画。
tags: ["npc", "位置"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

瞬间设置 NPC 的位置，无需移动动画。

| 名称    | 描述        |
| ------- | ----------- |
| npcid   | NPC 的 ID。 |
| Float:x | X 坐标。    |
| Float:y | Y 坐标。    |
| Float:z | Z 坐标。    |

## 返回值

成功时返回`true`，失败时返回`false`。

## 示例

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("TeleportBot");
    NPC_Spawn(npcid);

    // 瞬间设置 NPC 位置
    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/teleportnpc", true))
    {
        new Float:x, Float:y, Float:z;
        GetPlayerPos(playerid, x, y, z);

        // 将 NPC 0 传送到玩家位置
        NPC_SetPos(0, x + 2.0, y, z);

        SendClientMessage(playerid, 0x00FF00FF, "NPC 已传送到您身边！");
        return 1;
    }

    if (!strcmp(cmdtext, "/npcgotower", true))
    {
        // 将 NPC 移动到特定地标
        NPC_SetPos(0, 1544.6, -1353.8, 329.5); // Big Smoke的房子

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 已移动到 Big Smoke 的房子");
        return 1;
    }
    return 0;
}

CreateNPCFormation(Float:leaderX, Float:leaderY, Float:leaderZ, const Float:formation[][2], formationSize = sizeof(formation))
{
    new
        name[MAX_PLAYER_NAME + 1],
        npcid,
        Float:offsetX,
        Float:offsetY;

    for (new i = 0; i < formationSize; i++)
    {
        format(name, sizeof(name), "Unit_%d", i);

        npcid = NPC_Create(name);
        NPC_Spawn(npcid);

        // 根据编队数组定位
        offsetX = formation[i][0];
        offsetY = formation[i][1];

        NPC_SetPos(npcid, leaderX + offsetX, leaderY + offsetY, leaderZ);
    }
}

forward ResetNPCPositions();
public ResetNPCPositions()
{
    // 将 NPC 0 重置到特定位置
    NPC_SetPos(0, 1958.33, 1343.12, 15.36);
    printf("NPC 0 位置已重置");
}
```

## 注意事项

:::warning

- 此函数瞬间传送 NPC，没有动画
- 设置位置时会停止任何当前的移动
- 如果希望 NPC 走向某个位置，请使用 `NPC_Move`
- 位置坐标以圣安地列斯世界单位为准
- 确保 Z 坐标高于地面水平

:::

## 相关函数

- [NPC_GetPos](NPC_GetPos): 获取 NPC 位置。
- [NPC_Move](NPC_Move): 带动画移动 NPC 到位置。
- [NPC_SetRot](NPC_SetRot): 设置 NPC 旋转。
- [NPC_SetFacingAngle](NPC_SetFacingAngle): 设置 NPC 面向方向。

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 出生时调用。
