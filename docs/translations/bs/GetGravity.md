---
title: GetGravity
description: Dobij trenutno postavljenu gravitaciju.
tags: []
---

## Deskripcija

Dobij trenutno postavljenu gravitaciju.

## Primjeri

```c
#if !defined GetGravity
    native Float:GetGravity();
#endif

printf("Trenutna gravitacija: %f", GetGravity());
```

## Zabilješke

:::warning

Ova funkcija nije definirana prema zadanim postavkama. Dodaj 'native Float: GetGravity ();' uz uključivanje a_samp.inc da ga koristi.

:::

## Srodne Funkcije

- [SetGravity](SetGravity): Postavite globalnu gravitaciju.
