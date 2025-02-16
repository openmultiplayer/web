---
title: CallLocalFunction
description: Poziva javnu funkciju iz skripte u kojoj se koristi.
tags: []
---

## Deskripcija

Poziva javnu funkciju iz skripte u kojoj se koristi.

| Ime            | Deskripcija                                   |
| -------------- | --------------------------------------------- |
| function[]     | Ime javne funkcije                            |
| format[]       | Oznaka / format svake varijable               |
\ \{Float, _}:... | 'Neodređeni' broj argumenata bilo koje oznake |

## Returns

Ako funkcija postoji, vraća isto što i pozvana funkcija. Ako funkcija ne postoji, vraća 0.

## Primjeri

```c
forward publicFunc(number, Float:flt, const string[]);
public publicFunc(number, Float:flt, const string[])
{
    printf("Received integer %i, float %f, string %s", number, flt, string);
    return 1;
}

CallLocalFunction("publicFunc", "ifs", 420, 68.999999999, "Hello world");
```

## Zabilješke

:::warning

CallLocalFunction ruši server ako prosljeđuje prazan string.

:::

## Srodne Funkcije

- [CallRemoteFunction](CallRemoteFunction): Poziva funkciju u bilo kojoj učitanoj skripti.
