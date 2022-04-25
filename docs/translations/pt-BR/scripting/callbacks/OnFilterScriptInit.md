---
title: OnFilterScriptInit
description: Esse callback é executado quando o filterscript é inciado (carregado).
tags: []
---

## Description

Esse callback é executado quando o filterscript é inciado (carregado). É utilizado somente em filterscripts!

## Exemplos

```c
public OnFilterScriptInit()
{
    print("\n--------------------------------------");
    print("O filter script foi carregado.");
    print("--------------------------------------\n");
    return 1;
}
```

## Callbacks Relacionados

- [OnFilterSciptExit](OnFilterScriptExit): Executada quando o filterscript é carregado.
- [OnGameModeInit](OnGameModeInit): Executada quando o gamemode é iniciado.
- [OnGameModeExit](OnGameModeExit): Executada quando o gamemode é desligado.