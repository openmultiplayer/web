---
title: IsPlayerCuffed
sidebar_label: IsPlayerCuffed
description: "Verifica se a ação especial do jogador está algemada."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifica se a ação especial do jogador está algemada.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

Retorna true se o jogador estiver algemado, caso contrário, false.

## Exemplos

```c
SetPlayerSpecialAction(playerid, SPECIAL_ACTION_CUFFED);

if (IsPlayerCuffed(playerid))
{
    // faça alguma coisa
}
```