---
title: GetPlayerMenu
description: Dobija meni ID koji igrač trenutno gleda (prikazuje ga ShowMenuForPlayer).
tags: ["player", "menu"]
---

## Deskripcija

Dobija meni ID koji igrač trenutno gleda (prikazuje ga ShowMenuForPlayer).

| Ime      | Deskripcija                    |
| -------- | ------------------------------ |
| playerid | ID igrača za dobiti ID menija. |

## Returns

ID trenutno prikazanog menija uređaja ili INVALID_MENU (255) ako nije prikazan nijedan meni. Vraćena vrijednost označena je s Menu:.

## Primjeri

```c
new Menu:currentMenu = GetPlayerMenu(playerid); // Spremite trenutni meni uređaja u 'CurrentMenu'
```

## Zabilješke

:::tip

Vraća prethodni meni kada nijedan nije prikazan.

:::

## Srodne Funkcije

- [ShowMenuForPlayer](ShowMenuForPlayer): Prikaži meni za igrača.
- [HideMenuForPlayer](HideMenuForPlayer): Sakrij meni za igrača.
- [CreateMenu](CreateMenu): Kreiraj meni.
- [DestroyMenu](DestroyMenu): Uništi meni.
- [AddMenuItem](AddMenuItem): Dodaj artikal u meni.
- [OnPlayerSelectedMenuRow](../callbacks/OnPlayerSelectedMenuRow): Pozvano kada igrač odabere red u meniju.
- [OnPlayerExitedMenu](../callbacks/OnPlayerExitedMenu): Pozvano kada igrač napusti meni.
