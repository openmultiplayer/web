---
title: OnPlayerSelectedMenuRow
description: This callback is called when a player selects an item from a menu (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## 描述

This callback is called when a player selects an item from a menu (ShowMenuForPlayer).

| 参数名   | 描述                                                        |
| -------- | ----------------------------------------------------------- |
| playerid | The ID of the player that selected a menu item.             |
| row      | The ID of the row that was selected. The first row is ID 0. |

## 返回值

It is always called first in gamemode.

## 案例

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("Example Menu", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "Item 1");
    AddMenuItem(MyMenu, 0, "Item 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch(row)
        {
            case 0: print("Item 1 Selected");
            case 1: print("Item 2 Selected");
        }
    }
    return 1;
}
```

## 要点

:::tip

The menu ID is not passed to this callback. GetPlayerMenu must be used to determine which menu the player selected an item on.

:::

## 相关函数

- [CreateMenu](../functions/CreateMenu): Create a menu.
- [DestroyMenu](../functions/DestroyMenu): Destroy a menu.
- [AddMenuItem](../functions/AddMenuItem): Adds an item to a specified menu.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): Show a menu for a player.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): Hide a menu for a player.
