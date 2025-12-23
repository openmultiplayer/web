---
title: OnNPCDeath
sidebar_label: OnNPCDeath
description: 当 NPC 死亡时调用此回调。
tags: ["npc"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 死亡时调用此回调。

| 参数          | 说明                                                        |
| ------------- | ----------------------------------------------------------- |
| npcid         | 死亡的 NPC 的 ID                                            |
| killerid      | 击杀 NPC 的玩家/NPC 的 ID（如果没有则为 INVALID_PLAYER_ID） |
| Weapon:reason | 死亡原因（武器 ID 或死亡原因）                              |

## 示例

```c
public OnNPCDeath(npcid, killerid, WEAPON:reason)
{
    printf("[NPC] NPC %d 死亡（击杀者：%d，武器：%d）", npcid, killerid, _:reason);

    // 通知追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            if (killerid == INVALID_PLAYER_ID)
            {
                SendClientMessage(playerid, 0xFF0000FF, "你追踪的 NPC %d 已死亡（武器：%d）", npcid, _:reason);
            }
            else
            {
                SendClientMessage(playerid, 0xFF0000FF, "你追踪的 NPC %d 被玩家 %d 击杀（武器：%d）", npcid, killerid, _:reason);
            }
        }
    }
    return 1;
}
```

## 注意事项

- 如果 NPC 死亡不是由玩家造成的，`killerid` 参数将为 `INVALID_PLAYER_ID`
- `reason` 参数包含导致死亡的武器 ID（未知/其他原因为 255）

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_Kill](../functions/NPC_Kill): 击杀 NPC
- [NPC_Respawn](../functions/NPC_Respawn): 重生死亡的 NPC
- [NPC_GetHealth](../functions/NPC_GetHealth): 获取 NPC 的生命值
- [NPC_SetHealth](../functions/NPC_SetHealth): 设置 NPC 的生命值

## 相关回调

- [OnNPCSpawn](OnNPCSpawn): 当 NPC 生成时调用
- [OnNPCRespawn](OnNPCRespawn): 当 NPC 重生时调用
- [OnNPCTakeDamage](OnNPCTakeDamage): 当 NPC 受到伤害时调用
- [OnPlayerDeath](OnPlayerDeath): 当玩家死亡时调用
