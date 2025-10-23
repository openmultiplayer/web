---
title: OnScriptCash
sidebar_label: OnScriptCash
description: 当游戏内系统（如赌场）向玩家发放金钱时触发该回调函数。
tags: ["玩家"]
---

:::warning

该回调函数当前**不可用**

:::

## 描述

当游戏内系统（如赌场）向玩家发放或扣除金钱时触发该回调函数。

| 参数名   | 说明                                   |
| -------- | -------------------------------------- |
| playerid | 获得/失去游戏内金钱的玩家ID            |
| amount   | 金钱变动数值（正数为获得，负数为扣除） |
| source   | 金钱来源标识                           |

## 返回值

由于该功能当前不可用，返回值状态未知。

## 示例

```c
// 假设性示例：

public OnScriptCash(playerid, amount, source)
{
    if (source == SCRIPT_CASH_CASINO)
    {
        SendClientMessage(playerid, -1, "您从赌场赢得了$%d！", amount);
    }
    else if (source == SCRIPT_CASH_VENDING_MACHINE)
    {
        SendClientMessage(playerid, -1, "您花费$%d从自动售货机购买了可乐", amount);
    }
    return 1;
}
```

## 相关函数

以下函数可能与该回调存在关联：

- [GetPlayerMoney](../functions/GetPlayerMoney): 获取玩家当前持有金额
