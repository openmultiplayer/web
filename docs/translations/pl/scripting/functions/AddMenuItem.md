---
id: AddMenuItem
title	: AddMenuItem
description: Dodaje 'przedmiot' do wyznaczonego menu.
Tags: ["menu"]
---

## Opis

Dodaje 'przedmiot/slot' do wyznaczonego menu.

| Nazwa   | Description                      |
| ------- | -------------------------------- |
| menuid  | ID Menu przedmiotu który ma zostać dodany   |
| kolumna  | Wartość kolumny do której dodajemy slot/przedmiot.   |
| tytuł[] | Tytuł nowego menu dla przedmiotu. |

## Zwracana wartość

Indeks rzędu do, którego ten przedmiot/slot został przypisany.

## Przykłady

```c
new Menu:przykladoweMenu;

public OnGameModeInit()
{
    przykladoweMenu = CreateMenu("TwojeMenu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(przykladoweMenu, 0, "przedmiot 1");
    AddMenuItem(przykladoweMenu, 0, "przedmiot 2");
    return 1;
}
```

## Notatki

:::Wskazówka

Crashuje się jeśli podane zostanie złe ID. Tylko 12 przedmiotów/slotów na jedno menu. Trzynasty idzie do prawej strony nagłówka nazwy kolumny (pokolorowany), 14'sty i wyżej nie pokaże się w ogóle. Możesz używać kolumny tylko 0 i 1. Możesz dodawać tylko 9 kolorów na jeden slot/przedmiot (~r~, ~g~, itd). 31 to max. długość symboli nazwy kolumny.

:::

## Powiązane funkcje

- [CreateMenu](CreateMenu.md): Tworzy menu.
- [SetMenuColumnHeader](SetMenuColumnHeader.md): Ustawia nagłówek dla kolumny.
- [DestroyMenu](DestroyMenu.md): Niszczy menu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): Wywołuje się kiedy gracz wybierze rząd w menu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): Wywołuje się kiedy gracz opuści menu.
