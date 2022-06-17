---
title: OnPlayerSelectedMenuRow
description: 当玩家从菜单(ShowMenuForPlayer)中选择一个项目时，这个回调函数被调用。
tags: ["player", "menu"]
---

## 描述

当玩家从菜单(ShowMenuForPlayer)中选择一个项目时，这个回调函数被调用。

| 参数名   | 描述                         |
| -------- | ---------------------------- |
| playerid | 选择菜单项的玩家的 ID。      |
| row      | 所选行的 ID。第一行是 ID 0。 |

## 返回值

它在游戏模式中总是先被调用。

## 案例

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("菜单案例", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "选项 1");
    AddMenuItem(MyMenu, 0, "选项 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch(row)
        {
            case 0: print("选择了第一项");
            case 1: print("选择了第二项");
        }
    }
    return 1;
}
```

## 要点

:::tip

菜单 ID 没有传递给这个回调。

GetPlayerMenu 必须用于确定玩家在哪个菜单上选择了一个项目。

:::

## 相关函数

- [CreateMenu](../functions/CreateMenu): 创建一个菜单。
- [DestroyMenu](../functions/DestroyMenu): 销毁一个菜单。
- [AddMenuItem](../functions/AddMenuItem): 向指定菜单中添加项。
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): 为玩家显示菜单。
- [HideMenuForPlayer](../functions/HideMenuForPlayer): 为玩家隐藏菜单。
