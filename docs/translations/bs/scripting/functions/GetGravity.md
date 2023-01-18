---
title: GetGravity
description: Dobij trenutno postavljenu gravitaciju servera.
tags: []
---

## Deskripcija

Dobij trenutno postavljenu gravitaciju servera.

## Primjeri

```c
#if !defined GetGravity
    native Float:GetGravity();
#endif

printf("Treutna gravitacija servera: %f", GetGravity());
```

## Bilješke

:::upozorenje

Ova funkcija nije defineovana po defaultu. Dodajte 'native Float:GetGravity();' ispod includea a_samp.inc kako bi ga mogli koristiti.

:::

## Povezane Funkcije

- [SetGravity](SetGravity): Postavite globalnu gravitaciju servera.
