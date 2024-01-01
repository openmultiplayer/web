---
title: HideMenuForPlayer
description: Hides a menu for a player.
tags: ["player", "menu"]
---

## คำอธิบาย

Hides a menu for a player.

| Name     | Description                                                                               |
| -------- | ----------------------------------------------------------------------------------------- |
| menuid   | The ID of the menu to hide. Returned by CreateMenu and passed to OnPlayerSelectedMenuRow. |
| playerid | The ID of the player that the menu will be hidden for.                                    |

## ส่งคืน

1: The function was executed successfully.

0: The function failed to execute.

## ตัวอย่าง

```c
if (strcmp(cmdtext, "/menuhide", true) == 0)
{
    new Menu:myMenu = GetPlayerMenu(playerid);
    HideMenuForPlayer(myMenu, playerid);
    return 1;
}
```

## บันทึก

:::tip

Crashes the both server and player if an invalid menu ID given.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- ShowMenuForPlayer: Show a menu for a player.
- AddMenuItem: Add an item to a menu.
- SetMenuColumnHeader: Set the header for one of the columns in a menu.
- CreateMenu: Create a menu.

- [CreateMenu](CreateMenu): Create a menu.
- [AddMenuItem](AddMenuItem): Adds an item to a specified menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Set the header for one of the columns in a menu.
- [ShowMenuForPlayer](ShowMenuForPlayer): Show a menu for a player.
