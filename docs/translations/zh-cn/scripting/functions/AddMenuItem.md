---
title: AddMenuItem
description: 向指定菜单中添加菜单项。
tags: ["menu"]
---

## 描述

向指定菜单中添加菜单项。

| 参数名  | 说明                    |
| ------- | ----------------------- |
| menuid  | 要添加菜单项的菜单 ID。 |
| column  | 要添加菜单项到哪列。    |
| title[] | 菜单项的标题。          |

## 返回值

添加后该项的行索引。

## 案例

```c
new Menu:gExampleMenu;

public OnGameModeInit()
{
    gExampleMenu = CreateMenu("你的菜单", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(gExampleMenu, 0, "菜单项 1");
    AddMenuItem(gExampleMenu, 0, "菜单项 2");
    return 1;
}
```

## 要点

:::tip

传递无效菜单 ID 时崩溃。
每个菜单只能有 12 个选项(第 13 个到列名标题的右边(彩色)，第 14 个及以上根本不显示)。
只能使用 2 列(0 和 1)。
每个菜单项只能添加 8 种颜色编码 (`~r~`, `~g~`等)。
菜单项的最大长度是 31 个符号。

:::

## 相关函数

- [CreateMenu](CreateMenu): 创建一个菜单。
- [SetMenuColumnHeader](SetMenuColumnHeader): 设置菜单中某一列的标题。
- [DestroyMenu](DestroyMenu): 销毁一个菜单。
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): 当玩家在菜单中选择了一个菜单项时调用。
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): 当玩家退出菜单时调用。
