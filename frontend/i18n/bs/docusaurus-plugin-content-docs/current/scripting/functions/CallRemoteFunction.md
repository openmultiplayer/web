---
title: CallRemoteFunction
sidebar_label: CallRemoteFunction
description: Poziva javnu funkciju u bilo kojoj skripti koja se učita.
tags: []
---

## Deskripcija

Poziva javnu funkciju u bilo kojoj skripti koja se učita.

| Ime            | Deskripcija                                   |
| -------------- | --------------------------------------------- |
| function[]     | Ime javne funkcije                            |
| format[]       | Oznaka / format svake varijable               |
\ \{Float, _}:... | 'Neodređeni' broj argumenata bilo koje oznake |

## Returns

Vrijednost koju je vratila zadnja javna funkcija.

## Examples

```c
forward CallMe(number, const string[]);
public CallMe(number, const string[])
{
    printf("CallMe called. Int: %i  String: %s.", number, string);
    return 1;
}

// Negdje... možda u drugom fajlu?
CallRemoteFunction("CallMe", "is", 69, "this is a string");
```

## Zabilješke

:::warning

CallRemoteFunction ruši server ako prosljeđuje prazan string.

:::

## Srodne Funkcije

- [CallLocalFunction](CallLocalFunction): Poziva funkciju u skripti.
