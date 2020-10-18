---
id: OnFilterScriptInit
title: OnFilterScriptInit
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
    print("The filterscript is loaded.");
    print("--------------------------------------\n");
    return 1;
}
```

## Srodne Funkcije
