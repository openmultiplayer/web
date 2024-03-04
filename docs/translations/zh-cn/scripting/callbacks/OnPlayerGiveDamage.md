---
title: OnPlayerGiveDamage
description: 当一个玩家对另一个玩家造成伤害时，这个回调会被调用。
tags: ["player"]
---

## 描述

当一个玩家对另一个玩家造成伤害时，这个回调会被调用。

| 参数名    | 描述                                                                                                     |
| --------- | -------------------------------------------------------------------------------------------------------- |
| playerid  | 造成伤害的玩家的 ID。                                                                                    |
| damagedid | 受到伤害的玩家的 ID。                                                                                    |
| Float:amount    | 生命值/装甲伤害的损失(总和).                                                                             |
| WEAPON:weaponid  | 造成伤害的武器/原因的 ID                                                                                 |
| bodypart  | 被击中的[身体部位](../resources/bodyparts) |

## 返回值

1 - 回调不会在其他过滤脚本中被调用。

0 - 允许在其他过滤脚本中调用此回调。

它在过滤脚本中总是先被调用，所以在那里返回 1 会阻止其他过滤脚本看到它。

## 案例

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s 已造成 %.0f 点伤害给 %s, 武器: %s, 身体部分: %d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## 要点

:::tip

请记住，该函数在某些情况下可能是不准确的。

如果你想防止某些玩家互相伤害，请使用 SetPlayerTeam。

武器 ID 会从任何火源(如燃烧弹，18) 返回 37(火焰喷射器)；会从任何制造爆炸的武器(如 RPG，手榴弹) 返回 51 。

只有玩家 ID 能调用该回调。

数量总是武器所能造成的最大伤害，即使当剩余生命值低于最大伤害时也是如此。

所以当玩家拥有 100.0 的生命值并被伤害值为 46.2 的沙漠之鹰击中时，他需要 3 次射击才能杀死该玩家。

所有 3 次射击都将显示 46.2，即使当最后一次射击命中时，玩家只剩下 7.6 生命值。

:::
