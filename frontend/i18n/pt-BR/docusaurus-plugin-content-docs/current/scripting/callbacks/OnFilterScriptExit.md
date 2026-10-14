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

As seguintes Callbacks também podem ser úteis, pois estão relacionadas a esta Callback.

- [OnFilterScriptInit](OnFilterScriptInit): Chamado quando um filterscript é carregado.
- [OnGameModeInit](OnGameModeInit): Chamada na inicialização do gamemode.
- [OnGameModeExit](OnGameModeExit): Chamado quando um gamemode é encerrado.
