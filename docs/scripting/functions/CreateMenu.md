---
title: "CreateMenu | open.mp"
description: "Creates a menu."
canonical: https://open.mp/docs/scripting/functions/CreateMenu
language: en
---

# CreateMenu

## Description

Creates a menu.

| Name | Description |
| --- | --- |
| const title\[\] | The title for the new menu. |
| columns | How many colums shall the new menu have. |
| Float:x | The X position of the menu (640x460 canvas - 0 would put the menu at the far left). |
| Float:y | The Y position of the menu (640x460 canvas - 0 would put the menu at the far top). |
| Float:column1width | The width for the first column. |
| Float:column2width | The width for the second column. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

The ID of the new menu or **\-1** on failure.

## Examples

```c
new Menu:exampleMenu;

public OnGameModeInit()
{
    exampleMenu = CreateMenu("Example Menu", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}
```

## Notes

note

-   This function merely CREATES the menu - [ShowMenuForPlayer](https://open.mp/docs/scripting/functions/ShowMenuForPlayer) must be used to show it.
-   You can only create and access 2 columns (0 & 1).
-   If the title's length is equal to or greater than 32 chars the title is truncated to 30 characters.

warning

There is a limit of 12 items per menu, and a limit of 128 menus in total.

## Related Functions

-   [AddMenuItem](https://open.mp/docs/scripting/functions/AddMenuItem): Adds an item to a specified menu.
-   [SetMenuColumnHeader](https://open.mp/docs/scripting/functions/SetMenuColumnHeader): Set the header for one of the columns in a menu.
-   [DestroyMenu](https://open.mp/docs/scripting/functions/DestroyMenu): Destroy a menu.
-   [ShowMenuForPlayer](https://open.mp/docs/scripting/functions/ShowMenuForPlayer): Show a menu for a player.
-   [HideMenuForPlayer](https://open.mp/docs/scripting/functions/HideMenuForPlayer): Hide a menu for a player.

## Related Callbacks

-   [OnPlayerSelectedMenuRow](https://open.mp/docs/scripting/callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
-   [OnPlayerExitedMenu](https://open.mp/docs/scripting/callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
