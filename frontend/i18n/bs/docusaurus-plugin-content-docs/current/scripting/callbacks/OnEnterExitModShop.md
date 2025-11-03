---
title: OnEnterExitModShop
sidebar_label: OnEnterExitModShop
description: Ovaj callback se poziva kada igrač uđe ili izađe iz mod shopa.
tags: []
---

## Deskripcija

Ovaj callback se poziva kada igrač uđe ili izađe iz mod shopa.

| Ime        | Deskripcija                                              |
| ---------- | -------------------------------------------------------- |
| playerid   | ID igrača koji je ušao ili izašao iz modshop-a           |
| enterexit  | 1 ako je igrač ušao 0 ako je izašao iz modshop-a         |
| interiorid | ID interijera modshopa u koji igrač ulazi (0 ako izlazi) |

## Returns

Uvijek je pozvana prva u filterskripti.

## Primjeri

```c
public OnEnterExitModShop(playerid, enterexit, interiorid)
{
    if (enterexit == 0) // Ako je enterexit 0, to znači da izlaze iz modshop-a
    {
        SendClientMessage(playerid, COLOR_WHITE, "Sjajno vozilo! Naplaceno ti je $100.");
        GivePlayerMoney(playerid, -100);
    }
    return 1;
}
```

## Zabilješke

:::warning

Poznati Bug(ovi): Igrači se sudaraju kad uđu u isti modshop

:::

## Srodne Funkcije

- [AddVehicleComponent](../functions/AddVehicleComponent): Dodaj komponentu na vozilo.
