---
title: OnNPCTakeDamage
sidebar_label: OnNPCTakeDamage
description: 当 NPC 受到伤害时调用此回调。
tags: ["npc", "伤害"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 受到来自玩家或其他 NPC 的伤害时调用此回调。

| 参数     | 说明                                       |
| -------- | ------------------------------------------ |
| npcid    | 受到伤害的 NPC 的 ID                       |
| issuerid | 造成伤害的玩家/NPC 的 ID                   |
| damage   | 受到的伤害数量                             |
| weaponid | 用于造成伤害的武器 ID                      |
| bodypart | 被击中的[身体部位](../resources/bodyparts) |

## 返回值

返回 `false` 阻止伤害生效，或返回 `true` 允许伤害。

## 示例

```c
public OnNPCTakeDamage(npcid, issuerid, Float:damage, WEAPON:weaponid, bodypart)
{
    // 仅通知追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            if (issuerid == INVALID_PLAYER_ID)
            {
                SendClientMessage(playerid, 0xFF8800FF, "NPC %d 受到 %.1f 点伤害（武器：%d，身体部位：%d）",
                    npcid, damage, _:weaponid, bodypart);
            }
            else
            {
                SendClientMessage(playerid, 0xFF8800FF, "NPC %d 受到玩家 %d 造成的 %.1f 点伤害（武器：%d，身体部位：%d）",
                    npcid, damage, issuerid, _:weaponid, bodypart);
            }
        }
    }
    return 1;
}
```

## 注意事项

- 此回调在伤害实际应用到 NPC 之前调用
- 返回 `false` 将阻止伤害生效
- 如果伤害不是由玩家造成的，`issuerid` 参数将为 `INVALID_PLAYER_ID`
- 身体部位使用与 `OnPlayerTakeDamage` 相同的常量

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_GetHealth](../functions/NPC_GetHealth): 获取 NPC 的当前生命值
- [NPC_SetHealth](../functions/NPC_SetHealth): 设置 NPC 的生命值
- [NPC_GetArmour](../functions/NPC_GetArmour): 获取 NPC 的护甲
- [NPC_SetArmour](../functions/NPC_SetArmour): 设置 NPC 的护甲

## 相关回调

- [OnNPCGiveDamage](OnNPCGiveDamage): 当 NPC 对玩家造成伤害时调用
- [OnNPCDeath](OnNPCDeath): 当 NPC 死亡时调用
- [OnPlayerTakeDamage](OnPlayerTakeDamage): 当玩家受到伤害时调用
