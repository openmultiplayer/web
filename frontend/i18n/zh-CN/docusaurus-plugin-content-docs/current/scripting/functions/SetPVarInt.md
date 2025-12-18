---
title: SetPVarInt
sidebar_label: SetPVarInt
description: 设置整数型玩家变量。
tags: ["玩家变量"]
---

## 描述

设置一个整数类型的玩家变量。

| 参数         | 说明                       |
| ------------ | -------------------------- |
| playerid     | 需要设置变量的玩家 ID      |
| const pvar[] | 变量名称（需用双引号包裹） |
| value        | 要存储的整数值             |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败（玩家未连接或变量名为空/超过 40 字符）

## 示例代码

```c
// 将玩家当前金钱存储到名为"Money"的变量
SetPVarInt(playerid, "Money", GetPlayerMoney(playerid));

// 打印玩家存储的金钱数值
printf("当前金钱: %d", GetPVarInt(playerid, "Money"));
```

## 注意事项

:::tip

玩家变量在[OnPlayerDisconnect](../callbacks/OnPlayerDisconnect)回调触发前不会被重置，因此在此回调中仍可访问变量值。

:::

## 相关函数

- [GetPVarInt](GetPVarInt): 获取已存储的整数值
- [SetPVarString](SetPVarString): 设置字符串型玩家变量
- [GetPVarString](GetPVarString): 获取已存储的字符串值
- [SetPVarFloat](SetPVarFloat): 设置浮点型玩家变量
- [GetPVarFloat](GetPVarFloat): 获取已存储的浮点数值
- [DeletePVar](DeletePVar): 删除玩家变量
