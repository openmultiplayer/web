---
title: CreateMenu
description: Creates a menu.
tags: ["menu"]
---

## คำอธิบาย

Creates a menu.

| Name            | Description                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| title[]         | The title for the new menu.                                                         |
| columns         | How many colums shall the new menu have.                                            |
| Float:x         | The X position of the menu (640x460 canvas - 0 would put the menu at the far left). |
| Float:y         | The Y position of the menu (640x460 canvas - 0 would put the menu at the far top).  |
| Float:col1width | The width for the first column.                                                     |
| Float:col2width | The width for the second column.                                                    |

## ส่งคืน

The ID of the new menu or -1 on failure.

## ตัวอย่าง

```c
new Menu:examplemenu;

public OnGameModeInit()
{
    examplemenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}
```

## บันทึก

:::tip

This function merely CREATES the menu - ShowMenuForPlayer must be used to show it. You can only create and access 2 columns (0 & 1). If the title's length is equal to or greater than 32 chars the title is truncated to 30 characters.

:::

:::warning

There is a limit of 12 items per menu, and a limit of 128 menus in total.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AddMenuItem](../../scripting/functions/AddMenuItem.md): Adds an item to a specified menu.
- [SetMenuColumnHeader](../../scripting/functions/SetMenuColumnHeader.md): Set the header for one of the columns in a menu.
- [DestroyMenu](../../scripting/functions/DestroyMenu.md): Destroy a menu.
- [ShowMenuForPlayer](../../scripting/functions/ShowMenuForPlayer.md): Show a menu for a player.
- [HideMenuForPlayer](../../scripting/functions/HideMenuForPlayer.md): Hide a menu for a player.
- [OnPlayerSelectedMenuRow](../../scripting/callbacks/OnPlayerSelectedMenuRow.md): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../../scripting/callbacks/OnPlayerExitedMenu.md): Called when a player exits a menu.
