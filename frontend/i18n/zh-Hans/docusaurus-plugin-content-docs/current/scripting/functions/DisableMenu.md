---
title: DisableMenu
sidebar_label: DisableMenu
description: 禁用一个菜单。
tags: ["菜单"]
---

## 描述

禁用一个菜单。

| 名称        | 描述            |
| ----------- | --------------- |
| Menu:menuid | 要禁用的菜单 ID |

## 返回值

该函数不返回特定值。

## 示例

```c
new WeaponMenu;

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
    if (!strcmp(cmdtext, "/disableguns", true))
    {
        DisableMenu(WeaponMenu); // 禁用武器菜单
        return 1;
    }
    return 0;
}
```

## 注意事项

:::tip

传入无效菜单 ID 会导致崩溃。

:::

## 相关函数

- [CreateMenu](CreateMenu): 创建一个菜单
- [DestroyMenu](DestroyMenu): 销毁一个菜单
- [AddMenuItem](AddMenuItem): 为菜单添加项目
- [IsMenuDisabled](IsMenuDisabled): 检查菜单是否被禁用
