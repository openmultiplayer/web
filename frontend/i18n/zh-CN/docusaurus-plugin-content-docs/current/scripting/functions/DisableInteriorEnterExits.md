---
title: DisableInteriorEnterExits
sidebar_label: DisableInteriorEnterExits
description: 禁用游戏内所有室内出入口（门前的黄色箭头）。
tags: ["室内"]
---

## 描述

禁用游戏内所有室内出入口（门前的黄色箭头）。

## 示例

```c
public OnGameModeInit()
{
    DisableInteriorEnterExits();
    return 1;
}
```

## 注意事项

:::warning

此函数仅在玩家连接前调用有效（建议在 [OnGameModeInit](../callbacks/OnGameModeInit) 中使用）。已连接玩家的标记不会被移除。

若在调用此函数后切换游戏模式，且新游戏模式未禁用标记，已连接玩家不会重新显示标记（但新连接玩家会显示）。

:::

:::tip

你也可以通过 [config.json](../../server/config.json) 禁用室内入口标记：

```json
"use_entry_exit_markers": false,
```

:::

## 相关函数

- [AllowInteriorWeapons](AllowInteriorWeapons): 决定是否允许在室内使用武器
