---
title: GetPlayerMenu
sidebar_label: GetPlayerMenu
description: 获取玩家当前正在查看的菜单ID（由ShowMenuForPlayer显示）
tags: ["玩家", "菜单"]
---

## 描述

获取玩家当前正在查看的菜单 ID（由 ShowMenuForPlayer 显示）

| 参数名   | 说明                      |
| -------- | ------------------------- |
| playerid | 需要获取当前菜单的玩家 ID |

## 返回值

玩家当前显示的菜单 ID，若未显示菜单则返回`INVALID_MENU`（255）

返回值带有**Menu:**标签

## 示例代码

```c
new Menu:currentMenu = GetPlayerMenu(playerid); // 将玩家当前菜单存入'currentMenu'变量
```

## 注意事项

:::tip

当没有显示菜单时，会返回上一次显示的菜单 ID

:::

## 相关函数

- [ShowMenuForPlayer](ShowMenuForPlayer): 为玩家显示菜单
- [HideMenuForPlayer](HideMenuForPlayer): 隐藏玩家的菜单
- [CreateMenu](CreateMenu): 创建新菜单
- [DestroyMenu](DestroyMenu): 销毁菜单
- [AddMenuItem](AddMenuItem): 添加菜单项

## 相关回调

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): 当玩家选择菜单项时触发
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): 当玩家退出菜单时触发
