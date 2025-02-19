---
title: DisableMenu
sidebar_label: DisableMenu
description: Disable a menu.
tags: ["menu"]
---

## คำอธิบาย

Disable a menu.

| Name        | Description                    |
| ----------- | ------------------------------ |
| Menu:menuid | The ID of the menu to disable. |

## ส่งคืน

This function does not return any specific values.

## ตัวอย่าง

```c
new WeaponMenu;

WeaponMenu = CreateMenu("Weapons", 1, 50.0, 180.0, 200.0, 200.0);
AddMenuItem(WeaponMenu, 0, "Rocket Launcher");
AddMenuItem(WeaponMenu, 0, "Flamethrower");
AddMenuItem(WeaponMenu, 0, "Minigun");
AddMenuItem(WeaponMenu, 0, "Grenades");

// Under OnPlayerCommandText
if (!strcmp(cmdtext, "/disableguns", true))
{
    DisableMenu(WeaponMenu); //Disable the weapon menu
    return 1;
}
```

## บันทึก

:::tip

Crashes when passed an invalid menu ID.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateMenu](../../scripting/functions/CreateMenu.md): Create a menu.
- [DestroyMenu](../../scripting/functions/DestroyMenu.md): Destroy a menu.
- [AddMenuItem](../../scripting/functions/AddMenuItem.md): Add an item to a menu.
