---
title: OnPlayerGiveDamage
sidebar_label: OnPlayerGiveDamage
description: 当玩家对另一名玩家造成伤害时触发该回调函数。
tags: ["玩家"]
---

## 描述

当玩家对另一名玩家造成伤害时触发该回调函数。

| 参数名          | 说明                                       |
| --------------- | ------------------------------------------ |
| playerid        | 造成伤害的玩家ID                           |
| damagedid       | 受到伤害的玩家ID                           |
| Float:amount    | 损失的生命值/护甲值总和（单位：浮点数）    |
| WEAPON:weaponid | 造成伤害的武器类型                         |
| bodypart        | 被击中的[身体部位](../resources/bodyparts) |

## 返回值

1 - 阻止其他滤镜脚本接收此回调

0 - 允许将此回调传递给其他滤镜脚本

该回调始终在滤镜脚本中优先触发，返回1将阻止其他滤镜脚本处理

## 示例

```c
public OnPlayerGiveDamage(playerid, damagedid, Float:amount, WEAPON:weaponid, bodypart)
{
    new string[128], victim[MAX_PLAYER_NAME], attacker[MAX_PLAYER_NAME];
    new weaponname[24];
    GetPlayerName(playerid, attacker, sizeof (attacker));
    GetPlayerName(damagedid, victim, sizeof (victim));

    GetWeaponName(weaponid, weaponname, sizeof (weaponname));
    format(string, sizeof(string), "%s 对 %s 造成了 %.0f 点伤害，武器：%s，部位：%d", attacker, amount, victim, weaponname, bodypart);
    SendClientMessageToAll(0xFFFFFFFF, string);
    return 1;
}
```

## 注意事项

:::tip

- 请注意本函数在某些情况下可能不够精确
- 如需阻止特定玩家互相伤害，请使用[SetPlayerTeam](../functions/SetPlayerTeam)
- 火焰类武器（如燃烧瓶/18号武器）会返回37号武器ID（火焰喷射器）
- 爆炸类武器（如RPG、手雷）会返回51号武器ID
- 只有**playerid**（攻击者）能触发此回调
- 伤害值始终显示武器最大伤害值，即使剩余生命值不足。例如：
  - 玩家当前生命值100.0
  - 使用沙漠之鹰（单发伤害46.2）射击
  - 前两发显示伤害46.2，第三发剩余7.6生命时仍显示46.2

:::

## 相关回调

以下回调函数可能与本回调相关：

- [OnPlayerTakeDamage](OnPlayerTakeDamage): 当玩家受到伤害时触发
- [OnPlayerWeaponShot](OnPlayerWeaponShot): 当玩家开火时触发

## 相关资源

- [身体部位列表](../resources/bodyparts)
