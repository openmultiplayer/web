---
title: OnPlayerSelectedMenuRow
sidebar_label: OnPlayerSelectedMenuRow
description: Ovaj callback je pozvan kada igrač selektuje određenu stavku (item) iz menija (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Deskripcija

Ovaj callback je pozvan kada igrač selektuje određenu stavku (item) iz menija (ShowMenuForPlayer).

| Ime      | Deskripcija                                           |
| -------- | ----------------------------------------------------- |
| playerid | ID igrača koji je selektovao stavku iz menija.        |
| row      | ID reda stavke koja je selektovana. Prvi red je ID 0. |

## Returns

Uvijek je pozvan prvi u gamemode-u.

## Primjeri

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
        switch(row)
        {
            case 0: print("Item 1 Selected");
            case 1: print("Item 2 Selected");
        }
    }
    return 1;
}
```

## Zabilješke

:::tip

ID menija nije proslijeđen ovom callbacku. GetPlayerMenu se mora koristiti kako bi se odredilo na kojem meniju je igrač selektovao stavku.

:::

## Srodne Funkcije

- [CreateMenu](../functions/CreateMenu.md): Kreiraj meni.
- [DestroyMenu](../functions/DestroyMenu.md): Uništi meni.
- [AddMenuItem](../functions/AddMenuItem.md): Dodaj stavku u određeni meni.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer.md): Prikaži meni igraču.
- [HideMenuForPlayer](../functions/HideMenuForPlayer.md): Sakrij meni za igrača.
