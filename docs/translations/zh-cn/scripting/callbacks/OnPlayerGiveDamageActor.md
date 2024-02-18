---
title: OnPlayerGiveDamageActor
description: 当一个玩家对一个演员造成伤害时，这个回调会被调用。
tags: ["player"]
---

<VersionWarnCN name='回调' version='SA-MP 0.3.7' />

## 描述

当一个玩家对一个演员造成伤害时，这个回调会被调用。

| 参数名          | 描述                                       |
| --------------- | ------------------------------------------ |
| playerid        | 造成伤害的玩家 ID                          |
| damaged_actorid | 受到伤害的演员 ID                          |
| Float:amount          | 演员 ID 所损失的生命值/装甲伤害            |
| WEAPON:weaponid        | 造成伤害的原因                             |
| bodypart        | 被击中的[身体部位](../resources/bodyparts) |

## 返回值

1 - 回调不会在其他过滤脚本中被调用。

0 -允许在其他过滤脚本中调用此回调。

它在过滤脚本中总是先被调用，所以在那里返回 1 会阻止其他过滤脚本看到它。

## 案例

```c
public OnPlayerGiveDamageActor(playerid, damaged_actorid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetWeaponName(weaponid, weaponname, sizeof (weaponname));

    format(string, sizeof(string), "%s 已经造成 %.0f 点伤害给演员 id %d, 武器: %s", attacker, amount, damaged_actorid, weaponname);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## 要点

:::tip

如果演员被设置为不可攻击(这是默认情况)，这个函数不会被调用。见 SetActorInvulnerable。

:::

## 相关函数

- [CreateActor](../functions/CreateActor): 创建一个演员(静态 NPC)。
- [SetActorInvulnerable](../functions/SetActorInvulnerable): 让演员无敌。
- [SetActorHealth](../functions/SetActorHealth): 设置演员的健康值。
- [GetActorHealth](../functions/GetActorHealth): 获取演员的健康值。
- [IsActorInvulnerable](../functions/IsActorInvulnerable): 检查演员是否无懈可击。
- [IsValidActor](../functions/IsValidActor): 检查演员 ID 是否有效。

## Related Callbacks

- [OnActorStreamOut](OnActorStreamOut): 当一个演员被一个玩家流出时调用。
- [OnPlayerStreamIn](OnPlayerStreamIn): 当一个玩家被另一个玩家流入时调用。
