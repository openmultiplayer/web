---
title: GetPlayerMenu
sidebar_label: GetPlayerMenu
description: Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).
tags: ["player", "menu"]
---

## คำอธิบาย

Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player to get the current menu of. |

## ส่งคืน

The ID of the player's currently shown menu, or INVALID_MENU (255) if no menu shown. Value returned is tagged with Menu:.

## ตัวอย่าง

```c
new Menu:CurrentMenu = GetPlayerMenu(playerid); // Store the player's current menu in 'CurrentMenu'
```

## บันทึก

:::tip

Returns previous menu when none is displayed.

:::

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- ShowMenuForPlayer: Show a menu for a player.
- HideMenuForPlayer: Hide a menu for a player.
- CreateMenu: Create a menu.
- DestroyMenu: Destroy a menu.
- AddMenuItem: Add an item to a menu.
- OnPlayerSelectedMenuRow: Called when a player selected a row in a menu.
- OnPlayerExitedMenu: Called when a player exits a menu.
