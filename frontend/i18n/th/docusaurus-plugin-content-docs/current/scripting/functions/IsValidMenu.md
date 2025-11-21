---
title: IsValidMenu
sidebar_label: IsValidMenu
description: Checks if a menu ID is valid.
tags: []
---

## คำอธิบาย

Checks if a menu ID is valid.

| Name   | Description                  |
| ------ | ---------------------------- |
| menuid | The ID of the menu to check. |

## ส่งคืน

1 - The menu is valid.

0 - The menu is not valid.

## ฟังก์ชั่นที่เกี่ยวข้องกัน

- [CreateMenu](CreateMenu): Creates a menu.
- [DestroyMenu](DestroyMenu): Destroys the specified menu.
- [DisableMenu](DisableMenu): Disable a menu.
- [DisableMenuRow](DisableMenuRow): Disable a specific row in a menu for all players.
- [AddMenuItem](AddMenuItem): Adds an item to a specified menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Set the header for one of the columns in a menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
