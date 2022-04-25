---
title: OnFilterScriptExit
description: Esse callback é executado quando o filterscript é descarregado do servidor.
tags: []
---

## Descrição

Esse callback é executado somente quando o filterscript é descarregado do servidor. O mesmo só pode ser utilizado em de filterscripts.

## Exemplos

```c
public OnFilterScriptExit()
{
    print("\n--------------------------------------");
    print(" Descarregando meu filterscript");
    print("--------------------------------------\n");
    return 1;
}
```

## Callbacks Relacionados

- [OnFilterScriptInit](OnFilterScriptInit): Executada quando o filterscript é carregado.
- [OnGameModeInit](OnGameModeInit): Executada quando o gamemode é iniciado.
- [OnGameModeExit](OnGameModeExit): Executada quando o gamemode é desligado.
