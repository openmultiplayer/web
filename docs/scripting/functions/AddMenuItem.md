---
title: "AddMenuItem | open.mp"
description: "Adds an item to a specified menu."
canonical: https://open.mp/docs/scripting/functions/AddMenuItem
language: en
---

# AddMenuItem

## Description

Adds an item to a specified menu.

| Name | Description |
| --- | --- |
| Menu:menuid | The menu id to add an item to. |
| column | The column to add the item to. |
| const title\[\] | The title for the new menu item. |
| OPEN\_MP\_TAGS:... | Indefinite number of arguments of any tag. |

## Returns

The index of the row this item was added to.

## Examples

```c
new Menu:gExampleMenu;

public OnGameModeInit()
{
    gExampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(gExampleMenu, 0, "item 1");
    AddMenuItem(gExampleMenu, 0, "item 2");
    return 1;
}
```

## Notes

warning

Crashes when passed an invalid menu ID. (Fixed in open.mp)

note

-   You can only have 12 items per menu (13th goes to the right side of the header of column name (colored), 14th and higher not display at all).
-   You can only use 2 columns (0 and 1).
-   You can only add 8 color codes per one item (`~r~`, `~g~` etc.).
-   Maximum length of menu item is 31 symbols.

## Related Functions

-   [CreateMenu](https://open.mp/docs/scripting/functions/CreateMenu): Create a menu.
-   [SetMenuColumnHeader](https://open.mp/docs/scripting/functions/SetMenuColumnHeader): Set the header for one of the columns in a menu.
-   [DestroyMenu](https://open.mp/docs/scripting/functions/DestroyMenu): Destroy a menu.
-   [IsMenuRowDisabled](https://open.mp/docs/scripting/functions/IsMenuRowDisabled): Check if a menu row is disabled.

## Related Callbacks

-   [OnPlayerSelectedMenuRow](https://open.mp/docs/scripting/callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
-   [OnPlayerExitedMenu](https://open.mp/docs/scripting/callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
