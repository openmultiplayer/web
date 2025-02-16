---
title: OnPlayerSelectedMenuRow
description: Acest callback este apelat atunci când un jucător selectează un articol dintr-un meniu (ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Descriere

Acest callback este apelat atunci când un jucător selectează un articol dintr-un meniu (ShowMenuForPlayer).

| Nume     | Descriere                                                   |
| -------- | ----------------------------------------------------------- |
| playerid | ID-ul jucătorului care a selectat un element de meniu.      |
| row      | ID-ul rândului care a fost selectat. Primul rând este ID 0. |

## Returnări

Este întotdeauna numit primul în modul de joc.

## Exemple

```c
new Menu:MyMenu;

public OnGameModeInit()
{
    MyMenu = CreateMenu("Exemplu de meniu", 1, 50.0, 180.0, 200.0, 200.0);
    AddMenuItem(MyMenu, 0, "Element 1");
    AddMenuItem(MyMenu, 0, "Element 2");
    return 1;
}

public OnPlayerSelectedMenuRow(playerid, row)
{
    if (GetPlayerMenu(playerid) == MyMenu)
    {
        switch(row)
        {
            case 0: print("Elementul 1 selectat");
            case 1: print("Elementul 2 selectat");
        }
    }
    return 1;
}
```

## Note

:::tip

ID-ul meniului nu este transmis acestui callback. GetPlayerMenu trebuie utilizat pentru a determina în ce meniu jucătorul a selectat un element.

:::

## Funcții similare

- [CreateMenu](../functions/CreateMenu): Creați un meniu.
- [DestroyMenu](../functions/DestroyMenu): Distrugeți un meniu.
- [AddMenuItem](../functions/AddMenuItem): Adaugă un element la un meniu specificat.
- [ShowMenuForPlayer](../functions/ShowMenuForPlayer): Afișează un meniu pentru un jucător.
- [HideMenuForPlayer](../functions/HideMenuForPlayer): Ascunde un meniu pentru un jucător.