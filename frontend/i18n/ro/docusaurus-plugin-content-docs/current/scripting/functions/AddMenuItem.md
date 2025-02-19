---
title: AddMenuItem
sidebar_label: AddMenuItem
description: Adaugă un element la un meniu specificat.
tags: ["menu"]
---

## Descriere

Adaugă un element la un meniu specificat.

| Nume    | Descriere                                  |
| ------- | ------------------------------------------ |
| menuid  | ID-ul meniului pentru a adăuga un element. |
| column  | Coloana la care se adaugă elementul.       |
| title[] | Titlul pentru noul element de meniu.       |

## Se intoarce

Indexul rândului la care a fost adăugat acest element.

## Exemple

```c
new Menu:gExampleMenu;

public OnGameModeInit()
{
    gExampleMenu = CreateMenu("Your Menu", 2, 200.0, 100.0, 150.0, 150.0);
    AddMenuItem(gExampleMenu, 0, "item 1");
    AddMenuItem(gExampleMenu, 0, "item 2");
    return 1;
}
```

## Note

:::tip

Se blochează la trecerea unui ID de meniu nevalid. Puteți avea doar 12 elemente pe meniu (al 13-lea merge în partea dreaptă a antetului numelui coloanei (colorat), al 14-lea și superior nu este afișat deloc). Puteți utiliza doar 2 coloane (0 și 1). Puteți adăuga doar 8 coduri de culoare pentru un singur articol (~ r ~, ~ g ~ etc.). Lungimea maximă a elementului de meniu este de 31 de simboluri.

:::

## Funcții conexe

- [CreateMenu](CreateMenu.md): Creați un meniu.
- [SetMenuColumnHeader](SetMenuColumnHeader.md): Setați antetul pentru una dintre coloanele dintr-un meniu.
- [DestroyMenu](DestroyMenu.md): Distrugeți un meniu.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow.md): Apelat atunci când un jucător a selectat un rând dintr-un meniu.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu.md): Apelat când un jucător iese din meniu.
