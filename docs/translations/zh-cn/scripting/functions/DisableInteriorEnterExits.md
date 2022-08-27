---
title: DisableInteriorEnterExits
description: 禁用游戏中所有的内部空间入口和出口（门前的黄色箭头）。
tags: []
---

## 描述

禁用游戏中所有的内部空间入口和出口（门前的黄色箭头）。

## 案例

```c
public OnGameModeInit()
{
    DisableInteriorEnterExits();
    return 1;
}
```

## 要点

:::tip

这个函数只有在玩家连接之前使用才会有效（建议在 OnGameModeInit 中使用）。它不会删除目前已连接的玩家的标记。

:::

:::warning

如果在使用这个函数后改变了游戏模式，而新的游戏模式没有禁用标记，那么对于已经连接的玩家来说，标记将不会重新出现（但对于新连接的玩家来说会出现）。

:::

## 相关函数

- [AllowInteriorWeapons](AllowInteriorWeapons): 决定是否可以在内部空间使用武器。
