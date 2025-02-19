---
title: DestroyMenu
sidebar_label: DestroyMenu
description: Destroys the specified menu.
tags: ["menu"]
---

## คำอธิบาย

Destroys the specified menu.

| Name   | Description            |
| ------ | ---------------------- |
| menuid | The menu ID to destroy |

## ส่งคืน

True if the destroying was successful, otherwise false

## ตัวอย่าง

```c
new Menu:examplemenu;
examplemenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);

// ...
DestroyMenu(examplemenu);
```

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateMenu](../../scripting/functions/CreateMenu.md): Create a menu.
- [SetMenuColumnHeader](../../scripting/functions/SetMenuColumnHeader.md): Set the header for one of the columns in a menu.
- [AddMenuItem](../../scripting/functions/AddMenuItem.md): Add an item to a menu.
- [OnPlayerSelectedMenuRow](../../scripting/callbacks/OnPlayerSelectedMenuRow.md): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../../scripting/callbacks/OnPlayerExitedMenu.md): Called when a player exits a menu.
