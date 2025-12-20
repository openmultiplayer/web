---
title: SetWeather
sidebar_label: SetWeather
description: 为所有玩家设置世界天气。
tags: []
---

## 描述

为所有玩家设置全局天气效果。

| 参数      | 说明                                      |
| --------- | ----------------------------------------- |
| weatherid | 要设置的[天气 ID](../resources/weatherid) |

## 返回值

此函数不返回特定值。

## 示例代码

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/sandstorm", true)) // 检测沙尘暴指令
    {
        SetWeather(19); // 设置19号沙尘暴天气
        return 1;
    }
    return 1;
}
```

## 注意事项

:::tip

- 启用[TogglePlayerClock](TogglePlayerClock)后天气会渐变切换，而非立即生效
- 游戏仅支持 0-20 共 21 种天气 ID，但未做范围校验

:::

## 相关函数

- [GetWeather](GetWeather): 获取当前全局天气
- [SetPlayerWeather](SetPlayerWeather): 设置玩家独立天气
- [SetGravity](SetGravity): 设置全局重力参数

## 相关资源

- [天气 ID 对照表](../resources/weatherid)
