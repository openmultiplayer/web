---
title: IsPlayerInRaceCheckpoint
sidebar_label: IsPlayerInRaceCheckpoint
description: "Verifique se o jogador está dentro do ponto de verificação de corrida atual (SetPlayerRaceCheckpoint)."
tags: ["player", "checkpoint", "racecheckpoint"]
---


## Descrição

Verifique se o jogador está dentro do ponto de verificação de corrida atual (SetPlayerRaceCheckpoint).

| Nome | Descrição |
| -------- | ------------------------------ |
| playerid | O ID do jogador a ser verificado. |

## Retornos

**true** – O jogador está em um posto de controle de corrida.

**false** – O jogador não está em um posto de controle de corrida.

## Exemplos

```c
if (IsPlayerInRaceCheckpoint(playerid))
{
    SetPlayerHealth(playerid, 100.0);
}
```
## Funções Relacionadas

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Crie um ponto de verificação para um jogador.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): Verifique se o jogador tem atualmente um ponto de verificação de corrida visível.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Desativa o checkpoint atual do jogador.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Verifica se um jogador está em um checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Crie um posto de controle de corrida para um jogador.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Desativa o checkpoint de corrida atual do jogador.

## Callbacks Relacionadas

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Chamado quando um jogador entra em um checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Chamado quando um jogador sai de um posto de controle.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Chamado quando um jogador entra em um checkpoint de corrida.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Chamado quando um jogador sai de um posto de controle de corrida.
