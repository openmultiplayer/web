---
title: DestroyMenu
sidebar_label: DestroyMenu
description: 销毁指定的菜单。
tags: ["菜单"]
---

## 描述

销毁指定的菜单。

| 参数        | 说明            |
| ----------- | --------------- |
| Menu:menuid | 要销毁的菜单 ID |

## 返回值

**true** 销毁成功返回 true，否则返回 false

## 示例

```c
new Menu:exampleMenu;
exampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);

// 后续操作...
DestroyMenu(exampleMenu);
```

## 相关函数

- [CreateMenu](CreateMenu): 创建菜单
- [SetMenuColumnHeader](SetMenuColumnHeader): 设置菜单列的标题
- [AddMenuItem](AddMenuItem): 向菜单添加项目

## 相关回调

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): 当玩家选择菜单中的某一行时触发
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): 当玩家退出菜单时触发
