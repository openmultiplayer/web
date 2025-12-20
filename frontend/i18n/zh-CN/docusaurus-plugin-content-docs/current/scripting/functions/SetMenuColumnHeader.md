---
title: SetMenuColumnHeader
sidebar_label: SetMenuColumnHeader
description: 设置菜单列的标题。
tags: ["菜单"]
---

## 描述

设置指定菜单列的标题文本。

| 参数             | 说明                               |
| ---------------- | ---------------------------------- |
| Menu:menuid      | 要修改的菜单 ID                    |
| column           | 要设置的列编号（0 或 1）           |
| const text[]     | 列标题文本                         |
| OPEN_MP_TAGS:... | 可变参数（支持多种标签类型的参数） |

## 返回值

此函数不返回特定值

## 示例代码

```c
new Menu:gTestMenu;

// 这个菜单有两列
gTestMenu = CreateMenu("菜单主标题", 2, 200.0, 100.0, 150.0, 150.0);
SetMenuColumnHeader(gTestMenu, 0, "第一列");
SetMenuColumnHeader(gTestMenu, 1, "第二列");

// 添加菜单项
AddMenuItem(gTestMenu, 0, "第一列项1");
AddMenuItem(gTestMenu, 1, "第二列项1");
```

## 注意事项

:::tip

传入无效菜单 ID 会导致崩溃

:::

:::warning

注意通过[AddMenuItem](AddMenuItem)最多只能添加 12 个菜单项。第 13 个菜单项会覆盖通过此函数设置的列标题

:::

## 相关函数

- [AddMenuItem](AddMenuItem): 为菜单添加项目
- [CreateMenu](CreateMenu): 创建新菜单

## 相关回调

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): 当玩家选择菜单行时触发
