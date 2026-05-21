---
title: IsPlayerInDriveByMode
sidebar_label: IsPlayerInDriveByMode
description: "Verifique se o jogador está no modo driveby."
tags: ["player"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Verifique se o jogador está no modo driveby.

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

Retorna true se o jogador estiver no modo driveby, caso contrário, false.

## Exemplos

```c
if (IsPlayerInDriveByMode(playerid))
{
    // faça alguma coisa
}
```