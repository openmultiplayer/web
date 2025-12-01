---
title: GetTickCount
sidebar_label: GetTickCount
description: Daje vrijeme trajanja servera u milisekundama.
tags: []
---

## Deskripcija

Daje vrijeme trajanja servera u milisekundama.

## Primjeri

```c
public OnPlayerConnect(playerid)
{
    new count = GetTickCount();
    //Ostatak OnPlayerConnect-a
    printf("Vrijeme potrebno za izvršenje OnPlayerConnect-a: %d", GetTickCount() - count);
    return 1;
}
```

## Zabilješke

:::tip

Jedna uobičajena upotreba GetTickCount je za benčmarking. Pomoću njega se može izračunati koliko vremena je potrebno nekom izvršnom kodu.

:::

:::warning

GetTickCount će uzrokovati probleme na serverima s vremenom neprekidnog rada duže od 24 dana, jer će GetTickCount na kraju iskriviti ograničenja cijele veličine.

:::

## Srodne Funkcije

- [tickcount](tickcount): Nabavite vrijeme rada stvarnog servera.
