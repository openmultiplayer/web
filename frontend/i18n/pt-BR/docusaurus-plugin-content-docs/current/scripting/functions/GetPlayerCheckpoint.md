---
title: GetPlayerCheckpoint
sidebar_label: GetPlayerCheckpoint
description: "Obtenha a localização do ponto de verificação atual."
tags: ["player", "checkpoint"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a localização do ponto de verificação atual.

| Nome | Descrição |
| -------------- | ---------------------------------------------------------------------------------- |
| playerid | O ID do jogador do qual obter a posição do ponto de verificação.                            |
| &Float:centreX | Uma variável flutuante na qual armazenar a coordenada centerX, passada por referência. |
| &Float:centreY | Uma variável flutuante na qual armazenar a coordenada centerY, passada por referência. |
| &Float:centreZ | Uma variável flutuante na qual armazenar a coordenada centerZ, passada por referência. |
| &Float:radius | Uma variável flutuante na qual armazenar o raio, passada por referência.             |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
SetPlayerCheckpoint(playerid, 408.9874, 2537.8059, 16.5455, 1.5);

new Float:centreX,
    Float:centreY,
    Float:centreZ,
    Float:radius;

GetPlayerCheckpoint(playerid, centreX, centreY, centreZ, radius);
```
## Funções Relacionadas

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Crie um ponto de verificação para um jogador.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Desativa o checkpoint atual do jogador.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Verifica se um jogador está em um checkpoint.
- [IsPlayerCheckpointActive](IsPlayerCheckpointActive): Verifique se o jogador tem um checkpoint visível no momento.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Crie um posto de controle de corrida para um jogador.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Desativa o checkpoint de corrida atual do jogador.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Verifica se um jogador está em um posto de controle de corrida.

## Callbacks Relacionadas

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Chamado quando um jogador entra em um checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Chamado quando um jogador sai de um posto de controle.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Chamado quando um jogador entra em um checkpoint de corrida.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Chamado quando um jogador sai de um posto de controle de corrida.
