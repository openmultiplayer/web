---
title: AddMenuItem
sidebar_label: AddMenuItem
description: 向指定菜单添加一个项目
tags: ["菜单"]
---

## 描述

向指定菜单添加一个项目。

| 参数名           | 说明                   |
| ---------------- | ---------------------- |
| Menu:menuid      | 要添加项目的菜单 ID    |
| column           | 添加项目所在的列       |
| const title[]    | 新增菜单项的标题       |
| OPEN_MP_TAGS:... | 不定数量的任意标签参数 |

## 返回值

新增菜单项所在行的索引值。

## 示例

```c
new Menu:gExampleMenu;

public OnGameModeInit()
{
    gExampleMenu = CreateMenu("你的菜单", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(gExampleMenu, 0, "项目1");
    AddMenuItem(gExampleMenu, 0, "项目2");
    return 1;
}
```

## 注意事项

:::tip

- 传入无效菜单 ID 会导致崩溃
- 每个菜单最多容纳 12 个项目（第 13 个项目会显示在列名的右侧，第 14 个及后续项目不可见）
- 仅支持 2 列（0 和 1）
- 单个菜单项最多支持 8 个颜色代码（如~r~、~g~等），最大显示长度为 31 个字符

:::

## 相关函数

- [CreateMenu](CreateMenu): 创建菜单
- [SetMenuColumnHeader](SetMenuColumnHeader): 设置菜单列标题
- [DestroyMenu](DestroyMenu): 销毁菜单
- [IsMenuRowDisabled](IsMenuRowDisabled): 检测菜单行是否禁用

## 相关回调

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): 当玩家选择菜单行时触发
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): 当玩家退出菜单时触发
