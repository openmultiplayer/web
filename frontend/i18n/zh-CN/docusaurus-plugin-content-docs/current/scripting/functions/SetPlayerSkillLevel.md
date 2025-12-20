---
title: SetPlayerSkillLevel
sidebar_label: SetPlayerSkillLevel
description: 设置玩家特定武器类型的技能等级。
tags: ["玩家"]
---

## 描述

设置玩家特定武器类型的技能等级。

| 参数              | 说明                                              |
| ----------------- | ------------------------------------------------- |
| playerid          | 要设置武器技能的玩家 ID                           |
| WEAPONSKILL:skill | 要设置的[武器技能类型](../resources/weaponskills) |
| level             | 技能等级值（0-999），超出范围的数值会自动取极值   |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnPlayerSpawn(playerid)
{
    // 使玩家使用单手持短管霰弹枪
    SetPlayerSkillLevel(playerid, WEAPONSKILL_SAWNOFF_SHOTGUN, 1);
    return 1;
}
```

## 重要说明

:::warning

skill 参数不是武器 ID，而是技能类型。[点击此处](../resources/weaponskills)查看技能类型列表。

:::

## 相关函数

- [GetPlayerSkillLevel](GetPlayerSkillLevel): 获取玩家武器技能等级
- [SetPlayerArmedWeapon](SetPlayerArmedWeapon): 设置玩家手持武器
- [GivePlayerWeapon](GivePlayerWeapon): 给予玩家武器

## 相关信息

- [武器技能系统](../resources/weaponskills#skill-levels): 用于设置玩家技能等级的武器技能列表
