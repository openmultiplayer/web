---
title: OnEnterExitModShop
description: Acest callback este apelat atunci când un jucâtor intră sau iese dintr-un mod shop.
tags: []
---

## Descriere

Acest callback este apelat când un jucâtor intră sau iese dintr-un mod shop.

| Nume       | Descriere                                                             |
| ---------- | --------------------------------------------------------------------- |
| playerid   | ID-ul jucătorului care a intrat sau a ieșit din modshop               |
| enterexit  | 1 dacă jucătorul a intrat sau 0 dacă a ieșit                          |
| interiorid | ID-ul interiorului modshop-ului dacă playerul intră (sau 0 dacă iese) |

## Returnări

Mereu este apelat primul în filterscript-uri.

## Exemple

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Dacă enterexit e 0, atunci înseamnă că jucătorul iese
    {
        SendClientMessage(playerid, COLOR_WHITE, "Frumoasă tigaie! Ai fost taxat cu $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Note

:::warning

Bug-uri cunoscute: Jucătorii se lovesc înte ei când intră în același mod shop.

:::

## Funcții asociate

- [AddVehicleComponent](../functions/AddVehicleComponent.md): Adaugă o componentă unei mașini.
