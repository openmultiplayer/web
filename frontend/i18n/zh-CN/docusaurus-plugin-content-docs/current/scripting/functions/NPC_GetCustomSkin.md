---
title: NPC_GetCustomSkin
sidebar_label: NPC_GetCustomSkin
description: 获取NPC的自定义皮肤ID。
tags: ["npc", "皮肤", "模型"]
---

<VersionWarn version='omp v1.5.8.3079' />

## 描述

获取 NPC 的自定义皮肤 ID。

| 名称  | 描述        |
| ----- | ----------- |
| npcid | NPC 的 ID。 |

## 返回值

返回该 NPC 的自定义皮肤 ID。如果该 NPC 没有自定义皮肤或无效，则返回-1。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/checkcustomskin", true))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new customskinid = NPC_GetCustomSkin(npcid);

        if (customskinid == -1)
        {
            SendClientMessage(playerid, 0xFF0000FF, "NPC %d 未设置自定义皮肤", npcid);
        }
        else
        {
            SendClientMessage(playerid, 0x00FF00FF, "NPC %d 的自定义皮肤ID: %d", npcid, customskinid);
        }
        return 1;
    }
    return 0;
}
```

## 说明

:::warning

- 如果 NPC 未设置自定义皮肤或 NPC 无效，则返回-1。
- 自定义皮肤与常规皮肤不同，通常指的是添加到游戏中的自定义模型。
- 使用 [NPC_GetSkin](NPC_GetSkin) 来获取常规的皮肤/模型 ID。

:::

## 相关函数

- [NPC_SetSkin](NPC_SetSkin): 设置 NPC 的皮肤/模型。
- [NPC_GetSkin](NPC_GetSkin): 获取 NPC 当前的皮肤/模型 ID。
- [NPC_IsValid](NPC_IsValid): 检查 NPC 是否有效。

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): 当 NPC 生成时调用。
