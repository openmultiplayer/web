---
title: GetGravity
sidebar_label: GetGravity
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

:::warning

Ova funkcija nije definisana po zadanim postavkama. Dodajte 'native Float:GetGravity();' ispod includea a_samp.inc kako bi je mogli koristiti.

:::

## Srodne Funkcije

- [SetGravity](SetGravity): Postavite globalnu gravitaciju servera.
