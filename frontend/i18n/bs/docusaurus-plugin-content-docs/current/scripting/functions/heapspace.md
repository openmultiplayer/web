---
title: heapspace
sidebar_label: heapspace
description: Vraća količinu memorije dostupne za hrpu/stog (heap/stack) u bajtovima.
tags: []
---

## Deskripcija

Vraća količinu memorije dostupne za hrpu/stog (heap/stack) u bajtovima.

## Primjeri

```c
public OnGameModeInit()
{
    printf("Heapspace: %i kilobytes", heapspace() / 1024);
    return 1;
}
```

## Srodne Funkcije
