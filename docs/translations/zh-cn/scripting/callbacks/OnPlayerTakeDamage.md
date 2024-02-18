---
title: OnPlayerTakeDamage
description: 当玩家受到伤害时，会调用该回调。
tags: ["player"]
---

<VersionWarnCN name='回调' version='SA-MP 0.3d' />

## 描述

当玩家受到伤害时，会调用该回调。

| 参数名   | 描述                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------- |
| playerid | 受伤的玩家的 ID。                                                                                   |
| issuerid | 造成伤害的玩家的 ID。 如果是自己造成的则为 INVALID_PLAYER_ID。                                      |
| Float:amount   | 玩家受到的伤害(生命值和护甲的总和)。                                                                |
| WEAPON:weaponid | 造成伤害的武器/原因的 ID                                                                            |
| bodypart | 被击中的[身体部位](../resources/bodyparts)。(注：此参数在 0.3z 中增加。如果使用较旧的版本，请省略!) |

## 返回值

1 - 回调不会在其他过滤脚本中被调用。

0 -允许在其他过滤脚本中调用此回调。

它在过滤脚本中总是先被调用，所以在那里返回 1 会阻止其他过滤脚本看到它。

## 案例

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // 如果不是自己造成的
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s 已造成 %.0f 点伤害给 %s, 武器: %s, 身体部位: %d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}

public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // 用狙击步枪一枪爆头
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## 要点

:::tip

武器 ID 会从任何火源(如燃烧弹，18) 返回 37(火焰喷射器)；会从任何制造爆炸的武器(如 RPG，手榴弹) 返回 51 。

只有玩家 ID 能调用该回调。

数量总是武器所能造成的最大伤害，即使当剩余生命值低于最大伤害时也是如此。

所以当玩家拥有 100.0 的生命值并被伤害值为 46.2 的沙漠之鹰击中时，他需要 3 次射击才能杀死该玩家。

所有 3 次射击都将显示 46.2，即使当最后一次射击命中时，玩家只剩下 7.6 生命值。

:::

:::warning

GetPlayerHealth 和 GetPlayerArmour 将在此回调之前返回玩家的旧数值。

在将 issuerid 用作数组索引之前，一定要检查它是否有效。

:::
