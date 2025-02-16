---
title: getarg
sidebar_label: getarg
description: Dobij argument koji je proslijeđen funkciji.
tags: []
---

<LowercaseNote />

## Deskripcija

Dobij argument koji je proslijeđen funkciji.

| Ime   | Deskripcija                                             |
| ----- | ------------------------------------------------------- |
| arg   | Redni broj argumenta. Koristite 0 za prvi argument.     |
| index | Indeks (u slučaju da je argument array / niz).          |

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

// Output: 7. Četvrti argument (indeks 3) je 7.
```

## Srodne Funkcije

- [numargs](numargs): Returna (Vraća) broj argumenata.
- [setarg](setarg): Postavlja argument.
