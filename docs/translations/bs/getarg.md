---
title: getarg
description: Dobij argument koji je proslijeđen funkciji.
tags: []
---

:::warning

Ova funkcija započinje malim slovom.

:::

## Deskripcija

Dobij argument koji je proslijeđen funkciji.

| Ime   | Deskripcija                                          |
| ----- | ---------------------------------------------------- |
| arg   | Broj sekvence argumenta. Koristi 0 za prvi argument. |
| index | Index (u slučaju da je argument array(niz)).         |

## Returns

Vrijednost argumenta.

## Primjeri

```c
SomeFunc(...)
{
    printf("%i", getarg(3));
}

public OnFilterScriptInit()
{
    SomeFunc(1, 3, 3, 7);
}

// Ispis: 7. Četvrti argument (index 3) je 7.
```

## Srodne Funkcije

- [numargs](numargs): Vrati broj argumenata.
- [setarg](setarg): Postavi argument.
