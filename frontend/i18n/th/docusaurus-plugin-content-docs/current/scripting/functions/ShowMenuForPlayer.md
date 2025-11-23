---
title: ShowMenuForPlayer
sidebar_label: ShowMenuForPlayer
description: Shows a previously created menu for a player.
tags: ["player", "menu"]
---

## คำอธิบาย

Shows a previously created menu for a player.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| menuid   | The ID of the menu to show. Returned by CreateMenu.  |
| playerid | The ID of the player to whom the menu will be shown. |

## ส่งคืน

1: The function executed successfully.

0: The function failed to execute. Menu and/or player doesn't exist.

## ตัวอย่าง

```c
new Menu:MENU_PlayerTeleport;

public OnGameModeInit()
{
    MENU_PlayerTeleport = CreateMenu(...);
    return 1;
}

if (strcmp(cmdtext, "/tele", true) == 0)
{
    ShowMenuForPlayer(MENU_PlayerTeleport, playerid);
    return 1;
}
```

## บันทึก

:::tip

Crashes the both server and player if an invalid menu ID given.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateMenu](CreateMenu): Create a menu.
- [AddMenuItem](AddMenuItem): Adds an item to a specified menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Set the header for one of the columns in a menu.
- [DestroyMenu](DestroyMenu): Destroy a menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
