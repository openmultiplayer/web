---
title: OnNPCSpawn
sidebar_label: OnNPCSpawn
description: 当 NPC 生成时调用此回调。
tags: ["npc"]
---

## 描述

当 NPC 生成时调用此回调。

| 参数  | 说明             |
| ----- | ---------------- |
| npcid | 生成的 NPC 的 ID |

## 示例

```c
public OnNPCSpawn(npcid)
{
    printf("[NPC] NPC %d 已生成", npcid);

    // 通知追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            new Float:x, Float:y, Float:z;
            NPC_GetPos(npcid, x, y, z);
            SendClientMessage(playerid, 0x00FF00FF, "你追踪的 NPC %d 已在 (%.2f, %.2f, %.2f) 生成", npcid, x, y, z);
        }
    }
    return 1;
}
```

## 注意事项

- 当 `NPC_Spawn` 成功执行时调用此回调
- NPC 在游戏世界中变得可见和可交互
- 你可以在此回调中设置 NPC 的初始属性和行为
- NPC 的状态会自动设置为默认值（100 生命值，0 护甲，拳头武器）

## 相关函数

- [NPC_Spawn](../functions/NPC_Spawn): 在游戏世界中生成 NPC
- [NPC_Respawn](../functions/NPC_Respawn): 重生死亡的 NPC
- [NPC_SetHealth](../functions/NPC_SetHealth): 设置 NPC 的生命值
- [NPC_SetWeapon](../functions/NPC_SetWeapon): 设置 NPC 的武器

## 相关回调

- [OnNPCCreate](OnNPCCreate): 当 NPC 被创建时调用
- [OnNPCRespawn](OnNPCRespawn): 当 NPC 重生时调用
- [OnNPCDeath](OnNPCDeath): 当 NPC 死亡时调用
- [OnPlayerSpawn](OnPlayerSpawn): 当玩家生成时调用
