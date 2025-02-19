---
title: OnGameModeInit
sidebar_label: OnGameModeInit
description: Esta callback é acionada quando uma gamemode inicia.
tags: []
---

## Descrição

Esta callback é acionada quando uma gamemode inicia.

## Exemplos

```c
public OnGameModeInit()
{
    print("A Gamemode Iniciou!");
    return 1;
}
```

## Notas

:::tip

Esta função também pode ser usada em um filterscript para detectar se a gamemode mudou através de comandos do RCON como o "changemode" ou "gmx", pois mudar o gamemode não recarrega um filterscript.

:::

## Funções Relacionadas
