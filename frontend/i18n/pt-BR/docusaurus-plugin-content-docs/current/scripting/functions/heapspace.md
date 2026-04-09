---
title: heapspace
sidebar_label: heapspace
description: Retorna a quantidade de memória disponível para heap/stack em bytes.
tags: ["core"]
---

<LowercaseNote />

## Descrição

Retorna a quantidade de memória disponível para heap/stack em bytes.

## Exemplos

```c
public OnGameModeInit()
{
    printf("Heapspace: %i kilobytes", heapspace() / 1024);
    return 1;
}
```
