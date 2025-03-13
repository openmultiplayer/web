---
title: SetGravity
sidebar_label: SetGravity
description: 为所有玩家设置重力值。
tags: []
---

## 描述

设置所有玩家的重力参数。

| 参数名        | 描述                                      |
| ------------- | ----------------------------------------- |
| Float:gravity | 要设置的重力值（有效范围：-50.0 至 50.0） |

## 返回值

该函数总是返回 1，即使重力值超出有效范围（低于-50.0 或高于+50.0）也会返回 1。

## 示例代码

```c
public OnGameModeInit()
{
    // 设置类似月球的重力
    SetGravity(0.001);

    return 1;
}
```

## 注意事项

:::warning

默认重力值为 0.008

:::

## 相关函数

- [GetGravity](GetGravity): 获取当前重力值
- [SetPlayerGravity](SetPlayerGravity): 设置单个玩家的重力值
- [SetWeather](SetWeather): 设置全局天气
- [SetWorldTime](SetWorldTime): 设置全局服务器时间
