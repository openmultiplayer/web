---
title: AllowInteriorWeapons
description: 切换是否允许在内部空间使用武器。
tags: []
---

## 描述

切换是否允许在内部空间使用武器。

| 参数名 | 说明                                                               |
| ------ | ------------------------------------------------------------------ |
| allow  | 1 表示在内部空间启用武器（默认为启用），0 表示在内部空间禁用武器。 |

## 返回值

该函数不返回任何特定的值。

## 案例

```c
public OnGameModeInit()
{
    // 这将允许在内部空间使用武器
    AllowInteriorWeapons(1);
    return 1;
}
```

## 要点

:::warning

这个函数在当前的 SA:MP 版本中不起作用!

:::

## 相关函数

- [SetPlayerInterior](SetPlayerInterior): 设置某个玩家的内部空间。
- [GetPlayerInterior](GetPlayerInterior): 获取某个玩家目前的内部空间。
- [OnPlayerInteriorChange](../callbacks/OnPlayerInteriorChange): 当某个玩家的内部空间改变时调用。
