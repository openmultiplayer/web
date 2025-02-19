---
title: ShowMenuForPlayer
sidebar_label: ShowMenuForPlayer
description: Shows a previously created menu for a player.
tags: ["player", "menu"]
---

## Description

Shows a previously created menu for a player.

| Name        | Description                                          |
| ----------- | ---------------------------------------------------- |
| Menu:menuid | The ID of the menu to show. Returned by CreateMenu.  |
| playerid    | The ID of the player to whom the menu will be shown. |

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

:::tip

Crashes the both server and player if an invalid menu ID given.

:::

## Related Functions

- [CreateMenu](CreateMenu): Create a menu.
- [AddMenuItem](AddMenuItem): Adds an item to a specified menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Set the header for one of the columns in a menu.
- [DestroyMenu](DestroyMenu): Destroy a menu.

## Related Callbacks

- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Called when a player selected a row in a menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Called when a player exits a menu.
