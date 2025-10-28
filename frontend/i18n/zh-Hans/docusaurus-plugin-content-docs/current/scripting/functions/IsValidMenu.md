---
title: IsValidMenu
sidebar_label: IsValidMenu
description: 检测菜单ID是否有效。
tags: ["菜单"]
---

## 描述

检测指定菜单 ID 是否有效。

| 参数        | 说明            |
| ----------- | --------------- |
| Menu:menuid | 要检测的菜单 ID |

## 返回值

**true** - 菜单有效

**false** - 菜单无效

## 相关函数

- [CreateMenu](CreateMenu): 创建新菜单
- [DestroyMenu](DestroyMenu): 销毁指定菜单
- [DisableMenu](DisableMenu): 禁用菜单
- [DisableMenuRow](DisableMenuRow): 全局禁用指定菜单行
- [AddMenuItem](AddMenuItem): 添加菜单选项
- [SetMenuColumnHeader](SetMenuColumnHeader): 设置菜单列标题
- [IsMenuDisabled](IsMenuDisabled): 检测菜单禁用状态
- [IsMenuRowDisabled](IsMenuRowDisabled): 检测菜单行禁用状态

## 相关回调

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): 玩家选择菜单项时触发
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): 玩家退出菜单时触发
