---
title: OnFilterScriptInit
description: Esta callback é chamada quando um filterscript é inicializado.
tags: []
---

## Descrição

Esta callback é chamada quando um filterscript é inicializado. É apenas chamado dentro do filterscript que carregou.

## Exemplos

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("O Filterscript carregou.");
    print("--------------------------------------\n");
    return 1;
}
```

## Funções Relacionadas
