---
title: SetPlayerArmour
sidebar_label: SetPlayerArmour
description: 设置玩家的护甲等级。
tags: ["玩家"]
---

## 描述

设置玩家的护甲等级。

| 参数         | 说明                                                                       |
| ------------ | -------------------------------------------------------------------------- |
| playerid     | 要设置护甲的玩家 ID                                                        |
| Float:armour | 设置的护甲值（浮点数百分比）。超过 100 的值有效，但不会在 HUD 护甲条中显示 |

## 返回值

**1** - 函数执行成功

**0** - 函数执行失败（指定的玩家不存在）

## 示例代码

```c
public OnPlayerSpawn(playerid)
{
    // 玩家重生时给予满护甲（100%）
    SetPlayerArmour(playerid, 100.0);
    return 1;
}
```

## 注意事项

:::tip

此函数使用英式拼写"护甲值"而非美式"armor"，与 SA-MP 其他函数存在拼写差异

:::

:::warning

护甲值会被四舍五入为整数：设置 50.15 实际获得 50.0

:::

## 相关函数

- [GetPlayerArmour](GetPlayerArmour): 获取玩家护甲值
- [SetPlayerHealth](SetPlayerHealth): 设置玩家生命值
- [GetPlayerHealth](GetPlayerHealth): 获取玩家生命值
