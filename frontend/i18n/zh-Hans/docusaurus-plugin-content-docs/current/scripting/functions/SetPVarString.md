---
title: SetPVarString
sidebar_label: SetPVarString
description: 将字符串保存到玩家变量中。
tags: ["玩家变量", "pvar"]
---

## 描述

将字符串保存到玩家变量中。

| 参数名           | 描述                   |
| ---------------- | ---------------------- |
| playerid         | 要设置变量的玩家 ID    |
| const pvar[]     | 玩家变量名称           |
| const value[]    | 要保存的字符串值       |
| OPEN_MP_TAGS:... | 不定数量的任意标签参数 |

## 返回值

本函数没有返回值。

## 示例

```c
public OnPlayerConnect(playerid)
{
    new
        hours,
        minutes,
        seconds,
        string[46];

    gettime(hours, minutes, seconds); // 获取当前时间
    format(string, sizeof(string), "连接时间 %02d:%02d:%02d", hours, minutes, seconds); // 创建包含连接时间的字符串
    SetPVarString(playerid, "timeconnected", string); // 将字符串存入玩家变量

    // 专业建议：open.mp中无需使用format
    SetPVarString(playerid, "timeconnected", "连接时间 %02d:%02d:%02d", hours, minutes, seconds);
    return 1;
}
```

## 重要说明

:::tip

玩家变量在[OnPlayerDisconnect](../callbacks/OnPlayerDisconnect)回调完成后才会重置，因此断开连接时仍可访问变量值。

:::

## 相关函数

- [SetPVarInt](SetPVarInt): 设置整型玩家变量
- [GetPVarInt](GetPVarInt): 获取整型玩家变量值
- [GetPVarString](GetPVarString): 获取字符串玩家变量值
- [SetPVarFloat](SetPVarFloat): 设置浮点型玩家变量
- [GetPVarFloat](GetPVarFloat): 获取浮点型玩家变量值
- [DeletePVar](DeletePVar): 删除玩家变量
