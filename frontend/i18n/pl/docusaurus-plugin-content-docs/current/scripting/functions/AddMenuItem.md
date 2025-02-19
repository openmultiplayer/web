---
title: AddMenuItem
sidebar_label: AddMenuItem
description: Dodaje element do konkretnego menu.
Tags: ["menu"]
---

## Opis

Dodaje element do konkretnego menu.

| Nazwa   | Opis                                              |
| ------- | ------------------------------------------------- |
| menuid  | ID menu, do którego element ma zostać dodany.     |
| column  | Kolumna, do której dana pozycja ma zostać dodana. |
| title[] | Tytuł nowego elementu w menu.                     |

## Zwracane wartości

Indeks rzędu, do którego element został dodany.

## Przykłady

```c
new Menu:examplemenu;

public OnGameModeInit()
{
    examplemenu = CreateMenu("Twoje menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(examplemenu, 0, "element 1");
    AddMenuItem(examplemenu, 0, "element 2");
    return 1;
}
```

## Uwagi

:::tip

Podanie nieprawidłowego ID menu powoduje crash. Możesz mieć tylko 12 elementów w każdym menu (13 przechodzi na prawą stronę nagłówka nazwy kolumny (pokolorowany), 14 i większe nie są wyświetlane wcale. Możesz używać tylko 2 kolumn (0 i 1). Możesz dodać tylko 8 kolorów do jednego elementu (~r~, ~g~, itd.). Maksymalna długość elementu menu to 31 znaków.

:::

## Powiązane funkcje

- [CreateMenu](CreateMenu.md): Tworzy menu.
- [SetMenuColumnHeader](SetMenuColumnHeader.md): Ustawia nagłówek dla jednej z kolumn w menu.
- [DestroyMenu](DestroyMenu.md): Kasuje menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): Wywoływane, gdy gracz wybrał rząd w menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): Wywoływane, gdy gracz zamknie menu.
