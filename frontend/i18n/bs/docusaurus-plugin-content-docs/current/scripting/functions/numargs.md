---
title: numargs
sidebar_label: numargs
description: Dohvatite broj argumenata proslijeđenih funkciji.
tags: []
---

## Deskripcija

Dohvatite broj argumenata proslijeđenih funkciji.

## Primjeri

```c
SomeFunction(...)
{
    printf("numargs(): %i", numargs());
}

public OnFilterScriptInit()
{
    SomeFunction(1, 2, 3);
}

// Output: "numargs(): 3"
// Zato što su 3 parametra (1, 2, 3) proslijeđena.
```

## Srodne Funkcije

- [getarg](getarg): Dohvaćanje argumenta iz liste argumenata varijable.
- [setarg](setarg): Postavi argument.
