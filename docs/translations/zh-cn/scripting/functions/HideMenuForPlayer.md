---
title: HideMenuForPlayer
description: Hides a menu for a player.
tags: ["player", "menu"]
---

## Description

Hides a menu for a player.

| Name        | Description                                                                                                                       |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Menu:menuid | The ID of the menu to hide. Returned by CreateMenu and passed to [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow). |
| playerid    | The ID of the player that the menu will be hidden for.                                                                            |

## Returns

**true** - The function was executed successfully.

**false** - The function failed to execute.

## Examples

```c
public OnPlayerCommandText(playerid, cmdtext[])
{
    if (strcmp(cmdtext, "/menuhide", true) == 0)
    {
        new Menu:myMenu = GetPlayerMenu(playerid);
        HideMenuForPlayer(myMenu, playerid);
        return 1;
    }
    return 0;
}
```

## Notes

:::warning

Crashes the both server and player if an invalid menu ID given. (Fixed in open.mp)

:::

:::tip

This function has always taken a menu ID parameter, but in SA:MP this ID was not used. So whatever value was given the player's current menu would be closed, even if they weren't looking at the one you said to close.

Old code may have looked like:

```c
gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);

HideMenuForPlayer(gShopMenu, playerid);
```

That would always close the player's current menu, regardless of which one they were actually looking at. Now you will need to remember which one they are looking at, or just get it:

```c
gShopMenu = CreateMenu("text", 2, 100.0, 30.0, 7.0);

HideMenuForPlayer(GetPlayerMenu(playerid), playerid);
```

:::

## Related Functions

- [CreateMenu](CreateMenu): Create a menu.
- [AddMenuItem](AddMenuItem): Adds an item to a specified menu.
- [SetMenuColumnHeader](SetMenuColumnHeader): Set the header for one of the columns in a menu.
- [ShowMenuForPlayer](ShowMenuForPlayer): Show a menu for a player.
