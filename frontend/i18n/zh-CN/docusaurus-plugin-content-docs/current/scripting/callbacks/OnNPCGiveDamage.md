---
title: OnNPCGiveDamage
sidebar_label: OnNPCGiveDamage
description: 当 NPC 对玩家造成伤害时调用此回调。
tags: ["npc", "伤害"]
---

<VersionWarnZH_CN name='回调' version='omp v1.5.8.3079' />

## 描述

当 NPC 对玩家造成伤害时调用此回调。

| 参数            | 说明                                       |
| --------------- | ------------------------------------------ |
| npcid           | 造成伤害的 NPC 的 ID                       |
| damagedid       | 受到伤害的玩家的 ID                        |
| Float:damage    | 造成的伤害数量                             |
| WEAPON:weaponid | 用于造成伤害的武器 ID                      |
| bodypart        | 被击中的[身体部位](../resources/bodyparts) |

## 返回值

返回 `false` 阻止伤害生效，或返回 `true` 允许伤害。

## 示例

```c
public OnNPCGiveDamage(npcid, damagedid, Float:damage, WEAPON:weaponid, bodypart)
{
    // 仅通知追踪此 NPC 的玩家
    for (new playerid = 0; playerid < MAX_PLAYERS; playerid++)
    {
        if (!IsPlayerConnected(playerid))
            continue;

        if (PlayerNPC[playerid] == npcid)
        {
            SendClientMessage(playerid, 0xFF8800FF, "NPC %d 对玩家 %d 造成了 %.1f 点伤害（武器：%d，身体部位：%d）",
                npcid, damage, damagedid, _:weaponid, bodypart);
        }
    }
    return 1;
}
```

## 注意事项

- 此回调在伤害实际应用到玩家之前调用
- 返回 `false` 将阻止伤害生效
- `bodypart` 参数使用与 `OnPlayerTakeDamage` 相同的值

## 相关函数

以下函数可能有用，因为它们与此回调以某种方式相关。

- [NPC_AimAt](../functions/NPC_AimAt): 使 NPC 瞄准位置
- [NPC_AimAtPlayer](../functions/NPC_AimAtPlayer): 使 NPC 瞄准玩家
- [NPC_Shoot](../functions/NPC_Shoot): 使 NPC 射击
- [NPC_SetWeapon](../functions/NPC_SetWeapon): 设置 NPC 的武器

## 相关回调

- [OnNPCTakeDamage](OnNPCTakeDamage): 当 NPC 受到伤害时调用
- [OnPlayerTakeDamage](OnPlayerTakeDamage): 当玩家受到伤害时调用
- [OnPlayerGiveDamage](OnPlayerGiveDamage): 当玩家造成伤害时调用
