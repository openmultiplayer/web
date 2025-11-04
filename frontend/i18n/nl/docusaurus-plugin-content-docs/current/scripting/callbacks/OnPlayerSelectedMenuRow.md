---
title: OnPlayerSelectedMenuRow
sidebar_label: OnPlayerSelectedMenuRow
description: Deze callback wordt aangeroepen wanneer een speler een item uit een menu selecteert (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Beschrijving

Deze callback wordt aangeroepen wanneer een speler een item uit een menu selecteert ([ShowMenuForPlayer](../functions/ShowMenuForPlayer)).

| Naam     | Beschrijving                                               |
| -------- | ---------------------------------------------------------- |
| playerid | Het ID van de speler die een menu-item selecteerde.       |
| row      | Het ID van de geselecteerde rij. De eerste rij heeft ID 0. |

## Returns

Wordt altijd als eerste aangeroepen in gamemode.

## Voorbeelden

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

## Notities

:::tip

Het menu-ID wordt niet meegegeven aan deze callback. Gebruik [GetPlayerMenu](../functions/GetPlayerMenu) om te bepalen op welk menu de speler een item selecteerde.

:::

## Gerelateerde Callbacks

- [OnPlayerExitedMenu](OnPlayerExitedMenu): Deze callback wordt aangeroepen wanneer een speler een menu verlaat.
- [OnDialogResponse](OnDialogResponse): Deze callback wordt aangeroepen wanneer een speler reageert op een dialog.

## Gerelateerde Functies

- [CreateMenu](../functions/CreateMenu): Maak een menu.
- [DestroyMenu](../functions/DestroyMenu): Vernietig een menu.
- [AddMenuItem](../functions/AddMenuItem): Voegt een item toe aan een menu.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): Toon een menu aan een speler.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): Verberg een menu voor een speler.
