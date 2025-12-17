---
title: IsValidMenu
sidebar_label: IsValidMenu
description: Checks if a menu ID is valid.
tags: ["menu"]
---

## Description

Checks if a menu ID is valid.

| Name        | Description                  |
| ----------- | ---------------------------- |
| Menu:menuid | The ID of the menu to check. |

## Returns

**true** - The menu is valid.

**false** - The menu is not valid.

## Related Functions

- [CreateMenu](CreateMenu): Creates a menu.
- [DestroyMenu](DestroyMenu): Destroys the specified menu.
- [DisableMenu](DisableMenu): Disable a menu.
- [DisableMenuRow](DisableMenuRow): Disable a specific row in a menu for all players.
- [AddMenuItem](AddMenuItem): Adds an item to a specified menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Set the header for one of the columns in a menu.
- [IsMenuDisabled](IsMenuDisabled): Check if a menu is disabled.
- [IsMenuRowDisabled](IsMenuRowDisabled): Check if a menu row is disabled.
-

## Related Callbacks

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
