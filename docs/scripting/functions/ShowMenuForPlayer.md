---
title: "ShowMenuForPlayer | open.mp"
description: "Shows a previously created menu for a player."
canonical: https://open.mp/docs/scripting/functions/ShowMenuForPlayer
language: en
---

# ShowMenuForPlayer

## Description

Shows a [previously created](https://open.mp/docs/scripting/functions/CreateMenu) menu for a player.

| Name | Description |
| --- | --- |
| Menu:menuid | The ID of the menu to show. Returned by [CreateMenu](https://open.mp/docs/scripting/functions/CreateMenu). |
| playerid | The ID of the player to whom the menu will be shown. |

## Returns

**true** - The function executed successfully.

**false** - The function failed to execute. Menu and/or player doesn't exist.

## Examples

```c
new Menu:exampleMenu;

public OnGameModeInit()
{
    exampleMenu = CreateMenu("Example Menu", 2, 200.0, 100.0, 150.0, 150.0);
    return 1;
}

public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/menu", true) == 0)
    {
        ShowMenuForPlayer(exampleMenu, playerid);
        return 1;
    }
    return 0;
}
```

## Notes

warning

Crashes the both server and player if an invalid menu ID given. (Fixed in open.mp)

## Related Functions

-   [CreateMenu](https://open.mp/docs/scripting/functions/CreateMenu): Create a menu.
-   [AddMenuItem](https://open.mp/docs/scripting/functions/AddMenuItem): Adds an item to a specified menu.
-   [SetMenuColumnHeader](https://open.mp/docs/scripting/functions/SetMenuColumnHeader): Set the header for one of the columns in a menu.
-   [DestroyMenu](https://open.mp/docs/scripting/functions/DestroyMenu): Destroy a menu.

## Related Callbacks

-   [OnPlayerSelectedMenuRow](https://open.mp/docs/scripting/callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
-   [OnPlayerExitedMenu](https://open.mp/docs/scripting/callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
