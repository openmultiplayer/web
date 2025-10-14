---
title: NPC_GetPos
sidebar_label: NPC_GetPos
description: 获取NPC的位置。
tags: ["npc", "位置"]
---

<VersionWarnZH_CN version='omp v1.1.0.changemelater' />

## 描述

获取 NPC 的位置。

| 名称     | 描述                                  |
| -------- | ------------------------------------- |
| npcid    | NPC 的 ID。                           |
| &Float:x | 用于存储 X 坐标的变量，通过引用传递。 |
| &Float:y | 用于存储 Y 坐标的变量，通过引用传递。 |
| &Float:z | 用于存储 Z 坐标的变量，通过引用传递。 |

## 返回值

若成功获取位置则返回 `true`，否则返回 `false`。

## 示例

```c
public OnGameModeInit()
{
    new const npcid = NPC_Create("PositionBot");
    NPC_Spawn(npcid);

    NPC_SetPos(npcid, 1958.33, 1343.12, 15.36);

    new Float:x, Float:y, Float:z;
    NPC_GetPos(npcid, x, y, z);
    printf("NPC %d位置: %.2f, %.2f, %.2f", npcid, x, y, z);

    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/npcpos", true))
    {
        new Float:x, Float:y, Float:z;
        NPC_GetPos(0, x, y, z);

        SendClientMessage(playerid, 0xFFFFFFFF, "NPC 0: %.1f, %.1f, %.1f", x, y, z);
        return 1;
    }

    if (!strcmp(cmdtext, "/gotonpc", true))
    {
        new Float:x, Float:y, Float:z;
        NPC_GetPos(0, x, y, z); // 前往NPC 0
        SetPlayerPos(playerid, x + 2.0, y, z);

        SendClientMessage(playerid, 0x00FF00FF, "已传送到NPC 0");
        return 1;
    }
    return 0;
}

forward CheckNPCDistances();
public CheckNPCDistances()
{
    new Float:x, Float:y, Float:z;
    NPC_GetPos(0, x, y, z);
    printf("NPC 0位置: %.2f, %.2f, %.2f", x, y, z);
}
```

## 注意事项

:::warning

- 所有坐标参数都通过引用传递且会被修改。
- 使用此函数追踪 NPC 移动或计算距离。
- 坐标以圣安地列斯世界单位为准。
- 位置更新反映 NPC 的当前位置。

:::

## 相关函数

- [NPC_SetPos](NPC_SetPos): 设置 NPC 位置。
- [NPC_GetRot](NPC_GetRot): 获取 NPC 旋转。
- [NPC_SetRot](NPC_SetRot): 设置 NPC 旋转。
- [NPC_GetFacingAngle](NPC_GetFacingAngle): 获取朝向角度。

## 相关回调

- [../callbacks/OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 生成时调用。
- [../callbacks/OnNPCFinishMove](../callbacks/OnNPCFinishMove): NPC 完成移动时调用。
