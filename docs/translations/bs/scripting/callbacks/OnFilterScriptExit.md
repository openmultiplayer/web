---
id: OnFilterScriptExit
title: OnFilterScriptExit
description: Ovaj callback se poziva kada se filterskripta stopirala.
tags: []
---

## Deskripcija

Ovaj callback se poziva kada se filterskripta stopirala. Poziva se samo unutar filterskripte u kojoj se poziva stopiranje.

## Primjeri

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" My filterscript unloaded");
    print("--------------------------------------\n");
    return 1;
}
```

## Srodne Funkcije
