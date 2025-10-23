---
title: SetDeathDropAmount
sidebar_label: SetDeathDropAmount
description: 设置玩家死亡时掉落的金额。
tags: []
---

:::warning

该函数无效，请使用[CreatePickup](CreatePickup)

:::

## 描述

设置玩家死亡时掉落的金额。

| 参数名 | 描述             |
| ------ | ---------------- |
| amount | 要设置的金额数目 |

## 返回值

该函数不返回任何特定值

## 示例代码

```c
public OnGameModeInit()
{
    SetDeathDropAmount(5000);
    return 1;
}
```

## 注意事项

:::warning

该函数在当前 SA:MP 版本中无效！

:::

## 相关函数

- [CreatePickup](CreatePickup): 创建拾取物
- [GivePlayerMoney](GivePlayerMoney): 给予玩家金钱

## 相关回调

- [OnPlayerDeath](../callbacks/OnPlayerDeath): 当玩家死亡时调用
