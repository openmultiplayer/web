---
title: OnNPCDeath
sidebar_label: OnNPCDeath
description: 当 NPC 死亡时调用此回调。
tags: ["npc"]
---

<VersionWarnZH_Hans name='回调' version='omp v1.1.0.changemelater' />

## 描述

当 NPC 死亡时调用此回调。

| 参数     | 说明                                                        |
| -------- | ----------------------------------------------------------- |
| npcid    | 死亡的 NPC 的 ID                                            |
| killerid | 击杀 NPC 的玩家/NPC 的 ID（如果没有则为 INVALID_PLAYER_ID） |
| reason   | 死亡原因（武器 ID 或死亡原因）                              |

## 示例

```c
public OnNPCDeath(npcid, killerid, reason)
{
    if (killerid != INVALID_PLAYER_ID)
    {
        printf("NPC %d 被 %d 以原因 %d 击杀", npcid, killerid, reason);
    }
    else
    {
        printf("NPC %d 死亡", npcid);
    }

    // 5 秒后重生
    SetTimerEx("RespawnNPC", 5000, false, "i", npcid);

    return true;
}

forward RespawnNPC(npcid);
public RespawnNPC(npcid)
{
    NPC_Respawn(npcid);
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
