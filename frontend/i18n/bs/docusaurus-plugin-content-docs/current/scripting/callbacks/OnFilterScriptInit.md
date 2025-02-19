---
title: OnFilterScriptInit
sidebar_label: OnFilterScriptInit
description: Ovaj callback se poziva kada se filterskripta pokrenula.
tags: []
---

## Deskripcija

Ovaj callback se poziva kada se filterskripta pokrenula. Poziva se samo unutar filterskripte koja se pokreće.

## Primjeri

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("Filterskripta je pokrenuta.");
    print("--------------------------------------\n");
    return 1;
}
```

## Srodne Funkcije
