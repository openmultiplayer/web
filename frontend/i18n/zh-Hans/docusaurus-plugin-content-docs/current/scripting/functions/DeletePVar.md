---
title: DeletePVar
sidebar_label: DeletePVar
description: 删除先前设置的玩家变量。
tags: ["玩家变量", "pvar"]
---

## 描述

删除先前设置的玩家变量。

| 参数名       | 说明                   |
| ------------ | ---------------------- |
| playerid     | 要删除变量的玩家 ID。  |
| const pvar[] | 要删除的玩家变量名称。 |

## 返回值

**true** - 函数执行成功

**false** - 函数执行失败。可能原因：玩家未连接或不存在指定名称的变量。

## 示例

```c
SetPVarInt(playerid, "SomeVarName", 69);

// 后续操作，当不再需要该变量时...

DeletePVar(playerid, "SomeVarName");
```

## 注意事项

:::tip

变量被删除后，尝试获取其值将返回：整型返回 0，浮点数返回 0.0，字符串返回空值。

:::

## 相关函数

- [SetPVarInt](SetPVarInt): 为玩家变量设置整型值
- [GetPVarInt](GetPVarInt): 从玩家变量获取整型值
- [SetPVarString](SetPVarString): 为玩家变量设置字符串值
- [GetPVarString](GetPVarString): 从玩家变量获取字符串值
- [SetPVarFloat](SetPVarFloat): 为玩家变量设置浮点数值
- [GetPVarFloat](GetPVarFloat): 从玩家变量获取浮点数值
