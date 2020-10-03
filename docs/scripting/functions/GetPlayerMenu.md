---
id: GetPlayerMenu
title: GetPlayerMenu
description: Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Description

Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer).

| Name     | Description                                      |
| -------- | ------------------------------------------------ |
| playerid | The ID of the player to get the current menu of. |

## Returns

The ID of the player's currently shown menu, or INVALID_MENU (255) if no menu shown. Value returned is tagged with Menu:.

## Examples

```c
new Menu:CurrentMenu = GetPlayerMenu(playerid); // Store the player's current menu in 'CurrentMenu'
```

## Notes

:::tip

Returns previous menu when none is displayed.

:::

## Related Functions

- [ShowMenuForPlayer](ShowMenuForPlayer.md): Show a menu for a player.
- [HideMenuForPlayer](HideMenuForPlayer.md): Hide a menu for a player.
- [CreateMenu](CreateMenu.md): Create a menu.
- [DestroyMenu](DestroyMenu.md): Destroy a menu.
- [AddMenuItem](AddMenuItem.md): Add an item to a menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): Called when a player exits a menu.
