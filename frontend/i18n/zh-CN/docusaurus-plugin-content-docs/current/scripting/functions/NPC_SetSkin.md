---
title: NPC_SetSkin
sidebar_label: NPC_SetSkin
description: 设置 NPC 的皮肤模型，改变其外观。
tags: ["npc", "皮肤", "模型"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

设置 NPC 的皮肤模型以改变其外观。

| 参数  | 说明                |
| ----- | ------------------- |
| npcid | NPC 的 ID           |
| model | 要设置的皮肤模型 ID |

## 返回值

如果皮肤设置成功则返回`true`，否则返回`false`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/setskin ", true, 9))
    {
        new npcid = PlayerNPC[playerid];
        if (npcid == INVALID_NPC_ID)
            return SendClientMessage(playerid, 0xFF0000FF, "你没有在调试NPC。");

        if (!NPC_IsValid(npcid))
            return SendClientMessage(playerid, 0xFF0000FF, "无效的NPC。");

        new skinid = strval(cmdtext[9]);
        if (skinid < 0 || skinid > 311)
            return SendClientMessage(playerid, 0xFF0000FF, "皮肤ID必须在0到311之间。");

        NPC_SetSkin(npcid, skinid);
        SendClientMessage(playerid, 0x00FF00FF, "NPC %d 皮肤设置为 %d", npcid, skinid);

        return 1;
    }
    return 0;
}
```

## 注意事项

- 无效的皮肤 ID 可能会导致视觉故障

## 相关函数

- [NPC_GetSkin](NPC_GetSkin): 获取 NPC 的当前皮肤
- [NPC_Spawn](NPC_Spawn): 使用默认皮肤生成 NPC
- [NPC_Create](NPC_Create): 创建 NPC

## 相关回调

- [OnNPCSpawn](../callbacks/OnNPCSpawn): NPC 出生时调用
