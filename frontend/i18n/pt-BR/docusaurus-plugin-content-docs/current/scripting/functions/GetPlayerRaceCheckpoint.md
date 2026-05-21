---
title: GetPlayerRaceCheckpoint
sidebar_label: GetPlayerRaceCheckpoint
description: "Obtenha a localização do ponto de verificação da corrida atual."
tags: ["player", "checkpoint", "racecheckpoint"]
---


<VersionWarn version='omp v1.1.0.2612' />

## Descrição

Obtenha a localização do ponto de verificação da corrida atual.

| Nome | Descrição |
| -------------- | ---------------------------------------------------------------------------------- |
| playerid | O ID do jogador do qual obter a posição do ponto de verificação.                            |
| &Float:centreX | Uma variável flutuante na qual armazenar a coordenada centerX, passada por referência. |
| &Float:centreY | Uma variável flutuante na qual armazenar a coordenada centerY, passada por referência. |
| &Float:centreZ | Uma variável flutuante na qual armazenar a coordenada centerZ, passada por referência. |
| &Float:nextX | Uma variável float na qual armazenar a coordenada nextX, passada por referência.   |
| &Float:nextY | Uma variável flutuante na qual armazenar a coordenada nextY, passada por referência.   |
| &Float:nextZ | Uma variável float na qual armazenar a coordenada nextZ, passada por referência.   |
| &Float:radius | Uma variável flutuante na qual armazenar o raio, passada por referência.             |

## Retornos

Esta função não retorna nenhum valor específico.

## Exemplos

```c
SetPlayerRaceCheckpoint(playerid, CP_TYPE_GROUND_NORMAL, 373.1631, 2502.4644, 16.4774, 269.8644, 2503.4963, 16.4774, 2.0);

new Float:centreX,
    Float:centreY,
    Float:centreZ,
    Float:nextX,
    Float:nextY,
    Float:nextZ,
    Float:radius;

GetPlayerRaceCheckpoint(playerid, centreX, centreY, centreZ, nextX, nextY, nextZ, radius);
```
## Funções Relacionadas

- [SetPlayerCheckpoint](SetPlayerCheckpoint): Crie um ponto de verificação para um jogador.
- [DisablePlayerCheckpoint](DisablePlayerCheckpoint): Desativa o checkpoint atual do jogador.
- [IsPlayerInCheckpoint](IsPlayerInCheckpoint): Verifica se um jogador está em um checkpoint.
- [SetPlayerRaceCheckpoint](SetPlayerRaceCheckpoint): Crie um posto de controle de corrida para um jogador.
- [DisablePlayerRaceCheckpoint](DisablePlayerRaceCheckpoint): Desativa o checkpoint de corrida atual do jogador.
- [IsPlayerInRaceCheckpoint](IsPlayerInRaceCheckpoint): Verifica se um jogador está em um posto de controle de corrida.
- [IsPlayerRaceCheckpointActive](IsPlayerRaceCheckpointActive): Verifique se o jogador tem atualmente um ponto de verificação de corrida visível.

## Callbacks Relacionadas

- [OnPlayerEnterCheckpoint](../callbacks/OnPlayerEnterCheckpoint): Chamado quando um jogador entra em um checkpoint.
- [OnPlayerLeaveCheckpoint](../callbacks/OnPlayerLeaveCheckpoint): Chamado quando um jogador sai de um posto de controle.
- [OnPlayerEnterRaceCheckpoint](../callbacks/OnPlayerEnterRaceCheckpoint): Chamado quando um jogador entra em um checkpoint de corrida.
- [OnPlayerLeaveRaceCheckpoint](../callbacks/OnPlayerLeaveRaceCheckpoint): Chamado quando um jogador sai de um posto de controle de corrida.
