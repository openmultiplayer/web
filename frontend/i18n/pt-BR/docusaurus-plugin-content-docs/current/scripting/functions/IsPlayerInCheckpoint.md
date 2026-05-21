---
title: IsPlayerInCheckpoint
sidebar_label: IsPlayerInCheckpoint
description: "Verifique se o jogador está dentro de um checkpoint, isso pode ser usado para propriedades ou pontos de teletransporte, por exemplo."
tags: ["player", "checkpoint"]
---


## Descrição

Verifique se o jogador está dentro de um checkpoint, isso pode ser usado para propriedades ou pontos de teletransporte, por exemplo.

| Nome | Descrição |
| -------- | ------------------------------------------ |
| playerid | O jogador cujo status você deseja saber. |

## Retornos

**false** se o jogador não estiver dentro do posto de controle, caso contrário **true**

## Exemplos

```c
if (IsPlayerInCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```
## Funções Relacionadas

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Crie um ponto de verificação para um jogador.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Verifique se o jogador tem um checkpoint visível no momento.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Desativa o checkpoint atual do jogador.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Crie um posto de controle de corrida para um jogador.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Desativa o checkpoint de corrida atual do jogador.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Verifica se um jogador está em um checkpoint de corrida.

## Callbacks Relacionadas

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Chamado quando um jogador entra em um checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Chamado quando um jogador sai de um posto de controle.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Chamado quando um jogador entra em um checkpoint de corrida.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Chamado quando um jogador sai de um posto de controle de corrida.
