---
title: "GetPlayerMenu | open.mp"
description: "Gets the ID of the menu the player is currently viewing (shown by ShowMenuForPlayer)."
canonical: https://open.mp/docs/scripting/functions/GetPlayerMenu
language: en
---

# GetPlayerMenu

## Description

Gets the ID of the menu the player is currently viewing (shown by [ShowMenuForPlayer](https://open.mp/docs/scripting/functions/ShowMenuForPlayer)).

| Name | Description |
| --- | --- |
| playerid | The ID of the player to get the current menu of. |

## Returns

The ID of the player's currently shown menu, or `INVALID_MENU` (255) if no menu shown.

Value returned is tagged with **Menu:**

## Examples

```c
new Menu:currentMenu = GetPlayerMenu(playerid); // Store the player's current menu in 'CurrentMenu'
```

## Notes

note

Returns previous menu when none is displayed.

## Related Functions

-   [ShowMenuForPlayer](https://open.mp/docs/scripting/functions/ShowMenuForPlayer): Show a menu for a player.
-   [HideMenuForPlayer](https://open.mp/docs/scripting/functions/HideMenuForPlayer): Hide a menu for a player.
-   [CreateMenu](https://open.mp/docs/scripting/functions/CreateMenu): Create a menu.
-   [DestroyMenu](https://open.mp/docs/scripting/functions/DestroyMenu): Destroy a menu.
-   [AddMenuItem](https://open.mp/docs/scripting/functions/AddMenuItem): Add an item to a menu.

## Related Callbacks

-   [OnPlayerSelectedMenuRow](https://open.mp/docs/scripting/callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
-   [OnPlayerExitedMenu](https://open.mp/docs/scripting/callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
