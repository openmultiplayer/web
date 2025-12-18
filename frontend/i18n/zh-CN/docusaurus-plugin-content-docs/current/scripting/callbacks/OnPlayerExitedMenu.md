---
title: OnPlayerExitedMenu
sidebar_label: OnPlayerExitedMenu
description: 当玩家退出菜单时触发此回调函数。
tags: ["玩家", "菜单"]
---

## 描述

当玩家退出菜单时触发此回调函数。

| 参数     | 说明             |
| -------- | ---------------- |
| playerid | 退出菜单的玩家ID |

## 返回值

此回调始终在游戏模式中优先触发

## 示例

```c
public OnPlayerExitedMenu(playerid)
{
    TogglePlayerControllable(playerid, true); // 当玩家退出菜单时解除冻结状态
    return 1;
}
```

## 相关回调

以下回调函数可能与此回调相关：

- [OnPlayerSelectedMenuRow](OnPlayerSelectedMenuRow): 当玩家选择菜单中的某行时触发

## 相关函数

以下函数可能与此回调函数相关：

- [CreateMenu](../functions/CreateMenu): 创建菜单
- [DestroyMenu](../functions/DestroyMenu): 销毁菜单
