---
title: SetMenuColumnHeader
description: Sets the caption of a column in a menu.
tags: ["menu"]
---

## คำอธิบาย

Sets the caption of a column in a menu.

| Name   | Description                               |
| ------ | ----------------------------------------- |
| menuid | ID of the menu to change.                 |
| column | The column (0 or 1) to set the header of. |
| text[] | The caption text for the column.          |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new Menu:TestMenu;

// There are two rows in this menu
TestMenu = CreateMenu("Menu Header", 2, 200.0, 100.0, 150.0, 150.0);
SetMenuColumnHeader(TestMenu, 0, "Row 1");
SetMenuColumnHeader(TestMenu, 1, "Row 2");

// Add menu items to it.
AddMenuItem(TestMenu, 0, "Row1 Item1");
AddMenuItem(TestMenu, 1, "Row2 Item1");
```

## บันทึก

:::tip

Crashes when passed an invalid menu ID.

:::

:::warning

Note that you can add only 12 items with AddMenuItem. The 13th object of a menu would replace the header of the column which is correctly set with this function.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [AddMenuItem](../../scripting/functions/AddMenuItem.md): Add an item to a menu.
- [CreateMenu](../../scripting/functions/CreateMenu.md): Create a menu.
- [OnPlayerSelectedMenuRow](../../scripting/callbacks/OnPlayerSelectedMenuRow.md): Called when a player selected a row in a menu.
