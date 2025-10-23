---
title: GetPlayerArmour
sidebar_label: GetPlayerArmour
description: 获取玩家当前护甲值
tags: ["玩家"]
---

## 描述

此函数用于将玩家的护甲值存储到指定变量中。

| 名称          | 描述                               |
| ------------- | ---------------------------------- |
| playerid      | 需要获取护甲值的玩家 ID            |
| &Float:armour | 存储护甲值的浮点变量，通过引用传递 |

## 返回值

**1** - 成功获取

**0** - 获取失败（玩家未连接）

护甲值将被存储在指定的浮点变量中。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/myarmour", true))
    {
        new string[40];
        new Float:armour;
        GetPlayerArmour(playerid, armour);

        format(string, sizeof(string), "系统: 你的护甲值为 %.2f", armour);
        SendClientMessage(playerid, 0xFFFFFFAA, string);
        return 1;
    }
    return 0;
}
```

## 注意事项

:::warning

尽管服务端可以设置接近无限的护甲值，但客户端最多只能显示 255。超过的值会循环计算：256 变为 0，257 变为 1，依此类推。获取的护甲值会被取整：设置 50.15 将得到 50.0

:::

## 相关函数

- [SetPlayerArmour](SetPlayerArmour): 设置玩家护甲值
- [GetPlayerHealth](GetPlayerHealth): 获取玩家生命值
- [GetVehicleHealth](GetVehicleHealth): 获取车辆耐久值
