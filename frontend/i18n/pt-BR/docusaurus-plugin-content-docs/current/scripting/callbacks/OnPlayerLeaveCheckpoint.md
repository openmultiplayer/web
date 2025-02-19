---
title: OnPlayerLeaveCheckpoint
sidebar_label: OnPlayerLeaveCheckpoint
description: Esta callback é chamada quando um jogador sai de um checkpoint definido para eles por SetPlayerCheckpoint.
tags: ["player", "checkpoint"]
---

## Descrição

Esta callback é chamada quando um jogador sai de um checkpoint definido para eles por SetPlayerCheckpoint. Apenas um checkpoint pode ser definido por vez.

| Nome     | Descrição                                          |
| -------- | -------------------------------------------------- |
| playerid | O ID do jogador que saiu do respectivo checkpoint. |

## Retorno

Sempre é chamada primeiro em Filterscripts..

## Exemplos

```c
public OnPlayerLeaveCheckpoint(playerid)
{
    printf("Jogador %i saiu do checkpoint!", playerid);
    return 1;
}
```

## Notas

<TipNPCCallbacksPT />

## Funções Relacionadas

- [SetPlayerCheckpoint](../functions/SetPlayerCheckpoint): Cria o checkpoint para um jogador.
- [DisablePlayerCheckpoint](../functions/DisablePlayerCheckpoint): Desativa o atual checkpoint de um jogador.
- [IsPlayerInCheckpoint](../functions/IsPlayerInCheckpoint): Verifica se o jogador está em um checkpoint.
- [SetPlayerRaceCheckpoint](../functions/SetPlayerRaceCheckpoint): Cria um checkpoint de corrida para o jogador.
- [DisablePlayerRaceCheckpoint](../functions/DisablePlayerRaceCheckpoint): Desativa o atual checkpoint de corrida para o jogador.
- [IsPlayerInRaceCheckpoint](../functions/IsPlayerInRaceCheckpoint): Verifica se o jogador está em um checkpoint de corrida.
