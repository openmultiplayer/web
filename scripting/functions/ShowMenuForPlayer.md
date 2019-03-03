# ShowMenuForPlayer

## Description

Shows a previously created menu for a player.

| Name     | Description                                          |
| -------- | ---------------------------------------------------- |
| menuid   | The ID of the menu to show. Returned by CreateMenu.  |
| playerid | The ID of the player to whom the menu will be shown. |

## Returns

1: The function executed successfully.

0: The function failed to execute. Menu and/or player doesn't exist.

## Examples

```c
new Menu:MENU_PlayerTeleport;

public OnGameModeInit()
{
    MENU_PlayerTeleport = CreateMenu(...);
    return 1;
}

if(strcmp(cmdtext, "/tele", true) == 0)
{
    ShowMenuForPlayer(MENU_PlayerTeleport, playerid);
    return 1;
}
```

## Notes

::: tip

Crashes the both server and player if an invalid menu ID given.

:::

## Related Functions

- CreateMenu: Create a menu.
- AddMenuItem: Add an item to a menu.
- SetMenuColumnHeader: Set the header for one of the columns in a menu.
- ShowPlayerDialog: Show a dialog to a player.
- OnPlayerSelectedMenuRow: Called when a player selected a row in a menu.
- OnPlayerExitedMenu: Called when a player exits a menu.
