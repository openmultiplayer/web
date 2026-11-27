---
title: "OnPlayerSelectedMenuRow | open.mp"
description: "This callback is called when a player selects an item from a menu (ShowMenuForPlayer)."
canonical: https://open.mp/docs/scripting/callbacks/OnPlayerSelectedMenuRow
language: en
---

# OnPlayerSelectedMenuRow

## Description

This callback is called when a player selects an item from a menu ([ShowMenuForPlayer](https://open.mp/docs/scripting/functions/ShowMenuForPlayer)).

| Name | Description |
| --- | --- |
| playerid | The ID of the player that selected a menu item. |
| row | The ID of the row that was selected. The first row is ID 0. |

## Returns

It is always called first in gamemode.

## Examples

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("Example Menu", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "Item 1");
    AddMenuItem(MyMenu, 0, "Item 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch (row)
        {
            case 0:
            {
                print("Item 1 Selected");
            }
            case 1:
            {
                print("Item 2 Selected");
            }
        }
    }
    return 1;
}
```

## Notes

note

The menu ID is not passed to this callback. [GetPlayerMenu](https://open.mp/docs/scripting/functions/GetPlayerMenu) must be used to determine which menu the player selected an item on.

## Related Callbacks

The following callbacks might be useful, as they're related to this callback in one way or another.

-   [OnPlayerExitedMenu](https://open.mp/docs/scripting/callbacks/OnPlayerExitedMenu): This callback is called when a player exits a menu.
-   [OnDialogResponse](https://open.mp/docs/scripting/callbacks/OnDialogResponse): This callback is called when a player responds to a dialog.

## Related Functions

The following functions might be useful, as they're related to this callback in one way or another.

-   [CreateMenu](https://open.mp/docs/scripting/functions/CreateMenu): Create a menu.
-   [DestroyMenu](https://open.mp/docs/scripting/functions/DestroyMenu): Destroy a menu.
-   [AddMenuItem](https://open.mp/docs/scripting/functions/AddMenuItem): Adds an item to a specified menu.
-   [ShowMenuForPlayer](https://open.mp/docs/scripting/functions/ShowMenuForPlayer): Show a menu for a player.
-   [HideMenuForPlayer](https://open.mp/docs/scripting/functions/HideMenuForPlayer): Hide a menu for a player.
