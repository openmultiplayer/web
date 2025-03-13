---
title: SetPlayerWeather
sidebar_label: SetPlayerWeather
description: 设置玩家的天气。
tags: ["玩家"]
---

## 描述

设置玩家的天气。

| 名称     | 说明                                   |
| -------- | -------------------------------------- |
| playerid | 要设置天气的玩家 ID                    |
| weather  | 要设置的[天气](../resources/weatherid) |

## 返回值

本函数不返回任何特定值。

## 示例

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/storm", true))
    {
        SetPlayerWeather(playerid, 8);
        return 1;
    }
    return 0;
}
```

## 注意

:::tip

- 若已启用[TogglePlayerClock](TogglePlayerClock)，天气会逐渐变化而非立即切换
- 游戏实际仅有 21 个有效天气 ID（0-20），但系统不会进行范围校验

:::

## 相关函数

- [GetPlayerWeather](GetPlayerWeather): 获取玩家的天气
- [SetWeather](SetWeather): 设置全局天气
- [SetGravity](SetGravity): 设置全局重力

## 相关资源

- [天气 ID 列表](../resources/weatherid)
