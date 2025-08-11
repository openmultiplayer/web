---
title: DisablePlayerRaceCheckpoint
sidebar_label: DisablePlayerRaceCheckpoint
description: Desativa qualquer checkpoint de corrida inicializado para um jogador específico, já que você só pode ter um de cada vez.
tags: ["player", "checkpoint", "racecheckpoint"]
---

## Descrição

Desativa qualquer checkpoint de corrida inicializado para um jogador específico, já que você só pode ter um de cada vez.

| Nome     | Descrição                                       |
| -------- | ------------------------------------------------- |
| playerid | O jogador para desativar o checkpoint atual. |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
public OnPlayerLeaveRaceCheckpoint(playerid)
{
    DisablePlayerRaceCheckpoint(playerid);
    return 1;
}
```

## Funções Relacionadas

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Cria um checkpoint para um jogador.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Desativa o checkpoint atual do jogador.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Verifica se um jogador está em um checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Cria um checkpoint de corrida para um jogador.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Verifica se um jogador está em um checkpoint de corrida.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): Verifica se o jogador atualmente tem um checkpoint de corrida visível.

## Callbacks Relacionadas

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Chamado quando um jogador entra em um checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Chamado quando um jogador sai de um checkpoint.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Chamado quando um jogador entra em um checkpoint de corrida.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Chamado quando um jogador sai de um checkpoint de corrida.