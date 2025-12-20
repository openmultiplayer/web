---
title: DisableMenuRow
sidebar_label: DisableMenuRow
description: 为所有玩家禁用菜单中的特定行。
tags: ["菜单"]
---

## 描述

为所有玩家禁用菜单中的特定行。该行将显示为灰色且不可选择。

| 参数        | 说明                                          |
| ----------- | --------------------------------------------- |
| Menu:menuid | 目标菜单 ID（无效的菜单 ID 会导致服务器崩溃） |
| row         | 要禁用的行序号（从 0 开始计数）               |

## 返回值

此函数始终返回 **1**（即使操作失败）。

如果指定无效行序号，不会有任何效果。

如果指定无效菜单 ID，服务器将崩溃。

## 示例

```c
new Menu:WeaponMenu;

public OnGameModeInit()
{
    WeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(WeaponMenu, 0, "Rocket Launcher");
    AddMenuItem(WeaponMenu, 0, "Flamethrower");
    AddMenuItem(WeaponMenu, 0, "Minigun");
    AddMenuItem(WeaponMenu, 0, "Grenades");
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (!strcmp(cmdtext, "/disablemenu", true))
    {
        DisableMenuRow(WeaponMenu, 2); // 禁用「Minigun」行
        return 1;
    }
    return 1;
}
```

## 注意事项

:::tip

- 传入无效菜单 ID 会导致服务器崩溃
- 此函数会对所有玩家生效
- 没有针对单个玩家的行禁用功能
- 可通过创建多个菜单实现差异化效果（如：包含禁用行的菜单和普通菜单）

:::

## 相关函数

- [CreateMenu](CreateMenu): 创建一个菜单
- [DestroyMenu](DestroyMenu): 销毁一个菜单
- [AddMenuItem](AddMenuItem): 为菜单添加项目
- [IsMenuRowDisabled](IsMenuRowDisabled): 检查指定菜单行是否被禁用
