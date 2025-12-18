---
title: EnableZoneNames
sidebar_label: EnableZoneNames
description: 启用或禁用进入区域时屏幕右下角显示的区域名称（例如"Vinewood"或"Doherty"）。
tags: []
---

## 描述

此函数用于控制玩家进入新区域时是否在屏幕右下角显示区域名称（例如"Vinewood"或"Doherty"）。此设置属于游戏模式选项，应在 [OnGameModeInit](../callbacks/OnGameModeInit) 回调中设置。

| 参数        | 说明                                   |
| ----------- | -------------------------------------- |
| bool:enable | true 启用区域名称显示 / false 禁用显示 |

## 返回值

此函数不返回特定值。

## 示例

```c
public OnGameModeInit()
{
    EnableZoneNames(true); // 启用区域名称显示
    return 1;
}
```

## 注意事项

:::warning

此函数已在 SA-MP 0.3 版本移除（因其导致的崩溃问题）

:::

:::tip

可通过 [config.json](../../server/config.json) 配置文件全局控制区域名称显示：

```json
"use_zone_names": true,
```

:::
