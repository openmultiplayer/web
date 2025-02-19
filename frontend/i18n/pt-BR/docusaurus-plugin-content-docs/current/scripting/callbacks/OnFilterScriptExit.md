---
title: OnFilterScriptExit
sidebar_label: OnFilterScriptExit
description: Esta callback é chamada quando um filterscript é descarregado.
tags: []
---

## Descrição

Esta callback é chamada quando um filterscript é descarregado. É apenas chamado dentro do filterscript que descarregou.

## Exemplos

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print("Meu Filterscript descarregou");
    print("--------------------------------------\n");
    return 1;
}
```

## Funções Relacionadas
