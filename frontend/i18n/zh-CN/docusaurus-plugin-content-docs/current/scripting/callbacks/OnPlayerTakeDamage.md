---
title: OnPlayerTakeDamage
sidebar_label: OnPlayerTakeDamage
description: 当玩家受到伤害时触发此回调函数。
tags: ["玩家"]
---

## 描述

当玩家受到伤害时触发此回调函数。

| 参数            | 说明                                                |
| --------------- | --------------------------------------------------- |
| playerid        | 受到伤害的玩家ID                                    |
| issuerid        | 造成伤害的玩家ID（若为自伤则返回INVALID_PLAYER_ID） |
| Float:amount    | 玩家承受的伤害值（生命值与护甲值合计）              |
| WEAPON:weaponid | 造成伤害的武器ID/原因                               |
| bodypart        | 受击的[身体部位](../resources/bodyparts)            |

## 返回值

1 - 阻止其他滤镜脚本接收此回调。

0 - 允许此回调传递给其他滤镜脚本。

此回调始终在滤镜脚本中优先触发，返回1将阻止其他滤镜脚本处理该事件。

## 示例

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID) // 若非自伤
    {
        new
            infoString[128],
            weaponName[24],
            victimName[MAX_PLAYER_NAME],
            attackerName[MAX_PLAYER_NAME];

        GetPlayerName(playerid, victimName, sizeof (victimName));
        GetPlayerName(issuerid, attackerName, sizeof (attackerName));

        GetWeaponName(weaponid, weaponName, sizeof (weaponName));

        format(infoString, sizeof(infoString), "%s 对 %s 造成了 %.0f 点伤害，武器：%s，部位：%d", attackerName, amount, victimName, weaponName, bodypart);
        SendClientMessageToAll(-1, infoString);
    }
    return 1;
}
```

<br />

```c
public OnPlayerTakeDamage(playerid, issuerid, Float:amount, WEAPON:weaponid, bodypart)
{
    if (issuerid != INVALID_PLAYER_ID && weaponid == 34 && bodypart == 9)
    {
        // 使用狙击步枪爆头一击必杀
        SetPlayerHealth(playerid, 0.0);
    }
    return 1;
}
```

## 注意事项

:::tip

- 火焰类武器（如燃烧瓶，ID18）的weaponid将始终返回37（火焰喷射器）
- 爆炸类武器（如RPG，手雷）的weaponid将始终返回51
- 只有**playerid**参数对应的玩家会触发此回调
- 伤害值始终显示武器最大伤害值，即使实际剩余生命值不足。例如：玩家有100点生命值时，使用伤害值46.2的沙漠之鹰需要3枪致死，所有3次伤害都会显示46.2点

:::

:::warning

- [GetPlayerHealth](../functions/GetPlayerHealth) 和 [GetPlayerArmour](../functions/GetPlayerArmour) 将返回玩家受伤前的数值
- 使用issuerid作为数组索引前请务必验证其有效性

:::

## 相关回调

以下回调可能与此回调存在关联：

- [OnPlayerGiveDamage](OnPlayerGiveDamage): 当玩家造成伤害时触发
- [OnPlayerWeaponShot](OnPlayerWeaponShot): 当玩家开火时触发

## 相关资源

- [身体部位](../resources/bodyparts)
