---
title: AddMenuItem
sidebar_label: AddMenuItem
description: Adds an item to a specified menu.
tags: ["menu"]
---

## คำอธิบาย

Adds an item to a specified menu.

| Name    | Description                      |
| ------- | -------------------------------- |
| menuid  | The menu id to add an item to.   |
| column  | The column to add the item to.   |
| title[] | The title for the new menu item. |

## ส่งคืน

The index of the row this item was added to.

## ตัวอย่าง

```c
new Menu:examplemenu;

public OnGameModeInit()
{
    examplemenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(examplemenu, 0, "item 1");
    AddMenuItem(examplemenu, 0, "item 2");
    return 1;
}
```

## บันทึก

:::tip

Crashes when passed an invalid menu ID. You can only have 12 items per menu (13th goes to the right side of the header of column name (colored), 14th and higher not display at all). You can only use 2 columns (0 and 1). You can only add 8 color codes per one item (~r~, ~g~ etc.). Maximum length of menu item is 31 symbols.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateMenu](CreateMenu): Create a menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Set the header for one of the columns in a menu.
- [DestroyMenu](DestroyMenu): Destroy a menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
