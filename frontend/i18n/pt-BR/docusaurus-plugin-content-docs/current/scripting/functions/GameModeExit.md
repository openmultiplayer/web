---
title: GameModeExit
sidebar_label: GameModeExit
description: Encerra o atual gamemode.
tags: []
---

## Descrição

Encerra o atual gamemode.

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
if (OneTeamHasWon)
{
    GameModeExit();
}
```

## Funções Relacionadas

- [SetModeRestartTime](SetModeRestartTime): Define o atraso entre o carregamento dos scripts principais, em segundos.

## Callbacks Relacionadas

- [OnGameModeExit](../callbacks/OnGameModeExit): Chamado quando um gamemode é encerrado.
