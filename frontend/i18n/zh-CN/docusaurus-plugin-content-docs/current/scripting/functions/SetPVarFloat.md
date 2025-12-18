---
title: SetPVarFloat
sidebar_label: SetPVarFloat
description: 设置浮点型玩家变量的值。
tags: ["玩家变量"]
---

## 描述

设置浮点型玩家变量的值。

| 参数         | 说明                |
| ------------ | ------------------- |
| playerid     | 要设置变量的玩家 ID |
| const pvar[] | 变量名称            |
| Float:value  | 要存储的浮点数值    |

## 返回值

**true** - 函数执行成功。

**false** - 函数执行失败。玩家未连接或变量名为空/超过 40 字符。

## 示例

```c
SavePlayerPos(playerid)
{
    new Float:x, Float:y, Float:z;
    GetPlayerPos(playerid, x, y, z); // 获取玩家位置

    SetPVarFloat(playerid, "Xpos", x); // 将浮点数存入玩家变量
    SetPVarFloat(playerid, "Ypos", y); // 将浮点数存入玩家变量
    SetPVarFloat(playerid, "Zpos", z); // 将浮点数存入玩家变量
    return 1;
}
```

## 注意

:::tip

变量在[OnPlayerDisconnect](../callbacks/OnPlayerDisconnect)回调后才会重置，因此在断开连接时仍可访问。

:::

## 相关函数

- [SetPVarInt](SetPVarInt): 设置整型玩家变量
- [GetPVarInt](GetPVarInt): 获取整型玩家变量值
- [SetPVarString](SetPVarString): 设置字符串型玩家变量
- [GetPVarString](GetPVarString): 获取字符串型玩家变量值
- [GetPVarFloat](GetPVarFloat): 获取浮点型玩家变量值
- [DeletePVar](DeletePVar): 删除玩家变量
