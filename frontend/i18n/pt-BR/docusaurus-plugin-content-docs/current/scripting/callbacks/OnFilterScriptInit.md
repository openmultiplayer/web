---
title: OnFilterScriptInit
sidebar_label: OnFilterScriptInit
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

As seguintes Callbacks também podem ser úteis, pois estão relacionadas a esta Callback.

- [OnFilterScriptExit](OnFilterScriptExit): Chamado quando um filterscript é descarregado.
- [OnGameModeInit](OnGameModeInit): Chamada na inicialização do gamemode.
- [OnGameModeExit](OnGameModeExit): Chamado quando um gamemode é encerrado.
