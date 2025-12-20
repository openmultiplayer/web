---
title: NPC_Create
sidebar_label: NPC_Create
description: 创建新的 NPC。
tags: ["npc"]
---

<VersionWarnZH_CN version='omp v1.5.8.3079' />

## 描述

创建一个新的 NPC。

| 参数         | 说明                         |
| ------------ | ---------------------------- |
| const name[] | NPC 的名称（最多 24 个字符） |

## 返回值

返回创建的 NPC 的 ID，失败时返回 `INVALID_NPC_ID`。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/createnpc", true))
    {
        new name[24];
        format(name, sizeof name, "Bot_%d", g_NPCCount++);

        new npcid = NPC_Create(name);
        if (NPC_IsValid(npcid))
        {
            new Float:x, Float:y, Float:z;
            GetPlayerPos(playerid, x, y, z);

            NPC_Spawn(npcid);
            NPC_SetPos(npcid, x + 3.0, y, z);
            NPC_SetWeapon(npcid, WEAPON_M4);
            NPC_SetAmmo(npcid, 500);

            PlayerNPC[playerid] = npcid;
            SendClientMessage(playerid, 0x00FF00FF, "NPC %s（ID %d）已在你附近生成！", name, npcid);
        }
        else
        {
            SendClientMessage(playerid, 0xFF0000FF, "创建NPC失败！");
        }
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

- NPC 不会自动生成。使用 [NPC_Spawn](NPC_Spawn) 来生成它。
- NPC 名称必须遵循与玩家名称相同的规则。
- 最大名称长度为 24 个字符。

:::

## 相关函数

- [NPC_Destroy](NPC_Destroy): 销毁 NPC
- [NPC_Spawn](NPC_Spawn): 生成 NPC
- [NPC_IsValid](NPC_IsValid): 检查 NPC ID 是否有效

## 相关回调

- [OnNPCCreate](../callbacks/OnNPCCreate): NPC 创建时调用
