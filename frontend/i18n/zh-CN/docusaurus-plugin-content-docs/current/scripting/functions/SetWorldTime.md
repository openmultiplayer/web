---
title: SetWorldTime
sidebar_label: SetWorldTime
description: 为所有玩家设置世界时间至指定小时。
tags: ["世界时间"]
---

## 描述

为所有玩家设置世界时间至指定小时。

| 参数 | 说明                   |
| ---- | ---------------------- |
| hour | 要设置的小时值（0-23） |

## 返回值

此函数不返回特定值。

## 示例

```c
// 设置时间为12点（正午）
SetWorldTime(12);
```

## 注意

:::tip

此函数仅对未启用动态时钟的玩家生效（参见[TogglePlayerClock](TogglePlayerClock)）。

:::

:::tip

如需设置分钟或单独设置玩家时间，请参阅[SetPlayerTime](SetPlayerTime)。

:::

## 相关函数

- [GetWorldTime](GetWorldTime): 获取当前世界时间
- [SetPlayerTime](SetPlayerTime): 设置玩家时间
- [SetWeather](SetWeather): 设置全局天气
- [SetGravity](SetGravity): 设置全局重力
